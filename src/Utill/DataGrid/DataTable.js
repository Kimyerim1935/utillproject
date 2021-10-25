import React from 'react';

const DataTable = (props) => {
    const {title, data, newClass} = props;

    return (
        <>
            <span className="dataTitle">{title}</span>
            <ul className="dataTable">
                {
                    data.map((item,idx)=> {
                        return (
                            <li key={idx}>{item.title}
                                {
                                    (item.id === "input" ) ? 
                                        <span><input onChange={(e)=>newClass(e.target.value)}/></span>
                                    : <span>{item.info}</span>
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default DataTable;