import {connect} from 'react-redux';
import React from 'react';
import { buyBook } from "../redux/index";
import {useState} from 'react';

function BookContainer(props) {
    const[number,setNumber]=useState(1);

    return (
        <div>
            <h1>No of Books-{props.numberOfBooks}</h1>
            <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)}/>
            <button onClick={()=>props.buyBook(number)}>Buy {number} Book</button>
        </div>
    )
}

const mapStatetoProps=(state)=>{
    return{
        numberOfBooks:state.numberOfBooks 
    }
}

const mapDispatchtoProps=(dispatch)=>{
    return{
        buyBook:function(number){
            dispatch(buyBook(number));
        }
    }
}


export default connect(mapStatetoProps,mapDispatchtoProps)(BookContainer);