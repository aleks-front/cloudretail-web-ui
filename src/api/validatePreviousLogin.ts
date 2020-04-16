export const validatePreviousLogin = ({ authToken }) => {
  return fetch(`api/auth-tokens/${authToken}`);
};
