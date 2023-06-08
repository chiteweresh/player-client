import { useEffect, useState } from 'react';
import {
  checkInAd,
  getAd,
  getAdjustVideoTime,
  getSeekTime,
} from '../utils/utils';

const useAd = (adUrl, videoTime, seekFrame) => {
  const [adData, setAdData] = useState(null);
  const [inAd, setInAd] = useState(false);

  useEffect(() => {
    if (!adUrl) {
      setAdData(null);
      return;
    }
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

  const adInfo = getAd(adData, videoTime);
  const modifiedTime = getAdjustVideoTime(adData, videoTime);
  const seekTime = getSeekTime(adData, seekFrame);

  return {
    adInfo,
    inAd,
    modifiedTime,
    seekTime,
  };
};
export default useAd;
