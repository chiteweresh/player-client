import { fetchVideoData } from './utils';

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

    const result = await fetchVideoData(mockCurrentSource);
    expect(result).toEqual(mockData);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`/api/play/${mockCurrentSource}.json`);
  });

  it('handles fetch error', async () => {
    const mockError = new Error('Fetch error');

    global.fetch = jest.fn().mockRejectedValue(mockError);

    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    await fetchVideoData(mockCurrentSource);

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      '请求视频数据时出现错误:',
      mockError
    );

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`/api/play/${mockCurrentSource}.json`);
  });
});
