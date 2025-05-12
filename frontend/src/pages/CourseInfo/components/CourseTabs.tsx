import React, { useState } from 'react';
import './CourseTabs.css';
import { FaRegFileAlt, FaListUl, FaComments, FaDownload } from 'react-icons/fa';

export default function CourseTabs() {
  const [activeTab, setActiveTab] = useState('Detail');

  const tabs = [
    { name: 'Detail', icon: <FaRegFileAlt /> },
    { name: 'Contents', icon: <FaListUl /> },
    { name: 'Discussions', icon: <FaComments /> },
    { name: 'Resources', icon: <FaDownload /> },
  ];

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab) => (
          <button key={tab.name} className={`tab-button ${activeTab === tab.name ? 'active' : ''}`}>
            {tab.icon}
            <span>{tab.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
