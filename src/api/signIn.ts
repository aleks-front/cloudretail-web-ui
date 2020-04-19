import { fetchJson } from './fetchJson';

export const signIn = (payload) => {
  return fetchJson({ method: 'POST', url: 'api/auth-tokens', payload });
};
