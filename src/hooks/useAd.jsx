import { useEffect, useState } from 'react';
import {
  checkInAd,
  getAdInfo,
  getAdjustVideoTime,
  getSeekTime,
} from '../utils/utils';

const useAd = (adUrl, videoTime, seekFrame) => {
  const [adData, setAdData] = useState(null);
  const [inAd, setInAd] = useState(false);

  useEffect(() => {
    adUrl &&
      fetch(adUrl)
        .then((res) => res.json())
        .then((data) => {
          setAdData(data);
        })
        .catch((error) => {
          console.error('请求广告数据时出现错误:', error);
        });
  }, [adUrl]);

  useEffect(() => {
    adData && setInAd(checkInAd(adData, videoTime));
  }, [videoTime, adData]);

  const adInfo = inAd ? getAdInfo(adData, videoTime) : null;
  const modifiedTime = !inAd ? getAdjustVideoTime(adData, videoTime) : null;
  const seekTime = getSeekTime(adData, seekFrame) || 0;

  return {
    adInfo,
    inAd,
    modifiedTime,
    seekTime,
  };
};
export default useAd;
