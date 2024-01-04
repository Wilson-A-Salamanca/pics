import { useState } from "react";

function SearchBar({onSubmit}) {
    const [term, setTerm] = useState("")

    const handleFormSumit = (event) => {
        event.preventDefault();

        onSubmit(term);
    };

    return (
      <div>
        <form onSubmit={handleFormSumit}>
            <input value={term} onChange={(e) => {setTerm(e.target.value)}}/>
        </form>
      </div>
    );
  }
  
  export default SearchBar;