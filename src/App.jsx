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
    <Wrapper>
      <VideoPlayer videoData={videoData} />
      <PlayList
        currentAsset={currentAsset}
        onUpdateAsset={setCurrentAsset}
        playlist={playlist}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 800px;
`;

export default App;
