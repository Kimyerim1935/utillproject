import React, {useEffect, useState} from 'react';
import DataTable from '../commons/DataTable';
import SingleDataTable from '../commons/SingleDataTable';
import {StudentModal} from '../../utill/Modal';
import {handleListPage, handleconfirm} from '../../utill/utill';
import _ from 'lodash';

const ClassProduce = () => {

    const managerInfo = {
        name : '김예림',
        grade: '2/9',
        id: 'yerim98'
    }
    const classData = [
        { id: 'input',title: '클래스명', type: 'className' },
        { title: '담당자', info: managerInfo.name },
        { title: '학년/반', info: managerInfo.grade  },
        { title: '담당자 아이디', info: managerInfo.id  },
    ]

    const subjectData = [
        { id: 'input', title: '과업명', type: 'subjectName'},
        { id: 'textArea', title: '과업내용', type: 'subjectContents'},
        { id: 'select', title: '과업선택', type: 'selectSubject'},
        { id: 'modal', title: '조편성', type: 'createteam'},
    ]

    const selectData = [
        { id: 1, title: '지하철 불끄기'},
        { id: 2, title: '개찰구 불끄기'},
        { id: 3, title: '승강장 불끄기'},
        { id: 4, title: '역무원실 불끄기'},
        { id: 5, title: '화장실 불끄기'},
    ]
    const studentList_columns = [
        { field: 'name', headerName: '이름' },
        { field: 'userid', headerName: '아이디' },
        { field: 'class', headerName: '소속' },
        { field: 'select', headerName: '선택'},
    ]

    const [studentList_rows, setStudentList_rows] = useState([
        {   
            id: 1,
            'name': '김예림0',
            'userid': 'yerim98',
            'class': '2/9',
            'select': ''
        },
        {
            id: 2,
            'name': '김예림1',
            'userid': 'yerim98',
            'class': '2/9',
            'select': ''
        },
        {
            id: 3,
            'name': '김예림2',
            'userid': 'yerim98',
            'class': '2/9',
            'select': ''
        },
        {
            id: 4,
            'name': '김예림3',
            'userid': 'yerim98',
            'class': '2/9',
            'select': ''
        },
        {
            id: 5,
            'name': '김예림4',
            'userid': 'yerim98',
            'class': '2/9',
            'select': ''
        },
        {
            id: 6,
            'name': '김예림5',
            'userid': 'yerim98',
            'class': '2/9',
            'select': ''
        },
        {
            id: 7,
            'name': '김예림6',
            'userid': 'yerim98',
            'class': '2/9',
            'select': ''
        }, 
        {
            id: 8,
            'name': '김예림7',
            'userid': 'yerim98',
            'class': '2/9',
            'select': ''
        }, 
        {
            id: 9,
            'name': '김예림8',
            'userid': 'yerim98',
            'class': '2/9',
            'select': ''
        }, 
        {
            id: 10,
            'name': '김예림9',
            'userid': 'yerim98',
            'class': '2/9',
            'select': ''
        }, 
        {
            id: 11,
            'name': '김예림10',
            'userid': 'yerim98',
            'class': '2/9',
            'select': ''
        }, 
        {
            id: 12,
            'name': '김예림11',
            'userid': 'yerim98',
            'class': '2/9',
            'select': ''
        }
    ])

    const [deleteList, setDeleteList] = useState([]);

    const [checked, setChecked] = useState(false);

    const [selectItem, setSelectItem] = useState([]);
    const [newClass, setNewClass] = useState({
            className: '',
            subjectName: '',
            subjectContents: '',
            selectSubject : -1,
            createTeam: [
                // [
                //     {
                //         id: 1,
                //         'name': '김예림0',
                //         'userid': 'yerim98',
                //         'class': '2/9',
                //         'select': ''
                //     },
                //     {
                //         id: 2,
                //         'name': '김예림1',
                //         'userid': 'yerim98',
                //         'class': '2/9',
                //         'select': ''
                //     },
                //     {
                //         id: 3,
                //         'name': '김예림2',
                //         'userid': 'yerim98',
                //         'class': '2/9',
                //         'select': ''
                //     },
                //     {
                //         id: 4,
                //         'name': '김예림3',
                //         'userid': 'yerim98',
                //         'class': '2/9',
                //         'select': ''
                //     },
                // ],
                // [
                //     {
                //         id: 5,
                //         'name': '김예림4',
                //         'userid': 'yerim98',
                //         'class': '2/9',
                //         'select': ''
                //     },
                //     {
                //         id: 6,
                //         'name': '김예림5',
                //         'userid': 'yerim98',
                //         'class': '2/9',
                //         'select': ''
                //     },
                //     {
                //         id: 7,
                //         'name': '김예림6',
                //         'userid': 'yerim98',
                //         'class': '2/9',
                //         'select': ''
                //     },
                //     {
                //         id: 8,
                //         'name': '김예림7',
                //         'userid': 'yerim98',
                //         'class': '2/9',
                //         'select': ''
                //     }
                // ],
            ]
        });

    const [openModal, setOpenModal] = useState(false);
    const [teamList, setTeamList] = useState([]);

    useEffect(()=>{
        setSelectItem([])
        setChecked(false)
        studentList_rows.sort((a,b) => a.id - b.id)
    },[openModal,studentList_rows])

    useEffect(()=>{
        setOpenModal(false);
    },[studentList_rows])

    useEffect(()=>{
        setOpenModal(false);
        setTeamList(newClass.createTeam)
    },[newClass.createTeam])

    const handleModal = () => {
        setOpenModal(true);
    }

    const handleCloseModal = () => {
        if (selectItem.length !== 0) {
            const result = window.confirm('취소하시겠습니까?')
            if (result) {
                setOpenModal(false)
            }
        } else setOpenModal(false)
    }

    const handleClassName = (data, type) => {
        switch (type) {
            case 'className': {
                setNewClass(prev => ({...prev,
                    className: data}))
                break;
            }
            case 'subjectName': {
                setNewClass(prev => ({...prev,
                    subjectName: data}))
                break;
            }
            case 'subjectContents': {
                setNewClass(prev => ({...prev,
                    subjectContents: data}))
                break;
            }
            case 'selectSubject': {
                setNewClass(prev => ({...prev,
                    selectSubject: data}))
                break;
            }
            default: {
                break;
            }
        }
    }

    const handleCheck = ({target}) => {
            setChecked(!checked)
            checkedItemHandler(target.value, target.checked)
    }

    const checkedItemHandler = (id, checked) => {
        if (checked) {
            selectItem.push(id)
            setSelectItem(selectItem);
            // if (selectItem.length > 5) {
            //     alert('최대 5명까지만 선택 가능합니다.')
            //     selectItem.pop(id);
            // }
        } else if (!checked && selectItem.includes(id)) {
            selectItem.pop(id);
            setSelectItem(selectItem);
        }
        return selectItem;
    }

    const handleClassCreate = () => {
        if (selectItem.length === 4 || selectItem.length === 5) {
            const result = window.confirm('조를 편성하시겠습니까?');
            if (result) {
                newClass.createTeam.push(selectItem)
                setSelectItem([]);

                let newStudent = studentList_rows.slice();
                
                for (let i = 0; i < selectItem.length ; i++) {
                    newStudent = newStudent.filter((data) => {
                        if (data.name === selectItem[i]) {
                            deleteList.push(data)
                        }
                        return (data.name !== selectItem[i]) 
                    })
                }
                setStudentList_rows(newStudent)
            }
        } else {
            alert('4~5명까지 선택 가능합니다.')
        }
    }

    const handleClassDelete = (idx, item) => {
        const deleteItem = newClass.createTeam;

        if (deleteItem.includes(item)) {
            deleteItem.splice(idx, 1)
        }

        setNewClass({
            createTeam : deleteItem
        })
        setOpenModal(false);

        for (let i = 0; i < item.length; i++) {
            deleteList.filter((data) => {
                if (data.name === item[i]){
                    return studentList_rows.push(deleteList.splice(item[i], 1)[0]) 
                }
            })
        }
    }

    return (
        <div className="noneContainerWrapper">
            <span className="title">■ 클래스 상세</span>
            <DataTable
                title="클래스 기본정보"
                data={classData}
                newClass={handleClassName}
            />
            <SingleDataTable 
                title="과업정보"
                data={subjectData}
                selectList={selectData}
                teamList={teamList}
                changeData={handleClassName}
                openModal={handleModal}
                deleteTeam={handleClassDelete}
            />
            {
                openModal && 
                <StudentModal 
                    closeModal={handleCloseModal}
                    columns={studentList_columns}
                    rows={studentList_rows}
                    checkItem={handleCheck}
                    chekced={checked}
                    createTeam={handleClassCreate}
                    />
            }
            <button 
                className="listbutton"
                onClick={()=>handleconfirm('/Class', '해당클래스를 생성하시겠습니까?')}
                >생성</button>
            <button 
                className="list_backButton"
                onClick={()=>handleListPage('/Class')}
            >뒤로</button>
        </div>
    )
}

export default ClassProduce;
