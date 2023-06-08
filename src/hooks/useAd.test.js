import { renderHook, act, waitFor } from '@testing-library/react';
import useAd from './useAd';
import {
  checkInAd,
  getAd,
  getAdjustVideoTime,
  getSeekTime,
} from '../utils/utils';

describe('useAd', () => {
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

  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockAdData),
    });
  });
  afterEach(() => {
    global.fetch.mockRestore();
  });

  it('should return with default values', () => {
    const { result } = renderHook(() => useAd(null, 0, 0));
    expect(result.current.adInfo).toEqual({});
    expect(result.current.inAd).toEqual(false);
    expect(result.current.modifiedTime).toEqual(0);
    expect(result.current.seekTime).toEqual(0);
  });

  it('should fetch ad data and update values', async () => {
    const adUrl = 'mock-ad-url';
    const videoTime = 80;
    const seekFrame = 15;

    const { result } = renderHook(() => useAd(adUrl, videoTime, seekFrame));
    expect(global.fetch).toHaveBeenCalledWith(adUrl);
    await act(async () => {
      await waitFor(() => {
        return result.current.adInfo !== null;
      });
    });
    expect(result.current.adInfo).toEqual(getAd(mockAdData, videoTime));
    expect(result.current.inAd).toEqual(checkInAd(mockAdData, videoTime));
    expect(result.current.modifiedTime).toEqual(
      getAdjustVideoTime(mockAdData, videoTime)
    );
    expect(result.current.seekTime).toEqual(getSeekTime(mockAdData, seekFrame));
  });
});
