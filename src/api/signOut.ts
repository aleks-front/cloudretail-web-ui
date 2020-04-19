import { fetchJson } from './fetchJson';

export const signOut = (authTokenId) => {
  return fetchJson(`api/auth-tokens/${authTokenId}`, { method: 'DELETE' });
};
