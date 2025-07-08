import React from 'react';
import './SectionHeader.css';

function SectionHeader({ title, subtitle }) {
  return (
    <div className="section-header">
      <div className="section-header-titles">
        <span className="section-title">{title}</span>
        {subtitle && <span className="section-subtitle">{subtitle}</span>}
      </div>
      <span className="section-arrow">&gt;</span>
    </div>
  );
}

export default SectionHeader; 