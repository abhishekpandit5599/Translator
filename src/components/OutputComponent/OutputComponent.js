import React from 'react';
import { useSelector} from "react-redux";
import './OutputComponent.css';

function OutputComponent() {
  const myState = useSelector((state) => state.apiCalls);

  return (
    <div className='output-container'>
      <div className='outputText'>
        <div className='text'>{myState.translationsText.length?myState.translationsText :<b>Translation</b>}</div>
      </div>
    </div>
  )
}

export default OutputComponent