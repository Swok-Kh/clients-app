import React from "react";
import { IClientFull } from "../../services/api";

interface IClientItemProps {
  client: IClientFull;
}

const ClientItem = ({ client }: IClientItemProps) => {
  const { id, firstName, lastName, avatarUrl, phone } = client;

  return (
    <li className="shadow-md p-4 rounded-lg flex items-center">
      <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden mr-4">
        {avatarUrl && (
          <img
            className="w-full h-full object-cover object-center"
            src={avatarUrl}
            alt={`${firstName} ${lastName}`}
          />
        )}
      </div>
      <div>
        <h2 className="text-xl font-medium">
          {firstName} {lastName}
        </h2>
        <p className="text-gray-500">tel: {phone || "no phone"}</p>
      </div>
      <button
        className="ml-auto"
        onClick={() => {
          console.log(id);
        }}>
        Edit
      </button>
    </li>
  );
};

export default ClientItem;
