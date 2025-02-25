import React from 'react';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import './reviews.css';
interface Review {
  name: string;
  role: string;
  image: string;
  text: string;
}

const reviews: Review[] = [
  {
    name: 'Annette Black',
    role: 'Product Manager',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    text: 'Absolutely fantastic experience. Highly recommended!',
  },
  {
    name: 'Jane Cooper',
    role: 'Software Engineer',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    text: 'The best platform I have ever used. Great work!',
  },
  {
    name: 'Robert Fox',
    role: 'UI/UX Designer',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    text: 'Very intuitive and user-friendly interface.',
  },
  {
    name: 'Susan Brown',
    role: 'Frontend Developer',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    text: 'Great platform for learning and building projects.',
  },
  {
    name: 'Michael Smith',
    role: 'Data Scientist',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    text: 'Excellent platform for data analysis and visualization.',
  },
  {
    name: 'David Johnson',
    role: 'Project Manager',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    text: 'Highly recommended for any software development needs.',
  },
  {
    name: 'Jessica Wilson',
    role: 'Marketing Manager',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
    text: 'Great platform for building and growing online businesses.',
  },
  {
    name: 'Sarah Davis',
    role: 'Product Designer',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
    text: 'Highly recommended for any project needs.',
  },
  {
    name: 'Michael Lee',
    role: 'Frontend Developer',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    text: 'Great platform for learning and building projects.',
  },
  {
    name: 'Emily Thompson',
    role: 'Backend Developer',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    text: 'Highly recommended for any project needs.',
  },
];

const Reviews: React.FC = () => {
  const [sliderRef] = useKeenSlider({ loop: true, mode: 'snap', slides: { perView: 1 } });

  return (
    <div className="review-section">
      <h2 className="review-title">What our users say</h2>
      <div ref={sliderRef} className="slider">
        {reviews.map((review, index) => (
          <div key={index} className="keen-slider__slide bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col items-center text-center">
              <img src={review.image} alt={review.name} className="review-image" />
              <h3 className="text-lg font-bold">{review.name}</h3>
              <p className="text-sm text-gray-500">{review.role}</p>
              <p className="mt-3 text-gray-700">“{review.text}”</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
