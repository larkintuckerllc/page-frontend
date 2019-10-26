import { ApolloCache } from 'apollo-cache';
import { ApolloClient } from 'apollo-client';
import { ApolloLink, Operation } from 'apollo-link';

// eslint-disable-next-line
type Data = { [key: string]: any };

const mutateOperation = (operation: Operation): void => {
  const { operationName } = operation;
  switch (operationName) {
    case 'books': {
      //
      break;
    }
    default:
  }
};

const transformedData = (operationName: string, cache: ApolloCache<object>, data: Data): Data => {
  switch (operationName) {
    case 'books': {
      break;
    }
    default:
  }
  return data;
};

export default new ApolloLink((operation, forward) => {
  const { operationName } = operation;
  const context = operation.getContext();
  const { cache } = context as ApolloClient<object>;
  mutateOperation(operation); // NOT PURE
  return forward(operation).map(result => {
    const { data } = result;
    if (data === undefined || data === null) {
      return result;
    }
    return {
      data: transformedData(operationName, cache, data),
    };
  });
});
