let speech = new SpeechSynthesisUtterance();
let textarea = document.querySelector("textarea")
let icon = document.querySelector(".icon")
let voices=[];

let voiceSelect = document.querySelector("select")
const button = document.querySelector("button");

window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]
    
    voices.forEach((voice, i)=>{
            (voiceSelect.options[i]) = new Option(voice.name,i);
        })
        };
        
        voiceSelect.addEventListener('change',()=>{
    speech.voice = voices[voiceSelect.value];
});



button.addEventListener('click',()=>{
    if(!textarea.value){
        alert("Plz Add Some Text")
    }
    else{
        speech.text = document.querySelector("textarea").value;
        window.speechSynthesis.speak(speech)
    }
    });
    

    
    

    
    
    
    