import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Courses from '../pages/Courses/components/Courses';
import ContactUs from '../pages/ContactUs/ContactUs';
import SignUp from '../pages/SignUp/SignUp';
import Home from '../pages/Home/components/Home';
import GameArt from '../pages/GameArt/GameArt';
import CgVfx from '../pages/CgVfx/CgVfx';
import ItSoftware from '../pages/ItSoftware/ItSoftware';
import GraphicDesign from '../pages/GraphicDesign/GraphicDesign';
import Cart from '../pages/Cart/Cart';
import store from '../redux/store';

import ProtectedRoutes from './ProtectedRoutes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/cart" element={<Cart />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/game-art" element={<GameArt />} />
        <Route path="/cg-vfx" element={<CgVfx />} />
        <Route path="/it-software" element={<ItSoftware />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
