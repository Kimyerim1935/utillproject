export const thousandsSeparator = (e) => { //숫자 세 자리씩 끊는 함수
    return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const handleListPage = (url) => {
    return (
        window.location.href = url
    )
}

export const handleconfirm = (url,confirm) => {
    const result = window.confirm(confirm);
    
    if (result) {
        window.location.href = url
    }
}

export const phoneNumber = (num) => {
    return num.replace( /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3")
}

export const birthDay = (birth) => {
    return birth.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3')
}

export const textNullCheck = (value) => {
    if (value === null || value ==- undefined) {
        return '-'
    } 
    if (JSON.stringify(value).includes('{secession}')) {
        return <span style={{color:'lightgray'}}>탈퇴회원입니다</span>
    } else {
        return value;
    }
}

export const handleNumber = (page, index) => { 
    return index + (page * 10) + 1
}
