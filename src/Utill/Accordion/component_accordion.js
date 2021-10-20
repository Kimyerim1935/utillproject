import React, {useState} from 'react';
import openArrow from '../../assets/img/arrow_up.png';
import closeArrow from '../../assets/img/arrow_down.png';

const Accordion = ({title, subTitle, subTitle2}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [allOpen, setAllOpen] = useState(true);

    const handleClick = () => {
        if (allOpen){
            setAllOpen(false)
        } else {
            setIsOpen(!isOpen)
        }
    }

    return (
        <div className="menuWrapper" key={title} >
            <div className="titleWrapper" onClick={()=>handleClick()}>
                {title}
                <img src={isOpen || allOpen ? openArrow : closeArrow} alt="icon" style={{width: 20, height: 20, marginTop: 5}} />
            </div>
            {
                (isOpen || allOpen) && 
                <div className="subTitleWrapper">
                    {subTitle}
                </div>
            }
            {   
                subTitle2 &&
                (isOpen || allOpen) && 
                <div className="subTitleWrapper">
                    {subTitle2}
                </div>
            }
        </div>
    )
}

export default Accordion;