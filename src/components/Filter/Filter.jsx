import { FilterLable, FilterField } from './Filter.Styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'components/redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
 
 const hanleChangeFilter = e =>
 dispatch(setFilter(e.currentTarget.value))

  return (
    <form autoComplete="off">
      <FilterLable htmlFor="filter">Find contact by name</FilterLable>
      <FilterField
        name="filter"
        value={filter}
        onChange={hanleChangeFilter}
        type="text"
        id="filter"
      />
    </form>
  );
};
