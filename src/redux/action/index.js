import { api,apiTranslate } from "../API Calls";


export const apiCall = (inputText, langSelectInput,langSelectOut) => {
  let translationsText = "";
  return async (dispatch) => {

    translationsText = await apiTranslate(inputText,langSelectInput,langSelectOut)

    dispatch({
      type: "API-CALL",
      translationsText: translationsText,
    });
  };
};

export const apiCallGetLang = () => {
  let translation = '';
  return async(dispatch) => {
    
    translation = await api();

    dispatch({
      type: "API-CALL-GET-LANG",
      translation: translation,
    });
  };
};
