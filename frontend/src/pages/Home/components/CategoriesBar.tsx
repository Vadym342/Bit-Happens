import React from 'react';

import './categories-bar.css';
import { Monitor, Gamepad2, Code, PenTool } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const categories = [
  { name: 'CG | VFX', icon: <Monitor size={80} color="#ffa041" />, path: '/cg-vfx' },
  { name: 'Game Art', icon: <Gamepad2 size={80} color="#ed3b3b" />, path: '/game-art' },
  { name: 'IT & Software', icon: <Code size={80} color="#374bd9" />, path: '/it-software' },
  { name: 'Graphic Design', icon: <PenTool size={80} color="#ff6641" />, path: '/graphic-design' },
];

const CategoriesBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="categories-container">
      {categories.map((category, index) => (
        <div key={index} className="category-item" onClick={() => navigate(category.path)}>
          <div className="category-icon">{category.icon}</div>
          <p className="category-name">{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoriesBar;
