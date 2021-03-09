import React from 'react';

const modal = (props) => {
    if (props.show) {
        return (
        <div className='modal' onClick={ ()=>{props.clicked()} }/>
        )
    } else {
        return null;
    }
}

export default modal;