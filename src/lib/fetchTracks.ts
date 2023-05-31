import { SavedTrack } from 'spotify-types';

const apiToken =
  'BQBJvzEEIS417z2v8jz5sAYElFPBqOtBUL4RRNXj7J7xp3Aq2dCxITo6DzaPoDhWlLlmGrs-cljRFfzDU-SpeI8ja_fvS4c5ppEFeVS25k2cRuwWt7Jtsj7wJtSa0LXsRBdEN03zX674DtAKbGNIS8qTGNDFkpFxgUZ3eUOdV2fOWDCBE-JdSX342d0-LLQ';

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
