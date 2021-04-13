import { FunctionComponent, useContext } from "react";
import { IClientFull } from "../../services/api";
import ClientItem from "./ClientItem";
import { ClientContext } from "./ClientsProvider";

const ClientsList: FunctionComponent = () => {
  const { clients, error } = useContext(ClientContext);

  return (
    <div className="mt-20">
      {error && (
        <p className="text-center text-2xl italic">
          Sorry. Something went wrong. Try later...
        </p>
      )}
      {clients && (
        <ul className="space-y-4">
          {clients.map((client: IClientFull) => (
            <ClientItem key={client.id} client={client} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ClientsList;
