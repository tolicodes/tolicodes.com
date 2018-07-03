import {
  GET,
} from '../api';

const TEXT_PATHS = {
  aboutMe: '/sections-text/about-me.md',
};

export async function getHomeText() {
  const results = await Promise.all(
    Object.values(TEXT_PATHS).map(path => GET(path, null, { type: 'text' }))
  );

  return Object.keys(TEXT_PATHS).reduce((out, key, index) => {
    return {
      ...out,
      [key]: results[index],
    };
  }, {});
}
