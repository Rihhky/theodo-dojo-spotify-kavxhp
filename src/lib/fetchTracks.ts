import { SavedTrack } from 'spotify-types';

const apiToken =
  'BQCoFBsIg3QHe_Lqd00Uyx7KlQu_f9k-98znpHb5B3xnZF5weM2p8fFq-CnjVabUhqCgS_KUpIDKbth3UOUf8W3nsMji4y9AbxpZDe1jtdlE07t5SA8b0Xu5DAQegLGyodjA1i_8iawgfGC-1dKaCuBcRLbvb4HPNoQILMI-nxGIZYOtm0brNWn79unA9eI';

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
