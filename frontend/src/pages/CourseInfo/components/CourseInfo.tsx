import React, { useEffect, useState } from 'react';
import './CourseInfo.css';
import { useLocation, useParams } from 'react-router-dom';
import { SlActionRedo } from 'react-icons/sl';
import CourseTabs from './CourseTabs';
import { fetchCategoryName, fetchTeacherName } from '../../../services/service';
import { toastSuccess } from '../../../services/toast.constants';
import { ToastContainer } from 'react-toastify';

export default function CourseInfo() {
  const { id } = useParams();
  const location = useLocation();
  const { title, description, price, logoImage, categoryId, teacherId, lessons = 'N/A' } = location.state || {};

  const [categoryName, setCategoryName] = useState('');
  const [teacherName, setTeacherName] = useState('');

  useEffect(() => {
    if (categoryId) {
      fetchCategoryName(categoryId).then((name) => {
        if (name) setCategoryName(name);
      });
    }
  }, [categoryId]);

  useEffect(() => {
    if (teacherId) {
      fetchTeacherName(teacherId).then((name) => {
        if (name) setTeacherName(name);
      });
    }
  }, [teacherId]);

  const handleShare = () => {
    console.log('Share clicked');
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        toastSuccess('Copy link successful!');
      })
      .catch((err) => {
        console.error('Something went wrong', err);
      });
  };

  return (
    <div>
      <div className="course-info-header">
        <section className="course-banner">
          <h1>{title}</h1>
          <div className="course-details">
            <p className="course-details-info">Category: {categoryName}</p>
            <p className="course-details-info">Lecturer: {teacherName}</p>
            <p className="course-details-info">Lessons: {lessons}</p>
          </div>

          <aside className="sidebar">
            <div>
              <img src={logoImage} alt="Course" />
            </div>
            <div className="sidebar-content">
              <h3>${price}</h3>
              <button className="buy-btn">Buy Now</button>
              <button className="wishlist-btn">Add to cart</button>
              <h4>Course Details:</h4>
              <ul>
                <li>
                  <i className="fa-solid fa-video" style={{ color: '#ffa041' }}></i>
                  <strong>Duration:</strong> 12 hours
                </li>
                <li>
                  <i className="fa-solid fa-infinity" style={{ color: '#ffa041' }}></i>
                  <strong>Lifetime Access</strong>
                </li>
                <li>
                  <i className="fa-solid fa-desktop" style={{ color: '#ffa041' }}></i>
                  <strong>Softwares:</strong>
                </li>
              </ul>

              <div className="share-text" onClick={handleShare} style={{ cursor: 'pointer' }}>
                <SlActionRedo className="share-icon" />
                <h4>Share</h4>
              </div>
            </div>
          </aside>
        </section>
      </div>

      <div className="course-info-container">
        <CourseTabs />
        <div className="main-content">
          <div className="overview-section">
            <h1>Course Overview</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
