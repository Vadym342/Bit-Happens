import React, { useEffect, useState } from 'react';
import './CourseInfo.css';
import { Navigate, useLocation } from 'react-router-dom';
import { SlActionRedo } from 'react-icons/sl';
import { fetchCategoryName, fetchLessonsByCourseId, fetchTeacherName } from '../../../services/service';
import { toastSuccess } from '../../../services/toast.constants';
import { ToastContainer } from 'react-toastify';
import { FaDownload, FaListUl, FaRegFileAlt } from 'react-icons/fa';
import { Lesson } from '../../../shared/types/types';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';

export default function CourseInfo() {
  const location = useLocation();
  const { id, title, description, content, price, logoImage, categoryId, teacherId } = location.state || {};
  const navigate = useNavigate();

  const [categoryName, setCategoryName] = useState('');
  const [teacherName, setTeacherName] = useState('');
  const [lessonsList, setLessonsList] = useState<Lesson[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  useEffect(() => {
    if (id) {
      fetchLessonsByCourseId(id).then((lessons) => {
        setLessonsList(lessons);
      });
    }
  }, [id]);

  const handleShare = () => {
    const link = `${window.location.origin}/course-info/${id}`;
    navigator.clipboard
      .writeText(link)
      .then(() => {
        toastSuccess('Copy link successful!');
      })
      .catch((err) => {
        console.error('Something went wrong', err);
      });
  };

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    if (!logoImage) return;

    dispatch(
      addToCart({
        id,
        title,
        price: Number(price),
        logoImage,
        description,
        content,
        categoryId,
        teacherId,
      }),
    );
  };

  const handleByNow = () => {
    if (!logoImage) return;

    dispatch(
      addToCart({
        id,
        title,
        price: Number(price),
        logoImage,
        description,
        content,
        categoryId,
        teacherId,
      }),
    );
    navigate('/cart');
  };

  const [activeTab, setActiveTab] = useState('Detail');

  const tabs = [
    { name: 'Detail', icon: <FaRegFileAlt /> },
    { name: 'Contents', icon: <FaListUl /> },
    { name: 'Resources', icon: <FaDownload /> },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Detail':
        return (
          <div className="overview-section">
            <h1>Course Overview</h1>
            <p>{content}</p>
          </div>
        );
      case 'Contents':
        return (
          <div className="overview-section">
            <h1>Course Lessons</h1>
            {lessonsList.length > 0 ? (
              <ul className="lesson-list">
                {lessonsList.map((lesson) => (
                  <a href={lesson.content}>
                    <li key={lesson.id} className="lesson-item">
                      <i className="fa-solid fa-video" style={{ color: '#ffa041' }}></i>
                      {lesson.title}
                    </li>
                  </a>
                ))}
              </ul>
            ) : (
              <p>No lessons available for this course.</p>
            )}
          </div>
        );

      case 'Resources':
        return (
          <div className="overview-section">
            <h1>Course Resourses</h1>
            <a href={description}>
              <i className="fa-solid fa-link"></i>
              Project Files
            </a>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="course-info-header">
        <section className="course-banner">
          <h1>{title}</h1>
          <div className="course-details">
            <p className="course-details-info">Category: {categoryName}</p>
            <p className="course-details-info">Lecturer: {teacherName}</p>
            <p className="course-details-info">Lessons: {lessonsList.length}</p>
          </div>

          <aside className="sidebar">
            <div>
              <img src={logoImage} alt="Course" />
            </div>
            <div className="sidebar-content">
              <h3>${price}</h3>
              <button className="buy-btn" onClick={handleByNow}>
                Buy Now
              </button>
              <button className="wishlist-btn" onClick={handleAddToCart}>
                Add to cart
              </button>
              <h4>Course Details:</h4>
              <ul>
                <li>
                  <i className="fa-solid fa-video" style={{ color: '#ffa041' }}></i>
                  <strong>Duration:</strong> 30+ hours
                </li>
                <li>
                  <i className="fa-solid fa-infinity" style={{ color: '#ffa041' }}></i>
                  <strong>Lifetime Access</strong>
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

      <div className="course-description">
        <div className="tabs-container">
          <div className="tabs">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                className={`tab-button ${activeTab === tab.name ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.name)}
              >
                {tab.icon}
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
          <div className="tab-content">{renderTabContent()}</div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
