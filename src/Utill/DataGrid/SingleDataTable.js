import React from 'react';
import Delete from '../../assets/img/delete.png';

const SingleDataTable = (props) => {
    const {index, value, title, data, selectList, openModal, changeData, teamList, deleteTeam} = props;

    const itemClass = (id) => {
        if (id === 'textArea') {
            return 'textArea'
        } else if (id === 'modal') {
            return 'teamArea'
        } else return 'list'
    }
    console.log('value',value)
    return (
        <>
            <span className="single_dataTitle">{title}</span>
            <ul className="single_dataTable">
                {
                    data.map((item,idx)=> {
                        console.log(item)
                        return (
                            <li key={idx || data.type} className={itemClass(item.id)}>{item.title}
                                {
                                    (item.id === "input" ) && 
                                        <span>
                                            <input 
                                                value={value.selectSubject !== '-1' ? value.subjectName : ""}
                                                onChange={(e)=>changeData(e.target.value, data[idx].type, index)}/>
                                            </span>
                                }
                                {
                                    (item.id === "textArea" ) && 
                                        <span>
                                            <textarea 
                                                value={value.selectSubject !== '-1' ? value.subjectContents : ""}
                                                onChange={(e)=>changeData(e.target.value, data[idx].type, index)}/></span>
                                }
                                {
                                    (item.id === "select" ) && 
                                    <span>
                                        <select onChange={(e)=>changeData(e.target.value, data[idx].type, index)}>
                                            <option key={-1} value={-1}>과업을 선택해주세요.</option>
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
                                                    // return <span style={{display:'block'}} key={idx}>{Object.values(item.name)}<img src={Delete} alt="icon" onClick={()=>deleteTeam(idx, item)}/></span>
                                                    return (
                                                        <span key={idx} style={{marginRight: 5}}>
                                                            { 
                                                                item.map((team) => {
                                                                    return Object.values(team.name)
                                                                })
                                                            }
                                                            <img src={Delete} alt="icon" onClick={()=>deleteTeam(idx, item, index)}/>
                                                        </span>
                                                    )
                                                })
                                            }
                                            <button 
                                                className="pagebutton"
                                                onClick={()=>openModal(index)}>내 학생 리스트</button>
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
