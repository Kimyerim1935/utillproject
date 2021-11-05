import React from 'react';
import Delete from '../../assets/img/delete.png';

const SingleDataTable = (props) => {
    const {title, data, selectList, openModal, changeData, teamList, deleteTeam} = props;

    const itemClass = (id) => {
        if (id === 'textArea') {
            return 'textArea'
        } else if (id === 'modal') {
            return 'teamArea'
        } else return 'list'
    }

    return (
        <>
            <span className="single_dataTitle">{title}</span>
            <ul className="single_dataTable">
                {
                    data.map((item,idx)=> {
                        return (
                            <li key={idx || data.type} className={itemClass(item.id)}>{item.title}
                                {
                                    (item.id === "input" ) && 
                                        <span><input onChange={(e)=>changeData(e.target.value, data[idx].type)}/></span>
                                }
                                {
                                    (item.id === "textArea" ) && 
                                        <span><textarea onChange={(e)=>changeData(e.target.value, data[idx].type)}/></span>
                                }
                                {
                                    (item.id === "select" ) && 
                                    <span>
                                        <select onChange={(e)=>changeData(e.target.value, data[idx].type)}>
                                            <option key={-1} value={-1}>전체</option>
                                            {
                                                selectList.map((item)=> {
                                                    return (
                                                        <option key={item.id} value={item.id}>{item.title}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </span>
                                }
                                {
                                    (item.id === "modal" ) && 
                                        <span>
                                            {
                                                teamList && 
                                                teamList.map((item, idx) => {
                                                    // return <span style={{display:'block'}} key={idx}>{Object.values(item)}<img src={Delete} alt="icon" onClick={()=>deleteTeam(idx, item)}/></span>

                                                    return(
                                                        item[idx] &&
                                                            <span key={idx}>
                                                                { 
                                                                    item.map((team) => {
                                                                        return Object.values(team.name)
                                                                    })
                                                                }
                                                                <img src={Delete} alt="icon" onClick={()=>deleteTeam(idx, item)}/>
                                                            </span>
                                                    ) 
                                                })
                                            }
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
