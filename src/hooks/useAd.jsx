import { useEffect, useState } from 'react';
import { getModifiedTime, getSeekTime } from '../utils/utils';

const useAd = (adUrl, videoTime, seekFrame) => {
  const [adDuration, setAdDuration] = useState(15);
  const [adStartTime, setAdStartTime] = useState(0);
  const [inAd, setInAd] = useState(false);

  const adEndTime = adStartTime + adDuration;

  useEffect(() => {
    adUrl &&
      fetch(adUrl)
        .then((res) => res.json())
        .then((data) => {
          setAdDuration(data[0].duration);
          setAdStartTime(data[0].startTime);
        })
        .catch((error) => {
          console.error('请求广告数据时出现错误:', error);
        });
  }, [adUrl]);

  useEffect(() => {
    setInAd(videoTime > adStartTime && videoTime < adEndTime);
  }, [videoTime]);

  const modifiedTime = getModifiedTime(
    videoTime,
    adStartTime,
    adDuration,
    inAd
  );
  const seekTime = getSeekTime(adStartTime, seekFrame, adDuration);

  return { adDuration, inAd, modifiedTime, seekTime };
};
export default useAd;
