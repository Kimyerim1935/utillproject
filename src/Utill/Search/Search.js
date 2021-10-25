import React from 'react';

const Search = (props) => {
    const {firstSearch, secondSearch} = props;

    return (
        <div className="searchWrapper">
            <select>
                <option key='-1'>전체</option>
            {
                firstSearch.map((item)=> {
                    return (
                        <option key={item.id}>{item.school}</option>
                    )
                })
            }
            </select>
          {
            secondSearch && 
            <select>
                <option key='-1'>전체</option>
            {
                secondSearch.map((item)=> {
                    return (
                        <option key={item.id}>{item.job}</option>
                    )
                })
            }
            </select>}
            <input />

            <button>검색</button>
        </div>
    )
}

export default Search;