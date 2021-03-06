import React, {useEffect, useState} from 'react';
import DataTable from '../commons/DataTable';
import SingleDataTable from '../commons/SingleDataTable';
import {StudentModal} from '../../utill/Modal';
import {handleListPage, handleconfirm} from '../../utill/utill';

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
        { id: 1, title: '지하철 불끄기', subjectName: '지하철 불끄기' , subjectContents: '지하철 불 끕니다'},
        { id: 2, title: '개찰구 불끄기', subjectName: '개찰구 불끄기' , subjectContents: '개찰구 불 끕니다'},
        { id: 3, title: '승강장 불끄기', subjectName: '승강장 불끄기' , subjectContents: '승강장 불 끕니다'},
        { id: 4, title: '역무원실 불끄기', subjectName: '역무원실 불끄기' , subjectContents: '역무원실 불 끕니다'},
        { id: 5, title: '화장실 불끄기', subjectName: '화장실 불끄기' , subjectContents: '화장실 불 끕니다'},
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
            'name': 'name0',
            'userid': 'id_00',
            'class': '2/9',
            'select': ''
        },
        {
            id: 2,
            'name': 'name1',
            'userid': 'id_01',
            'class': '2/9',
            'select': ''
        },
        {
            id: 3,
            'name': 'name2',
            'userid': 'id_03',
            'class': '2/9',
            'select': ''
        },
        {
            id: 4,
            'name': 'name3',
            'userid': 'id_04',
            'class': '2/9',
            'select': ''
        },
        {
            id: 5,
            'name': 'name4',
            'userid': 'id_05',
            'class': '2/9',
            'select': ''
        },
        {
            id: 6,
            'name': 'name5',
            'userid': 'id_06',
            'class': '2/9',
            'select': ''
        },
        {
            id: 7,
            'name': 'name6',
            'userid': 'id_07',
            'class': '2/9',
            'select': ''
        }, 
        {
            id: 8,
            'name': 'name7',
            'userid': 'id_08',
            'class': '2/9',
            'select': ''
        }, 
        {
            id: 9,
            'name': 'name8',
            'userid': 'id_09',
            'class': '2/9',
            'select': ''
        }, 
        {
            id: 10,
            'name': 'name9',
            'userid': 'id_10',
            'class': '2/9',
            'select': ''
        }, 
        {
            id: 11,
            'name': 'name10',
            'userid': 'id_11',
            'class': '2/9',
            'select': ''
        }, 
        {
            id: 12,
            'name': 'name11',
            'userid': 'id_12',
            'class': '2/9',
            'select': ''
        }, 
        {
            id: 13,
            'name': 'name12',
            'userid': 'id_13',
            'class': '2/9',
            'select': ''
        }, 
        {
            id: 14,
            'name': 'name13',
            'userid': 'id_14',
            'class': '2/9',
            'select': ''
        }, 
        {
            id: 15,
            'name': 'name14',
            'userid': 'id_15',
            'class': '2/9',
            'select': ''
        }, 
        {
            id: 16,
            'name': 'name15',
            'userid': 'id_16',
            'class': '2/9',
            'select': ''
        }
    ])

    const deleteList = [];

    const [checked, setChecked] = useState(false);

    const [selectItem, setSelectItem] = useState([]);
    const [className,setClassName] = useState('');
    
    const [newClass, setNewClass] = useState([
            {
                subjectName: '',
                subjectContents: '',
                selectSubject : -1,
                createTeam: [
                    [
                        {   
                            id: 1,
                            'name': 'name0',
                            'userid': 'id_00',
                            'class': '2/9',
                            'select': ''
                        },
                        {
                            id: 2,
                            'name': 'name1',
                            'userid': 'id_01',
                            'class': '2/9',
                            'select': ''
                        },
                        {
                            id: 3,
                            'name': 'name2',
                            'userid': 'id_03',
                            'class': '2/9',
                            'select': ''
                        },
                        {
                            id: 4,
                            'name': 'name3',
                            'userid': 'id_04',
                            'class': '2/9',
                            'select': ''
                        },
                    ],
                    [
                        {
                            id: 5,
                            'name': 'name4',
                            'userid': 'id_05',
                            'class': '2/9',
                            'select': ''
                        },
                        {
                            id: 6,
                            'name': 'name5',
                            'userid': 'id_06',
                            'class': '2/9',
                            'select': ''
                        },
                        {
                            id: 7,
                            'name': 'name6',
                            'userid': 'id_07',
                            'class': '2/9',
                            'select': ''
                        }, 
                        {
                            id: 8,
                            'name': 'name7',
                            'userid': 'id_08',
                            'class': '2/9',
                            'select': ''
                        }, 
                    ],
                ]
            }
        ]);
    const [openModal, setOpenModal] = useState(false);
    const [teamList, setTeamList] = useState([]);
    const [index,setIndex] = useState();

    useEffect(() => {
        handleFilter()
    },[])

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
        for (let i = 0; i < newClass.length; i++) {
            setTeamList(newClass[i]?.createTeam)
        }
    },[newClass])

    useEffect(()=> {
        
    },[teamList])

    console.log('new',newClass)
    const handleFilter = () => {
        let newStudent = studentList_rows.slice();

        for (let i = 0; i < newClass.length; i++) {
            if (newClass[i]?.createTeam.length !== 0) {
                newClass[i]?.createTeam.map((t) => {
                    return t.map((l) => {
                        return newStudent = newStudent.filter((item)=> {
                            return item.name !== l.name
                        })
                    })
                })
            }
        }
        setStudentList_rows(newStudent)
    }

    const handleModal = (index) => {
        setOpenModal(true);
        setIndex(index)
    }

    const handleCloseModal = () => {
        if (selectItem.length !== 0) {
            const result = window.confirm('취소하시겠습니까?')
            if (result) {
                setOpenModal(false)
            }
        } else setOpenModal(false)
    }
    const handleClassName = (data) => {
        setClassName(data)
    }

    const handleAdd = () => {
        setNewClass(prev => [...prev,
            {
                subjectName: '',
                subjectContents: '',
                selectSubject : -1,
                createTeam: [
                ]
            }
        ])
    }

    const handleClassContents = (data, type, index) => {
        switch (type) {
            case 'subjectName': {
                setNewClass(prev => prev.map((nn, i) => {
                    if (i === index) {
                        nn.subjectName = data
                    } 
                    return nn
                }))
                break;
            }
            case 'subjectContents': {
                setNewClass(prev => prev.map((nn, i) => {
                    if (i === index) {
                        nn.subjectContents = data
                    } 
                    return nn
                }))
                break;
            }
            case 'selectSubject': {
                setNewClass(prev => prev.map((nn, i) => {
                    if (i === index) {
                        nn.selectSubject = data;
                        for(let i = 0; i < selectData.length; i++) {
                            if (selectData[i].id === Number(data)) {
                                nn.subjectName = selectData[i].subjectName;
                                nn.subjectContents =  selectData[i].subjectContents;
                            }
                        }
                    } 
                    return nn
                }))
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
                let newStudent = studentList_rows.slice();
                let newTeam = [];

                for (let i = 0; i < selectItem.length; i++) {
                    newStudent.map((data) => {
                        if (data.name === selectItem[i]) {
                            deleteList.push(data);
                            newTeam.push(data)
                        }
                        return data.name !== selectItem[i]
                    })
                }

                setSelectItem([]);

                newClass[index].createTeam.push(newTeam)

                newClass[index].createTeam.map((i)=> {
                    return i.map((l)=> {
                        return newStudent = newStudent.filter((item)=> {
                            return item.name !== l.name
                        })
                    })
                })

                setStudentList_rows(newStudent)
            }
        } else {
            alert('4~5명까지 선택 가능합니다.')
        }
    }

    const handleClassDelete = (idx, item, index) => {
        const deleteItem = newClass[index].createTeam;

        if (deleteItem.includes(item)) {
            deleteItem.splice(idx, 1)
        }
        
        item.map((data) => {
            return studentList_rows.push(data)
        })
        
        setNewClass(prev => prev.map((nn, i) => {
            if (i === index) {
                nn.createTeam = deleteItem
            } 
            return nn
        }))
        setOpenModal(false);
    }

    return (
        <div className="noneContainerWrapper">
            <span className="title">■ 클래스 상세</span>
            <DataTable
                title="클래스 기본정보"
                data={classData}
                newClass={handleClassName}
            />
            <span className="single_dataTitle">
                과업 정보 
                <button onClick={handleAdd}>과업 추가</button>
            </span>
            
            {
                newClass?.map((cc, idx) => {
                    return (
                        <SingleDataTable 
                            index={idx}
                            value={cc}
                            data={subjectData}
                            selectList={selectData}
                            teamList={cc.createTeam}
                            changeData={handleClassContents}
                            openModal={handleModal}
                            deleteTeam={handleClassDelete}
                        />
                    ) 
                   
                })
               
            }
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
