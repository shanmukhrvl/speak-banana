const btnTranslate = document.querySelector("#btn-translate");
const txtInput = document.querySelector("#txt-input");
const outputDiv = document.querySelector("#output");

const serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Something wrong with server, try again after some time");
}

function clickHandler() {
    const inputText = txtInput.value;

    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            const translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);