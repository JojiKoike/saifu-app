import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/actions';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => {
  const active = {
    active: ownProps.filter === state.visibilityFilter,
  };
  return active;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const onClick = {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    },
  };
  return onClick;
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
