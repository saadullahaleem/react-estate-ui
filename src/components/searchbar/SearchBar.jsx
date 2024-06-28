import { useState } from "react";

import "./searchbar.scss";

const types = [
    "Room",
    "Entire Place"
]

function SearchBar() {
    const [query, setQuery] = useState({
        type: types[0],
        location: "",
        minPrice: 0,
        maxPrice: 0
    });


    const switchType = (val) => {
        setQuery((prev) => ({ ...prev, type: val }));
    }
    
    return (
        <div className="searchBar">
            <div className="type">
                {
                    types.map(
                        (type) => (
                            <button 
                                key={type}
                                onClick={() => switchType(type)}
                                className={query.type == type ? "active": ""}
                            >
                                {type}
                            </button>
                        )
                    )
                }
            </div>
                <form>
                    <input type="text" name="location" placeholder="Location" />
                    <input type="number" name="minPrice" min={0} placeholder="Min Price" />
                    <input type="number" name="maxPrice" placeholder="Max Price" />
                    <button>
                        <img src="/search.png" alt="search" />
                    </button>
                </form>
        </div>
    )
}

export default SearchBar;