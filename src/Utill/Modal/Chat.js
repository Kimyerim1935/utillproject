import React, {useState, useEffect, useRef} from 'react';
import moment from 'moment';

const Chat = () => {
    const [chatList, setChatList] = useState([
        {
            no: 1,
            id: 'student1',
            chat: 'hahahahahaha',
            date: '11-16 15:34:49'
        },
        {
            no: 2,
            id: 'student2',
            chat: 'hahaha',
            date: '11-16 15:34:49'
        },
        {
            no: 3,
            id: 'student3',
            chat: 'hahaha',
            date: '11-16 15:34:49'
        },
        {
            no: 4,
            id: 'student4',
            chat: 'hahaha',
            date: '11-16 15:34:49'
        },
        {
            no: 5,
            id: 'student5',
            chat: 'hahaha',
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
        if (chatContents.length === 0) {
            alert('채팅 내용을 입력해주세요')
        } else {
            setChatList(prev => [...prev,
                {
                    no: chatList.length + 1,
                    id: `student${chatList.length+1}`,
                    chat: chatContents,
                    date: nowTime
                }
            ])
        }
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
                                <span className="id">{item.id}</span>
                                <span className="chat">{item.chat}</span>
                                <span className="date">{item.date}</span>
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