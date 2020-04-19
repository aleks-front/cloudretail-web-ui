import { fetchJson } from './fetchJson';

export const signIn = (payload) => {
  return fetchJson('api/auth-tokens', { method: 'POST', payload });
};
