import React from 'react';
import './CourseInfo.css';
import { SlActionRedo } from 'react-icons/sl';
import CourseTabs from './CourseTabs';

export default function CourseInfo() {
  return (
    <div>
      <div className="course-info-header">
        <section className="course-banner">
          <h1>Stylized Texturing for Video Games with Blender</h1>
          <div className="course-details">
            <p className="course-details-info">Category: </p>
            <p className="course-details-info">Lecturer: </p>
            <p className="course-details-info">Lessons: </p>
          </div>

          <aside className="sidebar">
            <div>
              <img src="https://imgwf.yiihuu.com/upimg/global/mnt1/album/2023/12/02/1701481617.jpg" alt="Course Image" />
            </div>
            <div className="sidebar-content">
              <h3>$49.99</h3>
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

              <div className="share-text">
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

            <p>
              Learn everything you need to create stylized textures and materials with the Blender tools In this course you will
              learn the complete workflow for creating stylized materials and textures for your models using the Blender tools.
              What we will see in the course: Fundamentals -How Blender's texture paint mode works -How Blender's node editor
              works Project 1: Mushroom Diorama -Basic modeling and UV unwrapping -Blocking y color gradients -Hand-painted
              texturing to refine and detail -How to export the final texture maps -Lighting and rendering with Marmoset Toolbag
              Project 2: Mystery Diorama -Baking the base maps with Marmoset Toolbag -Stylized procedural texturing with Blender's
              shader editor -Custom texture projection with the stencil tool -Creation of the emissive and transparency channel
              -How to export the final texture maps -Lighting and rendering with Marmoset Toolbag Project 3: Chest of the golden
              sun -Baking the base maps with Marmoset Toolbag -Stylized procedural texturing with Blender's shader editor
              -Creation of the metalness and roughness channel -How to export the final texture maps -Lighting and rendering with
              Marmoset Toolbag Project 4:  Character (Kiuby girl) -Baking the base maps with Marmoset Toolbag -Procedural color
              blocking for all the materials -Procedural texturing of organic materials (hair, skin, fur) -Procedural texturing
              with patterns for the fabric -Procedural texturing of armor, wood y metallic objects -Hand-painted texturing for the
              details of the face and other parts of the skin -Final maps exporting -Lighting and rendering with Marmoset Toolbag
              Final talking and recommendations We will talk a little about how to study references and face texturing challenges
              on your own
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
