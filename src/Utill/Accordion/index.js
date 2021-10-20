import React from 'react';
import Accordion from './component_accordion';

const navList = [
    {
        id: 'main',
        title: '메인',
        subTitle: '대시보드',
        LinkTo: "대시보드로"
    },
    {
        id: 'member',
        title: '회원정보',
        subTitle: '회원리스트',
        LinkTo: "회원리스트로"
    },
    {
        id: 'class',
        title: '클래스 관리',
        subTitle: '클래스 리스트',
        subTitle2: '공지사항',
        LinkTo: "클래스 리스트로",
        LinkTo2: "공지사항으로",
    },
    {
        id: 'admin',
        title: '관리자 계정',
        subTitle: '관리자 계정 관리',
        LinkTo: "관리자 계정 관리로"
    },
    {
        id: 'myPage',
        title: '내 계정',
        subTitle: '내 계정 관리',
        LinkTo: "내 계정 관리로"
    }
]

const Sidenav = () => {
    return (
        <div className="sidenavWrapper">
            {
                navList.map((item)=> {
                    return (
                        <Accordion 
                            title={item.title}
                            subTitle={item.subTitle}
                            subTitle2={item.subTitle2}
                        />
                    )
                })
            } 
        </div>
    )
}

export default Sidenav;
