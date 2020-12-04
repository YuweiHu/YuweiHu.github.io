import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PhotoPanel from '../components/PhotoPanel';
import Navigation from '../components/Navigation';
import { Main, LeftSide, RightSide, Content } from '../styles';

const About = () => {
  const useRWD = !useMediaQuery('(min-width:600px)');

  return (
    <Main useRWD={useRWD}>
      <LeftSide>
        <PhotoPanel />
      </LeftSide>
      <RightSide>
        <Navigation />
        <Content>About</Content>
      </RightSide>
    </Main>
  );
};

export default About;
