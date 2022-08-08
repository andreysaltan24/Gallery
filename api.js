const URL = ' https://jsonplaceholder.typicode.com';

export const getAlbums = () => {
  return fetch(`${URL}/albums`).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error('Sorry albums Error');
  });
};

export const getPhoto = (id = '1') => {
  return fetch(`${URL}/photos?albumId=${id}`).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error('Sorry Photos Error');
  });
};
