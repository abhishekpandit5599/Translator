import axios from "axios";

export const api=async()=>{
    let translation=''
    const options = {
      method: "GET",
      url: "https://api.cognitive.microsofttranslator.com/languages?api-version=3.0",
    };
  
    await axios
      .request(options)
      .then(function (response) {
        translation = response.data.translation;
      })
      .catch(function (error) {
        console.error(error);
      });
      return translation
}


export const apiTranslate=async(inputText,langSelectInput,langSelectOut)=>{
    let translationsText='';
    const options = {
        method: "POST",
        url: "https://microsoft-translator-text.p.rapidapi.com/translate",
        params: {
          to: langSelectOut,
          from: langSelectInput,
          "api-version": "3.0",
          profanityAction: "NoAction",
          textType: "plain",
        },
        headers: {
          "content-type": "application/json",
          "x-rapidapi-host": "microsoft-translator-text.p.rapidapi.com",
          "x-rapidapi-key": "8e4fffa113msha4b3401e3125721p14b45fjsnc97c4bd0e06f",
        },
        data: [{ Text: inputText }],
      };
  
      await axios
        .request(options)
        .then(function (response) {
          const data = response;
          translationsText = data.data[0].translations[0].text;
        })
        .catch(function (error) {
          console.error(error);
        });
        return translationsText;
}