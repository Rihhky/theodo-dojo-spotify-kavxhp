import logo from './assets/logo.svg';
import './App.css';
import { useState } from 'react';
import { fetchTracks } from './lib/fetchTracks';
import { useQuery } from '@tanstack/react-query';
import { SavedTrack, Track } from 'spotify-types';
import swal from 'sweetalert';

const trackUrls = [
  'https://p.scdn.co/mp3-preview/742294f35af9390e799dd96c633788410a332e52',
  'https://p.scdn.co/mp3-preview/5a12483aa3b51331aba663131dbac967ccb33d99',
  'https://p.scdn.co/mp3-preview/31f65b6a613010f22316c7be335b62226cf2f263',
  'https://p.scdn.co/mp3-preview/0f6b8a3524ec410020457da4cdd7717f9addce2f',
  'https://p.scdn.co/mp3-preview/ac28d1b0be285ed3bfd8e9fa5fad133776d7cf36',
];

const AlbumCover = ({ track }: { track: SavedTrack }) => {
  const src = track.track.album.images[0]!.url; // A changer ;)
  return <img src={src} style={{ width: 400, height: 400 }} />;
};
const App = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackOrder, setTrackOrder] = useState(arrayShuffle());

  const goToNextTrack = () => {
    setTrackIndex(trackIndex + 1);
  };

  const checkAnswer = (t1, t2) => {
    if (t1 == t2) {
      swal('Bravo !', 'sous-titre', 'success');
    } else {
      swal('Raté !', 'Ceci est une alerte', 'error');
    }
  };
  const { data: tracks } = useQuery({
    queryKey: ['tracks'],
    queryFn: fetchTracks,
  });

  const arrayShuffle = a => {
    var l = a.length,
      t,
      r;
    while (0 !== l) {
      r = Math.floor(Math.random() * l);
      l -= 1;
      t = a[l];
      a[l] = a[r];
      a[r] = t;
    }
    return a;
  };

  const Numbers = n => {
    var l = [];
    for (var i = 0; i < n; i += 1) {
      l.push(i);
    }
    return l;
  };

  if (tracks !== undefined && tracks[trackIndex] !== undefined) {
    var track1 = tracks[trackIndex].track.name;
    var track2 = tracks[0].track.name;
    var track3 = tracks[1].track.name;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Bienvenue sur le blind test de Noah</h1>
      </header>
      <div className="App-images">
        {tracks !== undefined && tracks[trackIndex] !== undefined && (
          <AlbumCover track={tracks[trackIndex]} />
        )}
      </div>
      <div className="App-buttons"></div>

      {tracks !== undefined && tracks[trackIndex] !== undefined ? (
        <div>
          <audio src={tracks[trackIndex].track.preview_url} autoPlay controls />
          <span>{tracks[trackIndex].track.name}</span>
          <button onClick={goToNextTrack}>Next track</button>
          <button
            onClick={() => checkAnswer(track1, tracks[trackIndex]!.track.name)}
          >
            {track1}
          </button>
          <button
            onClick={() => checkAnswer(track2, tracks[trackIndex]!.track.name)}
          >
            {track2}
          </button>
          <button
            onClick={() => checkAnswer(track3, tracks[trackIndex]!.track.name)}
          >
            {track3}
          </button>
        </div>
      ) : (
        <div> Loading </div>
      )}
    </div>
  );
};

export default App;
