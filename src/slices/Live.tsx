import React, { FunctionComponent } from 'react';

interface LiveSliceProps {}

export const LiveSlice: FunctionComponent<LiveSliceProps> = ({ children }) => {
  return (
    <>
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/RGE5pvK7vnA'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </>
  );
};
