import { FunctionComponent, useContext } from "react";
import { IClientFull } from "../../services/api";
import { ModalContext } from "../modal/ModalProvider";
import Button from "../UI/Button";

interface IClientItemProps {
  client: IClientFull;
}

const ClientItem: FunctionComponent<IClientItemProps> = ({ client }) => {
  const { openModal } = useContext(ModalContext);
  const { firstName, lastName, avatarUrl, phone } = client;

  return (
    <li className="shadow-md p-4 rounded-lg flex items-center">
      <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gray-200 overflow-hidden mr-4 md:mr-8">
        {avatarUrl && (
          <img
            className="w-full h-full object-cover object-center"
            src={avatarUrl}
            alt={`${firstName} ${lastName}`}
          />
        )}
      </div>
      <div>
        <h2 className="text-md md:text-xl font-medium">
          {firstName} {lastName}
        </h2>
        <p className="text-xs md:text-base text-gray-500 ">
          tel: {phone || "no phone"}
        </p>
      </div>
      <Button
        className="ml-auto"
        label="Edit"
        onClick={() => openModal(client)}
      />
    </li>
  );
};

export default ClientItem;
