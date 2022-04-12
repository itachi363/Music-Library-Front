import { useState } from "react";

const SearchBar = (props) => {

    const [input, setInput] = useState()

    function handleSubmit(event) {
        event.preventDefault()        
        let inputValue = {
            input: input
        }
        console.log(inputValue)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <label>Search: </label>
                <input type='text' id='myText'/>
                <button type="submit" value={input} onChange={(event) => setInput(event.target.value)}>Search</button>
            </div>
        </form>
     );
}
 
export default SearchBar;