type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface Params {
  url: string;
  method?: Method;
  headers?: any;
  payload?: any;
}

export const fetchJson = async ({
  url,
  method = 'GET',
  headers = {},
  payload: body,
}: Params) => {
  const request = await fetch(url, {
    method,
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  const json = await request.json();
  if (request.status >= 200 && request.status < 300) {
    return json;
  }
  throw new Error(json.message);
};
