import PropTypes from 'prop-types';
import './TextCard.css';

function TextCard({ title, content, highlight, gridArea }) {
  return (
    <div className={`text-card ${gridArea ? `grid-area-${gridArea}` : ''}`}>
      <h3 className="text-card-title">{title}</h3>
      <div className="text-card-content">
        {content.split('\n\n').map((paragraph, index) => {
          if (highlight && paragraph.includes(highlight)) {
            const parts = paragraph.split(highlight);
            return (
              <p key={index}>
                {parts[0]}
                <strong className="text-highlight">{highlight}</strong>
                {parts[1]}
              </p>
            );
          }
          return <p key={index}>{paragraph}</p>;
        })}
      </div>
    </div>
  );
}

TextCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  highlight: PropTypes.string,
  gridArea: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default TextCard;