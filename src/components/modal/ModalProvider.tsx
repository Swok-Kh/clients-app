import {
  createContext,
  FunctionComponent,
  ReactChild,
  useCallback,
  useEffect,
  useState,
} from "react";
import { IClientFull } from "../../services/api";
import Modal from "./Modal";

interface IModalContext {
  isOpen: boolean;
  openModal: Function;
  closeModal: Function;
}

interface IModalProviderProps {
  children: ReactChild;
}

export const ModalContext = createContext<IModalContext>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

const ModalProvider: FunctionComponent<IModalProviderProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [client, setClient] = useState<IClientFull | null>(null);

  const openModal = (client: IClientFull | undefined) => {
    if (client) setClient(client);

    setIsOpen(true);
  };

  const closeModal = () => {
    setClient(null);
    setIsOpen(false);
  };

  const handleModalKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.code === "Escape") closeModal();
  }, []);

  useEffect(() => {
    if (isOpen) document.addEventListener("keydown", handleModalKeyDown);
    else document.removeEventListener("keydown", handleModalKeyDown);

    return document.removeEventListener("keydown", handleModalKeyDown);
  }, [handleModalKeyDown, isOpen]);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      {isOpen && <Modal client={client} />}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
