import { useContext } from "react";
import { ModalContext } from "../modal/ModalProvider";
import Button from "../UI/Button";

const AddClient = () => {
  const { openModal } = useContext(ModalContext);
  return (
    <div className="fixed bottom-2 right-2">
      <Button
        label="Add"
        onClick={() => {
          openModal();
        }}
      />
    </div>
  );
};

export default AddClient;
