import React from 'react';
import Number from './Number';

const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'

}

const style1 = {
    background: 'grey',
    border: '2px solid black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '400px'


}

const Display = ({queue, NumServ, onClick, latestNum}) => {
    const queueCopy = [...queue];
    if(queueCopy.length === 0){
        return(
            <div style={style}>
                <div style = {style1} >
                    <b>Now Serving:</b> {NumServ} <br/>
                    <b>Last Number:</b> {latestNum} <br/>
                </div>
                No Items in the waiting queue
                <Number value="1" onClick={onClick} />
            </div>
        )
    }

    else{
        return(
            <div style={style}>
                <div style = {style1} >
                    <b>Now Serving:</b> {NumServ} <br/>
                    <b>Last Number:</b> {latestNum} <br/>
                </div>
                <Number value="1" onClick={onClick} />
            </div>
        )

    }

}

export default Display;