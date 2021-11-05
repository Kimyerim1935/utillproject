import React from 'react';
import Accordion from './component_accordion';

const navList = [
    {
        id: 'main',
        title: 'checklist',
        subTitle: 'component',
        LinkTo: "/"
    },
    // {
    //     id: 'member',
    //     title: '회원정보',
    //     subTitle: '회원리스트',
    //     LinkTo: "회원리스트로"
    // },
    // {
    //     id: 'class',
    //     title: '클래스 관리',
    //     subTitle: '클래스 리스트',
    //     subTitle2: '공지사항',
    //     LinkTo: "클래스 리스트로",
    //     LinkTo2: "공지사항으로",
    // },
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
