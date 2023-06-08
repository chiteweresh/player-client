import API_URL from '../constants';

export const getDisplayTime = (time) => {
  if (!time || time <= 0) {
    return '00:00:00';
  }
  const hour = Math.floor(time / 3600)
    .toString()
    .padStart(2, '0');
  const minute = Math.floor((time % 3600) / 60)
    .toString()
    .padStart(2, '0');
  const second = Math.floor(time % 60)
    .toString()
    .padStart(2, '0');
  return `${hour}:${minute}:${second}`;
};

export const getShift = (e, ref) => {
  const clickPosition = e.pageX;
  const panelPosition = Math.floor(ref.current.getBoundingClientRect().left);
  return clickPosition - panelPosition;
};

export const fetchVideoData = (currentAsset) => {
  return fetch(`${API_URL}/play/${currentAsset}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('请求视频数据时出现错误:', error);
    });
};

export const checkInAd = (adData, videoTime) => {
  if (videoTime === 0) {
    return false;
  }
  return adData.some(
    (ad) => videoTime >= ad.startTime && videoTime < ad.startTime + ad.duration
  );
};

export const getAd = (adData, videoTime) => {
  const currentAvails = adData?.find(
    (avails) =>
      videoTime > avails.startTime &&
      videoTime < avails.startTime + avails.duration
  );
  if (!currentAvails) {
    return {};
  }
  const { ads } = currentAvails;
  const totalAds = ads.length;
  const currentAdIndex = ads.findIndex(
    (ad) => videoTime > ad.startTime && videoTime < ad.startTime + ad.duration
  );
  const currentAd = ads[currentAdIndex];
  return {
    adDuration: currentAd.duration,
    adProgress: videoTime - currentAd.startTime,
    adIndex: currentAdIndex + 1,
    totalAds,
  };
};

export const getAdjustVideoTime = (adData, videoTime) => {
  if (!adData) {
    return videoTime;
  }
  const adDurationSum = adData.reduce((sum, ad) => {
    if (videoTime >= ad.startTime) {
      return sum + ad.duration;
    }
    return sum;
  }, 0);
  return videoTime - adDurationSum;
};

export const getSeekTime = (adData, seekFrame) => {
  if (!adData) {
    return seekFrame;
  }
  return adData.reduce((seekTime, ad) => {
    if (seekTime >= ad.startTime) {
      return seekTime + ad.duration;
    }
    return seekTime;
  }, seekFrame);
};
