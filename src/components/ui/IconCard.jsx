import React from 'react';
import PropTypes from 'prop-types';
import './IconCard.css';

function IconCard({ icon, title, content, buttonText, buttonLink }) {
  return (
    <div className="icon-card">
      <div className="icon-container">
        {icon}
      </div>
      <h3 className="icon-card-title">{title}</h3>
      <p className="icon-card-content">{content}</p>
      {buttonText && (
        <a href={buttonLink} className="icon-card-button">
          {buttonText} →
        </a>
      )}
    </div>
  );
}

IconCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
};

export default IconCard;