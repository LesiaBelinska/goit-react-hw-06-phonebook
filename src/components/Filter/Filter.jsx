import { nanoid } from "nanoid";
//import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";

import { change } from "../../redux/contacts-actions";
import s from "./Filter.module.css";

const filterInputId = nanoid();

const Filter = () => {

const filter = useSelector(state => state.filter);
const dispatch = useDispatch();

const changeFilter = (event) => dispatch(change(event.currentTarget.value));

    return (
        <div className={s.filter}>
            <label htmlFor={filterInputId} className={s.label}>Find contacts by name</label>
            <input className={s.input} type="text"
                id={filterInputId}
                value={filter}
                onChange={changeFilter}
            />
        </div>

    );
};

export default Filter;

// Filter.propTypes = {
//     value: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired
// }