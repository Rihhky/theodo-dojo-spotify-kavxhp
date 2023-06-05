import { SavedTrack } from 'spotify-types';

const apiToken =
  'BQCVXpvahT2D4CLjefc6LIuCyH8UJvxKh9b1Tz4xy2671ofLjieHZBjoSvhSbFyt-HmOChsC83sIyQKDrfE13H0GED-1Ykutv_k7A_mqFVh6Rptv5kYzT1Swmtg__w-2BARsSP77IuMsbX_ErL_YHDY2J85tbIgV4OPBwzisEqLIa7ArVe5Gh1brXLS7IRs';

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
