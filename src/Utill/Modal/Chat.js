import React, {useState, useEffect, useRef} from 'react';
import moment from 'moment';
import { managerInfo } from '../Component/SampleData/userSample';

const Chat = () => {
    const [chatList, setChatList] = useState([
        {
            role: 'student',
            id: 'student1',
            chat: '안녕하세요',
            date: '11-16 15:34:49'
        },
        {
            role: 'student',
            id: 'student2',
            chat: '안녕하세요',
            date: '11-16 15:34:49'
        },
        {
            role: 'student',
            id: 'student3',
            chat: '안녕하세요',
            date: '11-16 15:34:49'
        },
        {
            role: 'teacher',
            id: managerInfo.id,
            chat: '안녕',
            date: '11-16 15:34:49'
        },
        {
            role:'student',
            id: 'student4',
            chat: '안녕하세요',
            date: '11-16 15:34:49'
        },
        {
            role: 'teacher',
            id: managerInfo.id,
            chat: '애들아 안녕',
            date: '11-16 15:34:49'
        },
    ]);

    const [chatContents, setChatContents] = useState('');
    const chatInput = useRef();
    const nowTime = moment().format('MM-DD HH:mm:ss');

    useEffect(()=>{
        setChatContents('')
        scrollToBottom()
    },[chatList])

    const pressEnter = (e) => {
        if(e.key === 'Enter'){
            handleAddChat()
        }
    }

    const handleAddChat = () => {
        setChatList(prev => [...prev,
                {
                    role:'teacher',
                    id: managerInfo.id,
                    chat: chatContents,
                    date: nowTime
                }
        ])
    }
    
    const scrollToBottom = () => {
        const {scrollHeight, clientHeight} = chatInput.current;
        chatInput.current.scrollTop = scrollHeight - clientHeight
    }

    return (
        <div className="ChatWrapper">
            <div className="chatList" ref={chatInput}>
                {
                    chatList.map((item) => {
                        return (
                            <div className="chatContents">
                                <li className={item.role === 'student' ? 'left' : 'right'}>
                                    <span className="id">{item.id}</span>
                                    <span className="chat">{item.chat}</span>
                                    <span className="date">{item.date}</span>
                                </li>
                            </div>
                        )
                    })
                }
            </div>
            <div className="chatArea">
                <input 
                    type="text"
                    value={chatContents}
                    onChange={(e)=>setChatContents(e.target.value)}
                    onKeyPress={pressEnter}
                /> 
                <button onClick={() =>handleAddChat()}>전송</button>
            </div>
        </div>
    )
}

export default Chat;