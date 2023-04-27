import storage from './storage';

const KEY = 'access_token';

const token = {
  get: () => {
    if (storage.isSupported) {
      return storage.get<string>(KEY);
    }

    return '';
  },

  set: (newTokenValue: string) => {
    if (storage.isSupported) {
      storage.set(KEY, newTokenValue);
    }
  },
};

export default token;
