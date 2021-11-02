import React,{useState,useEffect} from 'react';
import Search from '../../utill/Search';
import DataGrid from '../commons/DataGrid';
import {handleListPage} from '../../utill/utill';
import _ from 'lodash';

const filterList = [
    {
        id: 1,
        school: '학교명'
    },
    {
        id: 2,
        school: '교직원'
    },
    {
        id: 3,
        school: '아이디'
    },
]

const columns = [
    { field: 'no', headerName: 'No.' },
    { field: 'schoolName', headerName: '소속(학교명)' },
    { field: 'className', headerName: '클래스명' },
    { field: 'grade', headerName: '학년/반'},
    { field: 'term', headerName: '교직원'},
    { field: 'userId', headerName: '아이디'},
    { field: 'status', headerName: '진행현황'},
    { field: 'enrollmentDate', headerName: '등록일시'},
]
const rows = [
    {
        'no': 1,
        'schoolName': '은계중학교',
        'className': '게시물제목입니다',
        'grade': '2/9',
        'term': '이름',
        'userId': 'yerim98',
        'status': '진행중',
        'enrollmentDate': '2020-11-22'
    }, 
    {
        'no': 2,
        'schoolName': '은계중학교',
        'className': '게시물제목입니다',
        'grade': '2/9',
        'term': '이름',
        'userId': 'yerim98',
        'status': '진행중',
        'enrollmentDate': '2020-11-22'
    },
    {
        'no': 3,
        'schoolName': '은계중학교',
        'className': '게시물제목입니다',
        'grade': '2/9',
        'term': '이름',
        'userId': 'yerim98',
        'status': '진행중',
        'enrollmentDate': '2020-11-22'
    }, 
    {
        'no': 4,
        'schoolName': '은계중학교',
        'className': '게시물제목입니다',
        'grade': '2/9',
        'term': '이름',
        'userId': 'yerim98',
        'status': '진행중',
        'enrollmentDate': '2020-11-22'
    }, 
    {
        'no': 5,
        'schoolName': '은계중학교',
        'className': '게시물제목입니다',
        'grade': '2/9',
        'term': '이름',
        'userId': 'yerim98',
        'status': '진행중',
        'enrollmentDate': '2020-11-22'
    }, 
    {
        'no': 6,
        'schoolName': '은계중학교',
        'className': '게시물제목입니다',
        'grade': '2/9',
        'term': '이름',
        'userId': 'yerim98',
        'status': '진행중',
        'enrollmentDate': '2020-11-22'
    }, 
    {
        'no': 7,
        'schoolName': '은계중학교',
        'className': '게시물제목입니다',
        'grade': '2/9',
        'term': '이름',
        'userId': 'yerim98',
        'status': '진행중',
        'enrollmentDate': '2020-11-22'
    }, 
    {
        'no': 8,
        'schoolName': '은계중학교',
        'className': '게시물제목입니다',
        'grade': '2/9',
        'term': '이름',
        'userId': 'yerim98',
        'status': '진행중',
        'enrollmentDate': '2020-11-22'
    }, 
    {
        'no': 9,
        'schoolName': '은계중학교',
        'className': '게시물제목입니다',
        'grade': '2/9',
        'term': '이름',
        'userId': 'yerim98',
        'status': '진행중',
        'enrollmentDate': '2020-11-22'
    }, 
    {
        'no': 10,
        'schoolName': '은계중학교',
        'className': '게시물제목입니다',
        'grade': '2/9',
        'term': '이름',
        'userId': 'yerim98',
        'status': '진행중',
        'enrollmentDate': '2020-11-22'
    }, 
]

const Class = (props) => { 
    const [query, setQuery] = useState({
        first: -1,
        searchValue: '',
        page: 0
    })

    useEffect(()=>{
        init();
    }, [])

    const init = () => {
        const queryStringOrigin = window.location.search.slice(1);
        const queryStringArray = queryStringOrigin.split("&");

        _.map(queryStringArray, element => {
            const keyValue = element.split("=");
            
            setQuery(prev => ({...prev,
                [keyValue[0]]: decodeURI(keyValue[1])
            }))
        })
    }

    const handlePage = (page) => {
        setQuery(prev => ({...prev,
            page: page
        }))
    }
    
    const handleQuery = (key, value) => {
        switch (key) {
            case 'first': {
                setQuery(prev => ({...prev,
                    first: value
                }))
                break;
            }
            case 'searchValue': {
                setQuery(prev => ({...prev,
                    searchValue: value
                }))
                break;
            }
            default : {
                break;
            }
        }
    }

    const handleSearch = () => {
        let newQueryString = '';
        let firstflag = true;

        const temp = _.cloneDeep(query);

        _.forIn(temp, (value, key) => {
            if (value === -1) return;
            if (firstflag) {
                newQueryString += `?${key}=${value}`
                firstflag = false;
            } else {
                if (key.length !== 0) {
                    newQueryString += `&${key}=${value}`
                }
            }
        })

        props.history.push({
            pathname: '/Class',
            search: newQueryString
        })
    }

    return (
        <div className="noneContainerWrapper">
            <span className="title">■ 클래스 리스트</span>
            <Search 
                firstSearch={filterList}
                change={handleQuery}
                search={handleSearch}
                query={query}
            />
            <DataGrid 
                columns={columns}
                rows={rows}
                handlePage={handlePage}
                totalPage={20}
                page={query.page}
                dataNum={200}
                total={20}
                url="/Class/detail"
                // load={dataLoading}
            />
            <button 
                className="pagebutton"
                onClick={()=>handleListPage('/Class/produce')}
            >클래스 생성</button>
        </div>
    )
}

export default Class;
