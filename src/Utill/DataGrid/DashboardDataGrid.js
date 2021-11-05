import React from 'react';
// import {handleListPage} from '../../utill/utill';

const DashboardDataGrid = (props) => {
    const {title, columns, rows, more, checkItem} = props;

    return (
        <>
        <div className="titleArea">
            <span className="title">{title}</span>
            {/* {
                more && <span className="moreView" onClick={()=>handleListPage('/Class')}>{more}</span>
            } */}
        </div>
        <div className="customDataGridArea">
            <div className="customDataGrid" style={{minWidth:0}}>
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
                        <div key={index} className="customGrid content">
                            {
                                columns.map((i, j) => (
                                    i.field === 'select' ? 
                                        <li key={`row-${j}`} className={i.field === 'no' ? "row num" : `row ${i.style ? i.style : ''}`}>
                                            <input id={data.id} value={data.name} type="checkbox" onChange={(e)=>checkItem(e)}/>
                                        </li>
                                    :
                                    <li key={`row-${j}`} className={i.field === 'no' ? "row num" : `row ${i.style ? i.style : ''}`}>{data[i.field]}</li>
                                ))
                            }
                        </div>
                    )
                }) 
                : 
                (
                    <div style={{textAlign:'center',padding:'50px',borderRight:'0.1px solid rgb(221,221,221)', borderBottom:'0.1px solid rgb(221,221,221)'}}>
                        <span style={{fontSize :'18px',color :'#727272'}}>
                            데이터가 존재하지 않습니다
                        </span>
                    </div>
                )
            }
                </div>
            </div>
        </div>
        </>
    )
}

export default DashboardDataGrid;