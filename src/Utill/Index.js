import React from 'react';
import {Route} from 'react-router-dom';

import Accordion from './Accordion/index';
import CheckList from './CheckList/CheckList';

const Container  = () => {
    return (
        <>
            <Accordion />
            <Route exact path={'/'} component={CheckList}/>
        </>
    )
}

export default Container;
