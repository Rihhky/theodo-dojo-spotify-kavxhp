import { SavedTrack } from 'spotify-types';

const apiToken =
  'BQAc8mP_y67J57ru2A8gKwbm6EapIg2ePQ7vRevS5VNfAdLblOk4SFpAzc4pJjSNFbCV2yP2pO7TUp8au9sbHyBs7OG-S6P5lZa54VjFb__SvTwyCisDhPJRH3nLi3Cobb4x3aXiGIu7milWuRaZwoHKUbqs0N3NMabvvM2HqJRQBhZuG-gFKAUQUznciJ8';

export const fetchTracks = async (): Promise<SavedTrack[]> => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }
  const data = (await response.json()) as { items: unknown[] };

  return data.items;
};
