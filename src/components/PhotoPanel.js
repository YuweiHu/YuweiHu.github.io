import React from 'react';
import ayowiAvatar from '../images/ayowi.jpg';

const PhotoPanel = () => (
  <img
    src={ayowiAvatar}
    width="100%"
    alt="Ayowi Avatar"
    style={{ opacity: 0.5, position: 'relative', zIndex: 20 }}
  />
);

export default PhotoPanel;
