export const fetchGQL = (query: string, variables: string) => {
  const url = 'http://127.0.0.1:8000/graphql';
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query,
      variables
    })
  });
};

export const handleGQLRequest = async (
  query: string,
  variables: string,
  errorMessage: string,
  errorFunction?: () => any
) => {
  const resp = await fetchGQL(query, variables);

  if (!resp.ok) {
    if (errorFunction) errorFunction();
    throw new Error(errorMessage);
  }

  const resData = await resp.json();
  if (resData.errors) {
    if (errorFunction) errorFunction();
    throw new Error(errorMessage);
  }
  return resData.data;
};
