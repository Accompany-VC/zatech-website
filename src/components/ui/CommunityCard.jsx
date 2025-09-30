import React from 'react';
import PropTypes from 'prop-types';
import './CommunityCard.css';

function CommunityCard({ title, content, image, imageAlt }) {
  return (
    <div className="community-card">
      {image && (
        <img src={image} alt={imageAlt} className="card-image" loading="lazy" />
      )}
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

CommunityCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
};

export default CommunityCard;