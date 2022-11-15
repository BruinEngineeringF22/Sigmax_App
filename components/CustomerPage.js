import React from 'react';
import Counter from './Counter';
import Display from './Display';
import { useEffect } from 'react';

const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row'

}


const CustomerPage = ({numCounterServ,statusS, NumServ, queue, num, setNum, setQueue}) => {
    const handleClick = () => {
        const queueCopy = [...queue];
        const newNum = num + 1
        setNum(newNum)
        queueCopy.push(newNum)
        setQueue(queueCopy)
    }

    //Log queue whenever queue is updated
    useEffect(() => {
        console.log(queue)
    }, [queue])

    return (
    <div>
        <div>
        <b>Customer View</b>
        <Display queue = {queue} NumServ={NumServ} latestNum = {num} onClick = {handleClick} />
        </div>

        <div style = {style}>
            <Counter numCounterServ={numCounterServ} statusS = {statusS} key = {1} value = '1' />
            {/* { Counter({value: '1', status: status[0]}) } */}
            <Counter numCounterServ={numCounterServ} statusS = {statusS}  key = {2} value = '2'/>
            <Counter numCounterServ={numCounterServ} statusS = {statusS} key = {3} value = '3'/>
            <Counter numCounterServ={numCounterServ} statusS = {statusS} key = {4} value = '4'/>
        </div>
    </div>
    )
}

export default CustomerPage;