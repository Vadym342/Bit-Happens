import React from 'react';

import './Home.css';
import './reviews.css';
import { Zap } from 'lucide-react';

import ProductCard from '../../../shared/components/card/card';
import { coursesData } from '../../../data/coursesData';

import Reviews from './Reviews';
import '../../../shared/components/card/card.css';
import CategoriesBar from './CategoriesBar';
import './categories-bar.css';
import ImageSliderSettings from './ImageSliderSettings';
import { LecturerButton } from './LecturerButton';
const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="home-image-slider">
        <ImageSliderSettings />
      </div>
      <CategoriesBar />
      <h2 className="flash-deals-title">
        Flash Deals <Zap className="zap-icon" />
      </h2>
      <div className="cards-container">
        {coursesData.slice(0, 4).map((product, index) => (
          <ProductCard key={index} title={product.title} description={product.description} price={product.price} />
        ))}
      </div>
      <h2 className="recommend-title">Recommend</h2>
      <div className="cards-container">
        {coursesData.slice(4, 12).map((product, index) => (
          <ProductCard key={index} title={product.title} description={product.description} price={product.price} />
        ))}
      </div>
      <h2 className="game-art-title">Game Art</h2>
      <div className="cards-container">
        {coursesData.slice(12, 16).map((product, index) => (
          <ProductCard key={index} title={product.title} description={product.description} price={product.price} />
        ))}
      </div>
      <h3 className="practical-appealing-title">Practical & Appealing</h3>
      <h2 className="lecturers-title">Lecturers from the Industry and the World</h2>
      <p className="fluxion-is">
        Fluxion is a platform for international artists. Lecturers for our tutorials are from different countries around the
        globe.They have both enthusiasm and devotion to guide you through and achieve your better self.
      </p>
      <LecturerButton />
      <Reviews />
    </div>
  );
};

export default Home;
