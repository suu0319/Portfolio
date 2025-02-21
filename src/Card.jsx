import './Card.css';
import PropTypes from 'prop-types';

function Card({ image, title, description }) {
    const formattedDescription = description.replace(/\n/g, '<br />');

    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <div className="card-text">
                <h3>{title}</h3>
                <p
                    dangerouslySetInnerHTML={{
                        __html: formattedDescription,
                    }}
                />
            </div>
        </div>
    );
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Card;