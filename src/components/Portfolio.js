import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import ProjectList from './ProjectList';
import Toolbar from './Toolbar';

const propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

const Portfolio = ({ filters, projects }) => {
  const categories = useMemo(() => {
    if (filters) {
      return filters;
    }
    const categories = projects.map(({ category }) => category);
    const uniqueCategories = new Set(categories);
    return ['All', ...uniqueCategories];
  }, [projects, filters]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return projects;
    }
    return projects.filter(({category}) => category === selectedCategory);
  }, [projects, selectedCategory]);

  return (
    <>
      <Toolbar
        filters={categories}
        selected={selectedCategory}
        onSelectedFilter={setSelectedCategory}
      />
      <ProjectList projects={filteredProjects} />
    </>
  );
};

Portfolio.propTypes = propTypes;

export default Portfolio;
