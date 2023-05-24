import { useEffect, useState } from 'react';
import { fetchVideoData } from '../utils/utils';

const useVideo = (currentAsset) => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [videoPoster, setVideoPoster] = useState(null);
  const [videoDuration, setVideoDuration] = useState(null);
  const [adUrl, setAdUrl] = useState(null);

  useEffect(() => {
    fetchVideoData(currentAsset).then((data) => {
      setVideoPoster(data.poster);
      setVideoUrl(data.source);
      setVideoDuration(data.duration);
      setAdUrl(data.ad);
    });
  }, [currentAsset]);

  return { videoPoster, videoUrl, videoDuration, adUrl };
};
export default useVideo;
