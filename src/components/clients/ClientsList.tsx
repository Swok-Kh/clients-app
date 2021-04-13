import { FunctionComponent } from "react";
import { useQuery } from "react-query";
import { getClients, IClientFull } from "../../services/api";
import ClientItem from "./ClientItem";

const Clients: FunctionComponent = () => {
  const { data, isLoading, error } = useQuery("clients", getClients);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <ul className="space-y-4">
      {data.getClients.map((client: IClientFull) => (
        <ClientItem key={client.id} client={client} />
      ))}
    </ul>
  );
};

export default Clients;
