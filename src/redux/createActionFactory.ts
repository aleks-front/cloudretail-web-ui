import Action from '../types/Action';

export default <T>(type: string) => {
  const actionFactory = (payload?: T): Action<T> => {
    if (typeof payload === 'undefined') {
      return { type };
    }
    return { type, payload };
  };
  actionFactory.type = type;
  return actionFactory;
};
