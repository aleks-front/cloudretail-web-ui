import { fetchJson } from './fetchJson';

export const validatePreviousSession = (authToken) => {
  return fetchJson(`api/auth-tokens/${authToken}`);
};
