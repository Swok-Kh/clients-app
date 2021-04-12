import React, { useContext } from "react";
import { IClientFull } from "../../services/api";
import Button from "../UI/Button";
import { ModalContext } from "./ModalProvider";

interface IModalProps {
  client: IClientFull | null;
}

const Modal = ({ client }: IModalProps) => {
  const { closeModal } = useContext(ModalContext);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-gray-500 bg-opacity-50 flex items-center justify-center">
      <div className="shadow-md bg-white rounded-md p-4">
        <Button label="Close" onClick={() => closeModal()} />
        {client && (
          <>
            <p>
              {client.firstName} {client.lastName}
            </p>
            <p>{client?.phone}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
