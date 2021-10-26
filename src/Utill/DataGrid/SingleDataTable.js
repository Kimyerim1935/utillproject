import React from 'react';

const SingleDataTable = (props) => {
    const {title, data, selectList, openModal, noticeData} = props;

    return (
         <>
            <span className="single_dataTitle ">{title}</span>
            <ul className="single_dataTable">
                {
                    data.map((item,idx)=> {
                        return (
                            <li key={idx} className={item.id === 'textArea' ? "textArea" : 'list'}>{item.title}
                                {
                                    (item.id === "input" ) && 
                                        <span><input/></span>
                                }
                                {
                                    (item.id === "textArea" ) && 
                                        <span><textarea /></span>
                                }
                                {
                                    (item.id === "select" ) && 
                                    <span>
                                        <select>
                                            <option key={-1}>전체</option>
                                            {
                                                selectList.map((item)=> {
                                                    return (
                                                        <option key={item.id}>{item.title}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </span>
                                }
                                {
                                    (item.id === "modal" ) && 
                                        <span>
                                            <button 
                                                className="pagebutton"
                                                onClick={()=>openModal()}>내 학생 리스트</button>
                                        </span>
                                }
                                <span>{item.info}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default SingleDataTable;
