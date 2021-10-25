import React from 'react';
import {Link} from "react-router-dom";
import ReactPaginate from 'react-paginate';
import _ from 'lodash';

import FirstPageRoundedIcon from '../../assets/img/firstPage.png';
import ChevronLeftRoundedIcon from '../../assets/img/left-arrow.png';
import ChevronRightRoundedIcon from '../../assets/img/right-arrow.png';
import LastPageRoundedIcon from '../../assets/img/lastPage.png';

// import {DataLoading} from '../../utill/Loading';

const DataGrid = (props) => {
    const {columns, rows, title, dataNum, total, page, totalPage, handlePage: parentHandlePage, handleModal} = props;

    const handlePage = (e) => {
        parentHandlePage(e.selected);
    }

    const handleFirstpage = () => {
        parentHandlePage(0);
    }

    const handleLastpage = () => {
        parentHandlePage(total - 1);
    }

    return (
            <>
                <div className="titleArea">
                    {
                        title ? 
                        <span className="dataTitle">{title}</span>
                        :
                        <span></span>
                    }
                    {
                        dataNum && 
                        <span className="moreView">총 {dataNum}건 | {page}/{totalPage} page</span>
                    }
                </div>
                <div className="dataGridArea">
                    <div className= {props.dataNum === 0 ? "customDataGrid_all" : "customDataGrid"} style={{minWidth:0}}>
                        <ul className="customGrid top">
                            {
                                columns.map((i, j)=>(
                                    <li key={`col-${j}`} className={i.field === 'no' ? "row num" : `row ${i.style ? i.style : ''}`} style={{cursor: 'default'}}>{i.headerName}</li>
                                ))
                            }
                        </ul>
                    <div>
                    {
                        rows && rows.length > 0 ?
                        rows?.map((data, index)=>{
                            return (
                                <>
                                    {
                                        props.url ?
                                        <Link to={{pathname: `${props.url}`}} style={{textDecoration:'none'}}>
                                            <div key={index} className="customGrid toLink">
                                                {
                                                    columns.map((i, j) => (
                                                        <span key={`row-${j}`} className={i.field === 'no' ? "row num" : `row ${i.style ? i.style : ''}`}>{data[i.field]}</span>
                                                    ))
                                                }
                                            </div>
                                        </Link>
                                        :
                                        <div key={index} className="customGrid content">
                                            {
                                                columns.map((i, j) => (
                                                    <>
                                                    { 
                                                        i.field === 'btn' ? 
                                                        <span key={`row-${j}`} className={i.field === 'no' ? "row num" : `row ${i.style ? i.style : ''}`}>
                                                            <button className="gridBtn" onClick={()=>handleModal()}>{data.btn}</button>
                                                        </span>
                                                        :
                                                        i.field === 'admin' ?
                                                        <span key={`row-${j}`} className={i.field === 'no' ? "row num" : `row ${i.style ? i.style : ''}`}>
                                                            {data.admin}<button className="gridBtn_admin" onClick={()=>handleModal()}>수정</button>
                                                        </span>
                                                        : 
                                                        <span key={`row-${j}`} className={i.field === 'no' ? "row num" : `row ${i.style ? i.style : ''}`}>{data[i.field]}</span>
                                                    }
                                                    </>
                                                ))
                                            }
                                        </div>
                                    }
                                </>
                            )
                        }) 
                        : 
                        (
                            <div className="customDataGridArea_dataNull">
                                <span style={{fontSize :'18px',color :'#727272'}}>
                                    데이터가 존재하지 않습니다
                                </span>
                            </div>
                        )
                    }
                </div>
                <div className="customPaginationBox">
                <label
                    className={page === 0 ? "displayNone" : ""}
                    onClick={(e) => handleFirstpage(e)}><img src={FirstPageRoundedIcon} alt="icon"/></label>
                <ReactPaginate
                    forcePage={_.parseInt(page)}
                    previousLabel={<img src={ChevronLeftRoundedIcon} alt="icon" style={{width: 20}}/>}
                    nextLabel={<img src={ChevronRightRoundedIcon} alt="icon" style={{width: 20}}/>}
                    breakLabel={'...'}
                    pageRangeDisplayed={7}
                    onPageChange={handlePage}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                    previousClassName={page === 0 ? "displayNone" : "previousClassName"}
                    pageClassName="pageClassName"
                    breakClassName="breakClassName"
                    nextClassName="nextClassName"
                    pageCount={total}
                />
                <label onClick={(e) => handleLastpage(e)}><img src={LastPageRoundedIcon} alt="icon"/></label>
                </div>
            </div>
        </div>
    </>
    )
}

export default DataGrid;
