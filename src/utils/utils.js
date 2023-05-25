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

export const fetchVideoData = (currentSource) => {
  return fetch(`/api/play/${currentSource}.json`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('请求视频数据时出现错误:', error);
    });
};

export const checkInAd = (adData, time) => {
  return adData.some(
    (ad) => time > ad.startTime && time <= ad.startTime + ad.duration
  );
};

export const getAdInfo = (adData, videoTime) => {
  const currentIndex = adData?.findIndex(
    (ad) => videoTime > ad.startTime && videoTime <= ad.startTime + ad.duration
  );
  const totalAds = adData?.length;
  if (currentIndex !== -1) {
    const currentAd = adData[currentIndex];
    return {
      adDuration: currentAd.duration,
      adProgress: videoTime - currentAd.startTime,
      adIndex: currentIndex + 1,
      totalAds,
    };
  }
  return {};
};

export const getAdjustVideoTime = (adData, videoTime) => {
  const adDurationSum = adData?.reduce((sum, ad) => {
    if (videoTime >= ad.startTime) {
      return sum + ad.duration;
    }
    return sum;
  }, 0);
  return videoTime - adDurationSum;
};

export const getSeekTime = (adData, seekFrame) => {
  return adData?.reduce((seekTime, ad) => {
    if (seekTime >= ad.startTime) {
      return seekTime + ad.duration;
    }
    return seekTime;
  }, seekFrame);
};
