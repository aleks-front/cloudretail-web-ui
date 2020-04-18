export const validatePreviousSession = ({ authToken }) => {
  return fetch(`api/auth-tokens/${authToken}`);
};
