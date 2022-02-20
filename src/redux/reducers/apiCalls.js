const intialState = {
  translationsText:'',
  counter:0
};

const apiCalls = (state = intialState, action) => {
  switch (action.type) {
    case "API-CALL":
      
      return {...state,translationsText: action.translationsText};

    default:
      return state;
  }
};

export default apiCalls;
