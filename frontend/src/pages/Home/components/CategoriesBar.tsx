import React from 'react';

import './categories-bar.css';
import { Monitor, Gamepad2, Code, PenTool } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { MenuItems } from '../../../components/Navbar/MenuItems';

const iconMap: Record<string, JSX.Element> = {
  'CG | VFX': <Monitor size={80} color="#ffa041" />,
  'Game Art': <Gamepad2 size={80} color="#ed3b3b" />,
  'IT&Software': <Code size={80} color="#374bd9" />,
  'Graphic Design': <PenTool size={80} color="#ff6641" />,
};

const CategoriesBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="categories-container">
      {MenuItems.map((category, index) => (
        <div key={index} className="category-item" onClick={() => navigate(category.path)}>
          <div className="category-icon">{iconMap[category.title]}</div>
          <p className="category-name">{category.title}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoriesBar;
