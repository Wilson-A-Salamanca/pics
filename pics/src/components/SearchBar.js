import { useState } from "react";
import './SearchBar.css'

function SearchBar({onSubmit}) {
    const [term, setTerm] = useState("")

    const handleFormSumit = (event) => {
        event.preventDefault();

        onSubmit(term);
    };

    return (
      <div className="search-bar">
        <form onSubmit={handleFormSumit}>
          <label>Enter search</label>
            <input value={term} onChange={(e) => {setTerm(e.target.value)}}/>
        </form>
      </div>
    );
  }
  
  export default SearchBar;