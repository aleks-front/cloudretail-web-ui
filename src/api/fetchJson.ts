type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface Params {
  method?: Method;
  headers?: any;
  payload?: any;
}

export const fetchJson = async (
  url: string,
  { method = 'GET', headers = {}, payload }: Params = {}
) => {
  const request = await fetch(url, {
    method,
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: payload ? JSON.stringify(payload) : undefined,
  });
  let json;
  try {
    json = await request.json();
  } catch (error) {}
  if (request.status >= 200 && request.status < 300) {
    return json;
  }
  throw new Error(json.message);
};
