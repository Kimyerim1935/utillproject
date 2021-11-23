import React, {useState, useEffect} from 'react';
import {handleListPage} from '../../utill/utill';

const guideText = {
    step01: 'STEP1 부여할 권한을 선택해 주세요',
    adminRule: '* 관리자 생성 규칙',
    rule01: '1) 슈퍼관리자는 모든 권한(슈퍼관리자 포함)의 관리자 등급 생성 가능함',
    rule02: '2) 학교 관리자는 소속된 학교의 동급건한의 학교 관리자, 일반관리자(담임선생님) 계정 생성 가능함',
    rule03: '3) 일반관리자는 관리자 계정을 생성할 수 없으며, 상위 관리자로부터 계정이 생성 되었을 경우 소속된 반의 학생 계정만 생성 가능함',
    step02: 'STEP2 계정생성을 원하는 학교를 선택해 주세요',
    step03: 'STEP3 생성할 계정 개수를 설정해 주세요',
    step04: 'STEP4 부여된 관리자의 세부정보를 기입해 주세요'
}
const AdminProduce = () => {
    const adminList = [
        {
            id: 'super',
            title: '슈퍼관리자'
        },
        {
            id: 'school',
            title: '학교관리자'
        },
        {
            id: 'default',
            title: '일반관리자'
        },
    ]
    const [adminInfo, setAdminInfo] = useState({
        role: '',
        schoolName: '',
        idCount: 0,
        infoArr: []
    })
    const [isCreate, setIsCreate] = useState(false);  

    useEffect(() => {
        setAdminInfo(prev => ({...prev,
            infoArr : Array.from({length: parseInt(adminInfo.idCount)}, () => { return {'name': "" , 'grade': "", 'class': ""} })
        }))
    }, [adminInfo.idCount])

    const handleSearch = () => {
        console.log('search!!')
    }

    const handleCreate = () => {
        if (adminInfo.role !== '' && adminInfo.schoolName !== '' && adminInfo.idCount !== 0) {
            setIsCreate(true)
        }
        else if (adminInfo.role.length === 0){
            alert('권한을 선택해 주세요');
            return;
        }
        else if (adminInfo.schoolName.length === 0) {
            alert('학교를 선택해 주세요');
            return
        }
        else if (adminInfo.idCount === 0) {
            alert('0보다 큰 숫자만 가능합니다.');
            return;
        }
    }   
    
    const handleDelete = (e, idx) => {
        let newInfo = adminInfo.infoArr.slice()
        
        for (let i=0; i<newInfo.length; i++){
            newInfo = newInfo.filter((item) => {
                return item.idx !== idx
            })
        }
        
        setAdminInfo(prev => ({...prev,
        infoArr: newInfo}))
    }

    const handleSave = () => {
        const value = [];

        if (adminInfo.role === 'super' || adminInfo.role === 'school') {
            for(let i=0; i< adminInfo.infoArr.length; i++){
                adminInfo.infoArr.filter((item) => {
                    return value.push(item.name)
                })
            }
            if (value.includes("")) {
                alert('이름을 입력해주세요')
            } 
            else {
                const result = window.confirm(`${adminInfo.infoArr.length}개의 계정을 생성하시겠습니까?`);
                if (result){
                    handleListPage('/admin')
                }
            }
        }
        if (adminInfo.role === 'default') {
            for(let i=0; i< adminInfo.infoArr.length; i++){
                adminInfo.infoArr.filter((item) => {
                    return value.push(item.name, item.grade, item.class)
                })
            }
            if (value.includes("")) {
                alert('필수값을 모두 입력해주세요')
            } 
            else {
                const result = window.confirm(`${adminInfo.infoArr.length}개의 계정을 생성하시겠습니까?`);
                if (result){
                    handleListPage('/admin')
                }
            }
        }        
    }
    
    return (
        <div className="noneContainerWrapper">
            <span className="title">■ 관리자 계정 추가 관리 > 계정 추가</span>
            <span className="guideText">{guideText.step01}</span>
            <div className="produceWrapper">
            {
                adminList.map((item)=> {
                    return (        
                        <label key={item.id}>
                            <input
                                type="radio"
                                name="admin"
                                onChange={() =>setAdminInfo(prev =>({ ...prev, role : item.id}))}
                            />
                            {item.title} 
                        </label>
                    )
                })
            }
            </div>
            <span className="guideText">{guideText.adminRule}</span>
            <span className="guideText">&nbsp; {guideText.rule01}</span>
            <span className="guideText">&nbsp; {guideText.rule02}</span>
            <span className="guideText">&nbsp; {guideText.rule03}</span><br/>
            <span className="guideText">{guideText.step02}</span>
            <div className="produceWrapper">
                <input 
                    type="text"
                    className="search"
                    required
                    value={adminInfo.schoolName}
                    onChange={(e)=>setAdminInfo(prev => ({...prev, schoolName: e.target.value}))}
                />
                <button onClick={handleSearch}>검색</button>
            </div>
            <span className="guideText">{guideText.step03}</span>
            <div className="produceWrapper">
                <input 
                    type="number"
                    className="search"
                    min={0}
                    required
                    value={adminInfo.idCount}
                    onChange={(e)=>setAdminInfo(prev => ({...prev, idCount: e.target.value}))}
                />
                <button onClick={handleCreate}>생성</button>
            </div>
            <span className="guideText">{guideText.step04}</span>
            <div className="produceWrapper">
                {
                    isCreate && 
                    <div>
                        {
                            adminInfo.role === 'super' && 
                            adminInfo?.infoArr?.map((i,idx) => {  
                                i.idx = idx                            
                                return (
                                    <div key={idx}>
                                        <button 
                                            className="delete"
                                            onClick={(e)=>handleDelete(e,idx)}>삭제</button>
                                        <span>아이디: S_0000{idx+1}</span>
                                        <span>이름 
                                            <input 
                                                value={i.name}
                                                onChange={ (e) => {
                                                    adminInfo.infoArr[idx] = { ...adminInfo?.infoArr[idx] , name: e.target.value}
                                                    setAdminInfo({...adminInfo})
                                                }
                                            }/> 
                                        </span>
                                    </div>
                                )
                            })
                        }
                        {
                            adminInfo.role === 'school' &&
                            adminInfo?.infoArr?.map((i,idx) => {
                                i.idx = idx                     
                                return (
                                    <div key={idx}>
                                        <button 
                                            className="delete"
                                            onClick={(e)=>handleDelete(e,idx)}>삭제</button>
                                        <span>아이디: S_0000{idx+1}</span>
                                        <span>소속: {adminInfo.schoolName}</span>
                                        <span>이름 
                                            <input 
                                                value={i.name}
                                                onChange={ (e) => {
                                                    adminInfo.infoArr[idx] = { ...adminInfo?.infoArr[idx] , name: e.target.value}
                                                    setAdminInfo({...adminInfo})
                                                }
                                            }/> 
                                        </span>
                                    </div>
                                )
                            })
                        }
                        {
                            adminInfo.role === 'default' &&
                            adminInfo?.infoArr?.map((i,idx) => {  
                                i.idx = idx                            
                                return (
                                    <div>
                                        <span>아이디: S_0000{idx+1}</span>
                                        <span>소속: {adminInfo.schoolName}</span>
                                        <span>이름 
                                            <input 
                                                value={i.name}
                                                onChange={ (e) => {
                                                    adminInfo.infoArr[idx] = { ...adminInfo?.infoArr[idx] , name: e.target.value}
                                                    setAdminInfo({...adminInfo})
                                                }}
                                            /> 
                                        </span>
                                        <span>학년 
                                            <input 
                                                type='number'
                                                min={1}
                                                max={6}
                                                onChange={ (e) => {
                                                    adminInfo.infoArr[idx] = { ...adminInfo?.infoArr[idx] , grade: e.target.value}
                                                    setAdminInfo({...adminInfo})
                                                }}
                                            /> 
                                        </span>
                                        <span>반 
                                            <input
                                                type='number'
                                                min={1}
                                                max={15}
                                                onChange={ (e) => {
                                                    adminInfo.infoArr[idx] = { ...adminInfo?.infoArr[idx] , class: e.target.value}
                                                    setAdminInfo({...adminInfo})
                                                }}
                                            />
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
            <button 
                className="listbutton"
                onClick={handleSave}>저장</button>
        </div>
    )
}

export default AdminProduce;