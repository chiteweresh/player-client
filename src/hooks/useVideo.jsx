import { useEffect, useState } from 'react';
import { fetchVideoData } from '../utils/utils';
import errorCover from '../Error.png';

const useVideo = (currentAsset) => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [videoPoster, setVideoPoster] = useState(null);
  const [videoDuration, setVideoDuration] = useState(null);
  const [adUrl, setAdUrl] = useState(null);

  useEffect(() => {
    fetchVideoData(currentAsset)
      .then((data) => {
        setVideoPoster(data.poster);
        setVideoUrl(data.source);
        setVideoDuration(data.duration);
        setAdUrl(data.ad);
      })
      .catch(() => {
        setVideoPoster(errorCover);
        setVideoUrl(null);
        setVideoDuration(null);
        setAdUrl(null);
      });
  }, [currentAsset]);

  return { videoPoster, videoUrl, videoDuration, adUrl };
};
export default useVideo;
