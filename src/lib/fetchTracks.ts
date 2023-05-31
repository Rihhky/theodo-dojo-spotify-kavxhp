const apiToken =
  'BQB0ddc8UPZ9HIHZqfWvAx4I-dIlZNzLXlE2R1zEN1atIHklso1WOCl-t0qfxbqgCkuBcH-YKuuYBgJ7NjkT94RmirGfhpF_s8xJsuTNE-Eas4UwPvHcjuNj_13zX3rMeoiwlxKVBipDgj66dccQOz9axGoZsKsKQllqTQozB2m_z75F6RmfnKClGaw7IjU';

export const fetchTracks = async () => {
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
