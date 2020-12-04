import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PhotoPanel from '../components/PhotoPanel';
import Navigation from '../components/Navigation';
import { Main, LeftSide, RightSide, Content } from '../styles';

const Project = () => {
  const useRWD = !useMediaQuery('(min-width:600px)');

  return (
    <Main useRWD={useRWD}>
      <LeftSide>
        <PhotoPanel />
      </LeftSide>
      <RightSide>
        <Navigation />
        <Content>Project</Content>
      </RightSide>
    </Main>
  );
};

export default Project;
