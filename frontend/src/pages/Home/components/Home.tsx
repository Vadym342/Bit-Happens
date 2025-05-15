import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Zap } from 'lucide-react';

import { AppDispatch, RootState } from '../../../redux/store';
import { fetchCourses } from '../../../redux/slices/coursesSlice';
import ProductCard from '../../../shared/components/card/card';

import CategoriesBar from './CategoriesBar';
import ImageSliderSettings from './ImageSliderSettings';
import { LecturerButton } from './LecturerButton';
import Reviews from './Reviews';

import './Home.css';
import './reviews.css';
import '../../../shared/components/card/card.css';
import './categories-bar.css';

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { courses, status } = useSelector((state: RootState) => state.courses);

  useEffect(() => {
    void dispatch(fetchCourses());
  }, [dispatch]);

  useEffect(() => {
    console.log('Все курсы:', courses);
  }, [courses]);

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
        {status === 'loading'
          ? [...Array(4)].map((_, index) => (
              <ProductCard key={index} id="" isLoading={true} title="" description="" price="" categoryId="" teacherId="" />
            ))
          : courses
              .slice(0, 4)
              .map((product, index: number) => (
                <ProductCard
                  key={index}
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price.toString()}
                  logoImage={product.logoImage}
                  categoryId={product.categoryId}
                  teacherId={product.teacherId}
                />
              ))}
      </div>

      <h2 className="recommend-title">Recommend</h2>
      <div className="cards-container">
        {courses.slice(4, 12).map((product, index: number) => (
          <ProductCard
            key={index}
            id={product.id}
            title={product.title}
            description={product.description}
            logoImage={product.logoImage}
            price={product.price.toString()}
            categoryId={product.categoryId}
            teacherId={product.teacherId}
          />
        ))}
      </div>

      <h2 className="game-art-title">Game Art</h2>
      <div className="cards-container">
        {courses.slice(12, 16).map((product, index: number) => (
          <ProductCard
            key={index}
            id={product.id}
            title={product.title}
            description={product.description}
            logoImage={product.logoImage}
            price={product.price.toString()}
            categoryId={product.categoryId}
            teacherId={product.teacherId}
          />
        ))}
      </div>

      <h3 className="practical-appealing-title">Practical & Appealing</h3>
      <h2 className="lecturers-title">Lecturers from the Industry and the World</h2>
      <p className="fluxion-is">
        Fluxion is a platform for international artists. Lecturers for our tutorials are from different countries around the
        globe. They have both enthusiasm and devotion to guide you through and achieve your better self.
      </p>

      <LecturerButton />
      <Reviews />
    </div>
  );
};

export default Home;
