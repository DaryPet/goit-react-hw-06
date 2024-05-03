import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const nameFilter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.wrap}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.data}
        type="text"
        value={nameFilter}
        onChange={handleChange}
      />
    </div>
  );
}
