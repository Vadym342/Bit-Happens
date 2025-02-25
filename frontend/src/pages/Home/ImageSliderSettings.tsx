import React from 'react';

import NamelessSamurai from '../../assets/NamelessSamurai.jpg';
import VagrantKnight from '../../assets/VagrantKnight.jpg';
import FemaleBust from '../../assets/FemaleBust.jpg';
import SciFiEnvironment from '../../assets/SciFiEnvironment.jpg';
import MagicalClassroom from '../../assets/MagicalClassroom.jpg';

import { ImageSlider } from './ImageSlider';

const IMAGES = [
  { url: NamelessSamurai, alt: 'Nameless Samurai' },
  { url: VagrantKnight, alt: 'Vagrant Knight' },
  { url: FemaleBust, alt: 'Female Bust' },
  { url: SciFiEnvironment, alt: 'SciFi Environment' },
  { url: MagicalClassroom, alt: 'Magical Classroom' },
];

const ImageSliderSettings: React.FC = () => {
  return (
    <div
      style={{
        maxWidth: '1980px',
        width: '100%',
        aspectRatio: '10 / 3',
        margin: '0 auto',
      }}
    >
      <ImageSlider images={IMAGES} />
    </div>
  );
};

export default ImageSliderSettings;
