import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter, changeFilter } from "../../redux/filters/slice"
import style from "./SearchBox.module.css"


export default function SearchBox() {
    const dispatch = useDispatch();
    const nameFilter = useSelector(selectNameFilter);
    
    return (
        <div className={style.searchBorder} >
            <p>Find contacts by name</p>
            <input 
                type="text"
                value={nameFilter}
                onChange={(e) => { dispatch(changeFilter(e.target.value))
    }}
            />
        </div>
    );
}