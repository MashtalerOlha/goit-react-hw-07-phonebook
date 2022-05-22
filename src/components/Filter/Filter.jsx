import { FilterLable, FilterField } from './Filter.Styled';
import { getFilter, changeFilter } from 'components/redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  const hanleChangeFilter = e =>
    dispatch(changeFilter(e.currentTarget.value));

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
