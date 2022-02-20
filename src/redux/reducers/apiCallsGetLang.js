const intialState = {translation:''};
  
  const apiCallsGetLang = (state = intialState, action) => {
    switch (action.type) {
      case "API-CALL-GET-LANG":
        return {...state,translation: action.translation};
  
      default:
        return state;
    }
  };
  
export default apiCallsGetLang;
  