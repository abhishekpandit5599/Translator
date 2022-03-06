import React, { useState, useEffect } from "react";
import InputComponent from "../InputComponent/InputComponent";
import OutputComponent from "../OutputComponent/OutputComponent";
import { apiCallGetLang } from "../../redux/action/index";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";

function Home() {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.apiCalls);


  const [langSelectInput, setLangSelectInput] = useState({ value: "en" });
  const [langSelectOut, setLangSelectOut] = useState({ value: "hi" });
  const [inputText ,setInputText] = useState('')

  const getLang = useSelector((state) => state.apiCallsGetLang).translation;

  useEffect(() => {
    dispatch(apiCallGetLang());
    // eslint-disable-next-line
  }, []);

  // Change State of Input text or set Text
  const setText=(text)=>{
    setInputText(text);
  }

  const changeSetLang=()=>{
    const inputLang = langSelectInput;
    const outputLang = langSelectOut;
    const inputTextTemp = inputText;
    setLangSelectInput(outputLang);
    setLangSelectOut(inputLang);
    setInputText(myState.translationsText);
    myState.translationsText = inputTextTemp;
  }

  return (
    <>
      <div className="home-container">
        <div className="lang-selector">
          <select
            name="langSelectInput"
            onChange={(e) => setLangSelectInput({ value: e.target.value })}
            value={langSelectInput.value}
          >
            {Object.keys(getLang).map((item) => {
              return (
                <option key={getLang[item].name} value={item}>
                  {getLang[item].name}
                </option>
              );
            })}
          </select>
          
          <i onClick={changeSetLang} className="fa-lg placeicon fas fa-exchange-alt"></i>

          <select
            name="langSelectOut"
            onChange={(e) => setLangSelectOut({ value: e.target.value })}
            value={langSelectOut.value}
          >
            {Object.keys(getLang).map((item) => {
              return (
                <option key={getLang[item].name} value={item}>
                  {getLang[item].name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="home-conatiner-io-div">
          <InputComponent
            langSelectInput={langSelectInput.value}
            langSelectOut={langSelectOut.value}
            setText = {setText}
            inputText={inputText}
          />
          <OutputComponent />
        </div>
      </div>
    </>
  );
}

export default Home;
