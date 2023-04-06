import React from 'react';
import './PlayList.scss';
import PropTypes from 'prop-types';

const PlayList = ({ currentSource, onUpdateSource }) => {
  const list = [1, 2, 3];

  return (
    <div className="playlist">
      {list.map((item) => (
        <button
          type="button"
          key={item}
          className={
            `/video/${item}.mp4` === currentSource
              ? 'active list-item'
              : 'list-item'
          }
          onClick={() => onUpdateSource(`/video/${item}.mp4`)}
        >
          video
          {item}
        </button>
      ))}
    </div>
  );
};

PlayList.propTypes = {
  currentSource: PropTypes.string,
  onUpdateSource: PropTypes.func.isRequired,
};
export default PlayList;
