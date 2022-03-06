import React from 'react';
import { apiCall } from "../../redux/action/index";
import {useDispatch } from "react-redux";
import './InputComponent.css';

function InputComponent(props) {
  const {langSelectInput ,langSelectOut,setText,inputText} = props
  const dispatch = useDispatch();
  

  return (
    <div className='input-container'>
      <div className='input-text'>
        <textarea value={inputText} onChange={(e)=> setText(e.target.value)} name='inputText' rows='30' type='text' placeholder='Enter Text'/>
        <button onClick={() => dispatch(apiCall(inputText,langSelectInput,langSelectOut))}> Translate</button>
      </div>
    </div>
  )
}

export default InputComponent