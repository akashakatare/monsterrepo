import './search-box.styles.css';

export const SearchBox = ({placeholder, searchCallback}) => {
    return (
        <input className="search" type="search" 
        placeholder = { placeholder }
        name="" id="" 
        onChange = { (e) => searchCallback(e) }/>   
    )
}