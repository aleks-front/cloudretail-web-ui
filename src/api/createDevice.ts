import json from './json';

export default () => json(fetch('/devices', { method: 'POST' }));
