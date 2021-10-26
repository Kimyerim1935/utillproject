import React from 'react';
import DashboardDataGrid from '../Component/commons/DashboardDataGrid';

export const MessageModal = ({messageContents,closeModal,sendMessage}) => {
    return (
        <div className="messageModal">
            <textarea
                onChange={(e)=>messageContents(e.target.value)}/>
            <button 
                className="cancelBtn"
                onClick={()=>closeModal()}>취소</button>
            <button 
                className="confirmBtn"
                onClick={()=>sendMessage()}>전송</button>
        </div>
    )
}

export const StudentModal = ({closeModal, columns, rows, checkItem}) => {
    return (
        <div className="studentModal">
            <DashboardDataGrid 
                columns={columns}
                rows={rows}
                checkItem={checkItem}
            />
            <button 
                className="cancelBtn"
                onClick={()=>closeModal()}>취소</button>
            <button 
                className="confirmBtn"
                onClick={()=>console.log('조편성하기')}>조편성 하기</button>
        </div>
    )
}

export const AdminRankingModal = ({items, selectRadio, closeModal}) => {
    return (
        <div className="adminRankingModal">
            <span className="title">부여가능 권한</span>
            {
                items.map((item)=> {
                    return (        
                        <label key={item.id}>
                            <input
                                type="radio"
                                name="admin"
                                onChange={() =>selectRadio(item.id) }
                            />
                            {item.title} 
                        </label>
                    )
                })
            }
            <button 
                className="cancelBtn"
                onClick={()=>closeModal()}>닫기</button>
        </div>
    )
}