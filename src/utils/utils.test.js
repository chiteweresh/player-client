import * as utils from './utils';
import API_URL from '../constants';

const mockAdData = [
  {
    startTime: 5,
    duration: 15,
    ads: [
      {
        adId: '1_1',
        startTime: 5,
        duration: 10,
      },
      {
        adId: '1_2',
        startTime: 15,
        duration: 5,
      },
    ],
  },
  {
    startTime: 30,
    duration: 10,
    ads: [
      {
        adId: '2_1',
        startTime: 30,
        duration: 15,
      },
    ],
  },
];
const mockEmptyAdData = [];

describe('fetchVideoData', () => {
  const mockCurrentSource = 0;
  const mockData = {
    assetId: 'UUID002',
    poster: 'https://s2.l.jpg',
    source: 'https://dash.akamar/480p_heaac2_0.mpd',
    duration: 1,
    ad: '/api/play/0/ad.json',
  };
  it('fetches video data successfully', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    const result = await utils.fetchVideoData(mockCurrentSource);
    expect(result).toEqual(mockData);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`${API_URL}/play/${mockCurrentSource}`);
  });

  it('handles fetch error', async () => {
    const mockError = new Error('Fetch error');

    global.fetch = jest.fn().mockRejectedValue(mockError);

    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    await utils.fetchVideoData(mockCurrentSource);

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      '请求视频数据时出现错误:',
      mockError
    );

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`${API_URL}/play/${mockCurrentSource}`);
  });
});

describe('checkInAd', () => {
  it('should not be in ad when no ad', () => {
    const mockVideoTime = 10;
    const result = utils.checkInAd(mockEmptyAdData, mockVideoTime);
    expect(result).toBe(false);
  });

  it('should not be in ad when video time is out of the range of ad time', () => {
    const mockVideoTime = 100;
    const result = utils.checkInAd(mockAdData, mockVideoTime);
    expect(result).toBe(false);
  });

  it('should be in ad', () => {
    const mockVideoTime = 10;
    const result = utils.checkInAd(mockAdData, mockVideoTime);
    expect(result).toBe(true);
  });
});

describe('getAd', () => {
  it('should get current ad', () => {
    const mockVideoTime = 10;
    const result = utils.getAd(mockAdData, mockVideoTime);
    expect(result).toEqual({
      adDuration: 10,
      adProgress: 5,
      adIndex: 1,
      totalAds: 2,
    });
  });

  it('should return an empty object when not in ad', () => {
    const mockVideoTime = 100;
    const result = utils.getAd(mockAdData, mockVideoTime);
    expect(result).toEqual({});
  });

  it('should return an empty object when no ad data', () => {
    const mockVideoTime = 10;
    const result = utils.getAd(mockEmptyAdData, mockVideoTime);
    expect(result).toEqual({});
  });
});

describe('getAdjustVideoTime', () => {
  it('should subtract ad duration from video time when have an ad before', () => {
    const mockVideoTime = 25;
    const result = utils.getAdjustVideoTime(mockAdData, mockVideoTime);
    expect(result).toBe(10);
  });

  it('should return original videoTime when no ad', () => {
    const mockVideoTime = 25;
    const result = utils.getAdjustVideoTime(mockEmptyAdData, mockVideoTime);
    expect(result).toBe(25);
  });

  it('should return original videoTime when videoTime is smaller than the first ads startTime', () => {
    const mockVideoTime = 2;
    const result = utils.getAdjustVideoTime(mockAdData, mockVideoTime);
    expect(result).toBe(2);
  });
});

describe('getSeekTime', () => {
  it('should skip ad before seek frame time', () => {
    const mockSickFrame = 10;
    const result = utils.getSeekTime(mockAdData, mockSickFrame);
    expect(result).toBe(25);
  });

  it('should keep original seek frame time when no ad before', () => {
    const mockSickFrame = 3;
    const result = utils.getSeekTime(mockAdData, mockSickFrame);
    expect(result).toBe(3);
  });

  it('should not seek into next ad', () => {
    const mockSickFrame = 15;
    const result = utils.getSeekTime(mockAdData, mockSickFrame);
    expect(result).toBe(40);
  });
});
