const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.querySelector("#result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");
const speech = new SpeechSynthesisUtterance()

btn.addEventListener("click", () => {
  let inputWord = document.getElementById("input-word").value;
 
  fetch(`${url} ${inputWord}`)
    .then((reponse) => reponse.json())
    .then((data) => {
      console.log(data);
      console.log(data[0].meanings[0].partOfSpeech);
      console.log(data[0].phonetic);
      console.log(data[0].meanings[0]);
      result.innerHTML = `
    <div class="word">
    <h3>${inputWord}</h3>
    <button><i class="fa-solid fa-volume-high"></i></button>
</div>
<div class="details">
    <p>${data[0].meanings[0].partOfSpeech}</p>
    <p>/${data[0].phonetic}/</p>
</div>
<p class="word-meaning">
   ${data[0].meanings[0].definitions[0].definition}
</p>
<p class="word-example">
   ${data[0].meanings[0].definitions[0].example || ""}
</p>`;

let utterance = document.querySelector(".fa-volume-high")
utterance.addEventListener("click",() =>{
    speech.text = inputWord
speechSynthesis.speak(speech)

})
    })

    .catch(() => {
      result.innerHTML = `
    <h2 class="error">Couldn't find The Word<h2>
    
     `;
    });
   
    
});

