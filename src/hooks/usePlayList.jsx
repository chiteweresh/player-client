import { useEffect, useState } from 'react';

const usePlayList = () => {
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    fetch('./api/playlist.json')
      .then((res) => res.json())
      .then((data) => {
        setPlaylist(data);
      })
      .catch((error) => {
        console.error('Error :', error);
      });
  }, []);

  return playlist;
};
export default usePlayList;
