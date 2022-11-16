import PropTypes from 'prop-types';

const propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  onSelectedFilter: PropTypes.func.isRequired,
};

const Toolbar = ({ filters, selected, onSelectedFilter }) => {
  const className = (filter) => {
    if (filter === selected) {
      return 'toolbar__button toolbar__button_selected';
    }
    return 'toolbar__button';
  };

  return (
    <div className="toolbar">
      {filters.map((filter) => (
        <button
          className={className(filter)}
          onClick={() => onSelectedFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

Toolbar.propTypes = propTypes;

export default Toolbar;
