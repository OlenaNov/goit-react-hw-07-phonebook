import { FilterInput } from "./Filter.styled";
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
    const dispatch = useDispatch();
    const value = useSelector(state => state.filter.value);

    const handleFilter = e => {
        dispatch(setFilter(e.target.value || ''))
    };

    return (
        <FilterInput 
            type="text"
            value={value}
            onChange={handleFilter} 
        />
    );
};

export default Filter;
