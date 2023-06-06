import { SavedTrack } from 'spotify-types';

const apiToken =
  'BQAjkD4wN1wtYlmp91Ki86mFtmZc4I2wx35Qr4NTLKBbkCP0na3yE16RU-vV1pwJzNvVjFnz5QRdSBsZcYrtYTRwVDKmWfCmKbD2ITf-x2DBOu6d6jqFP5SfDPYWIhyQWTQQmwzJ4IJcPdfQ0YFg7FkVjAxu5UTSVPhloXH11nPgEhRYqnL0vaZZaYaww_g';

export const fetchTracks = async (): Promise<SavedTrack[]> => {
  const response = await fetch(
    'https://api.spotify.com/v1/playlists/7fy7VME98R536xcNzgnN7y/tracks?limit=50',
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + apiToken,
      },
    },
  );
  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }
  const data = (await response.json()) as { items: unknown[] };

  return data.items;
};
