import { Reducer } from 'redux';
import Action from '../types/Action';
import Dictionary from '../types/Dictionary';

export default <T>(initialState: T, handlers: Dictionary<Reducer<T, Action<any>>>) => {
  return (state: T = initialState, action: Action<any>) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
};
