import { useState } from 'react';
import styled from 'styled-components';
import PlayList from './components/PlayList/PlayList';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import useVideo from './hooks/useVideo';
import usePlayList from './hooks/usePlayList';

const App = () => {
  const [currentAsset, setCurrentAsset] = useState('UUID001');
  const videoData = useVideo(currentAsset);
  const playlist = usePlayList();

  return (
    <>
      <Banner />
      <Wrapper>
        <VideoPlayer videoData={videoData} />
        <PlayList
          currentAsset={currentAsset}
          onUpdateAsset={setCurrentAsset}
          playlist={playlist}
        />
      </Wrapper>
      <Banner />
    </>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin: 30px;
  max-width: 1200px;
  min-height: 800px;
`;
const Banner = styled.div`
  background-color: lightblue;
  height: 40px;
`;

export default App;
