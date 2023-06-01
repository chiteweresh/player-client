import { useEffect, useState } from 'react';
import API_URL from '../constants';

const usePlayList = () => {
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/playlist`)
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
