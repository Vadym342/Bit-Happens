import { Routes, Route } from 'react-router-dom';

import Courses from '../pages/Courses/Courses';
import ContactUs from '../pages/ContactUs/ContactUs';
import SignUp from '../pages/SignUp/SignUp';
import Home from '../pages/Home/Home';
import GameArt from '../pages/GameArt/GameArt';
import CgVfx from '../pages/CgVfx/CgVfx';
import ItSoftware from '../pages/ItSoftware/ItSoftware';
import GraphicDesign from '../pages/GraphicDesign/GraphicDesign';
import Login from '../pages/Login/Login';
import Cart from '../pages/Cart/Cart';

import ProtectedRoutes from './ProtectedRoutes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
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
