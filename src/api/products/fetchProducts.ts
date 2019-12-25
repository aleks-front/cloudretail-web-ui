import json from '../json';

export default () => {
  return json(fetch('/products'));
};
