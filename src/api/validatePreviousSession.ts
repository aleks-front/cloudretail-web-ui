import { fetchJson } from './fetchJson';

export const validatePreviousSession = (authToken) => {
  return fetchJson({
    url: `api/auth-tokens`,
    headers: { Authorization: `Bearer ${authToken}` },
  });
};
