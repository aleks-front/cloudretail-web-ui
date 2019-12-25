export default async (fetchPromise: Promise<Response>) => {
  const response = await fetchPromise;
  return response.json();
};
