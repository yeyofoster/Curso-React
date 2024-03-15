import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {
    return (
        <>
            <h1 data-testid='test-title'>{title}</h1>
            <p>{subTitle}</p>
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    );
};

FirstApp.propTypes = {
    subTitle: PropTypes.number,
    title: PropTypes.string.isRequired
};

FirstApp.defaultProps = {
    name: 'Yeyo Foster',
    subTitle: 0
    // title: 'No hay titulo'
};