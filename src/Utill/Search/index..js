import React from 'react';
import Search from './Search';

const SearchComponent = () => {
        
const schoolList = [
    {
        id: 1,
        school: '은계중학교'
    },
    {
        id: 2,
        school: '은행중학교'
    },
    {
        id: 3,
        school: '소래중학교'
    },
    {
        id: 4,
        school: '신천중학교'
    },
    {
        id: 5,
        school: '매화중학교'
    },
    {
        id: 6,
        school: '대흥중학교'
    },
]

const selectList = [
    {
        id: 1,
        job: '이름'
    },
    {
        id: 2,
        job: '아이디'
    },
]
    return (
        <div>
            <Search 
                firstSearch={schoolList}
                secondSearch={selectList}
            />
        </div>
    )
}

export default SearchComponent;
