import React from 'react';

import styles from './aboutUs.module.css';
import { instructors, testimonials } from './data';

const AboutUs: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Be the wings of artists</h1>
        <p>
          Wingfox — это онлайн-платформа для обучения цифровому искусству. Наша цель — стать местом, где художники могут учиться,
          расти и вдохновляться.
        </p>
      </section>

      {/* Instructors Section */}
      <section className={styles.instructors}>
        <h2>Наши преподаватели</h2>
        <div className={styles.instructorList}>
          {instructors.map((instr) => (
            <div key={instr.name} className={styles.instructorCard}>
              <img src={instr.image} alt={instr.name} />
              <h3>{instr.name}</h3>
              <p>{instr.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Dream Section */}
      <section className={styles.ourDream}>
        <h2>Наша мечта</h2>
        <p>Мы стремимся создать платформу, доступную для художников со всего мира, независимо от языка и культурных различий.</p>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <h2>Отзывы студентов</h2>
        <div className={styles.testimonialList}>
          {testimonials.map((testi) => (
            <div key={testi.name} className={styles.testimonialCard}>
              <p>"{testi.feedback}"</p>
              <h4>- {testi.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact}>
        <h2>Контакты</h2>
        <p>198 West 21th Street, Suite 721, New York, NY 10010</p>
        <p>Email: youremail@yourdomain.com</p>
        <p>Телефон: +88 (0) 101 0000 000</p>
      </section>
    </div>
  );
};

export default AboutUs;
