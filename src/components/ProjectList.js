import PropTypes from 'prop-types';

const propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map(({ img }) => (
        <div className="project-list__item">
          <img className="project-list__img" src={img} alt="" />
        </div>
      ))}
    </div>
  );
};

ProjectList.propTypes = propTypes;

export default ProjectList;
