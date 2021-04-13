import { gql, GraphQLClient } from "graphql-request";
const endpoint: string = "https://test-task.expane.pro/api/graphql";
const graphQLClient: GraphQLClient = new GraphQLClient(endpoint);

interface IClient {
  firstName: string;
  lastName: string;
  phone?: string;
  avatarUrl?: string;
}
interface IClientFull extends IClient {
  id: string;
}

const getClients = (): Promise<any> => {
  const query: string = gql`
    {
      getClients {
        id
        firstName
        lastName
        phone
        avatarUrl
      }
    }
  `;
  return graphQLClient.request(query);
};

const addClient = (client: IClient): Promise<any> => {
  const query = gql`
    mutation AddClient(
      $firstName: String!
      $lastName: String!
      $phone: String
      $avatarUrl: String
    ) {
      addClient(
        firstName: $firstName
        lastName: $lastName
        phone: $phone
        avatarUrl: $avatarUrl
      ) {
        firstName
        lastName
        phone
        avatarUrl
      }
    }
  `;
  return graphQLClient.request(query, client);
};

const updateClient = (client: IClientFull): Promise<any> => {
  const query = gql`
    mutation UpdateClient(
      $id: ID!
      $firstName: String
      $lastName: String
      $phone: String
      $avatarUrl: String
    ) {
      updateClient(
        id: $id
        firstName: $firstName
        lastName: $lastName
        phone: $phone
        avatarUrl: $avatarUrl
      ) {
        id
        firstName
        lastName
        phone
        avatarUrl
      }
    }
  `;

  return graphQLClient.request(query, client);
};

export { getClients, addClient, updateClient };
export type { IClient, IClientFull };
