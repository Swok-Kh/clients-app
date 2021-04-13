import {
  createContext,
  FunctionComponent,
  ReactChild,
  useEffect,
  useState,
} from "react";
import { useQuery, useMutation, useIsFetching } from "react-query";
import {
  IClientFull,
  getClients,
  updateClient as apiUpdateClient,
  addClient as apiAddClient,
  IClient,
} from "../../services/api";
import Loader from "../UI/Loader";

interface IClientContext {
  clients: IClientFull[];
  addClient: Function;
  updateClient: Function;
  error: boolean;
}

interface IClientContextProps {
  children: ReactChild;
}

export const ClientContext = createContext<IClientContext>({
  clients: [],
  addClient: () => {},
  updateClient: () => {},
  error: false,
});

const ClientsProvider: FunctionComponent<IClientContextProps> = ({
  children,
}) => {
  const { data, refetch, isError } = useQuery("clients", getClients, {
    retry: 3,
  });
  const isFetching = useIsFetching();
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (isError) setError(true);
  }, [isError]);

  const onSuccess = () => {
    setError(false);
    refetch();
  };
  const onError = () => {
    setError(true);
  };

  const updateMutation = useMutation(apiUpdateClient, {
    onSuccess,
    onError,
  });

  const addMutation = useMutation(apiAddClient, {
    onSuccess,
    onError,
  });

  const addClient = (client: IClient) => {
    addMutation.mutate(client);
  };

  const updateClient = (client: IClientFull) => {
    updateMutation.mutate(client);
  };

  const clients = data ? data.getClients : [];

  return (
    <ClientContext.Provider
      value={{
        error,
        clients,
        addClient,
        updateClient,
      }}>
      {children}
      {isFetching && <Loader />}
    </ClientContext.Provider>
  );
};

export default ClientsProvider;
