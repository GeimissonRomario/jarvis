const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.lang = 'pt-BR';  // Define a língua para português
    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Bom dia, Gay...");
    } else if (hour >= 12 && hour < 17) {
        speak("Boa tarde, Gay...");
    } else {
        speak("Boa noite, Gay...");
    }
}

window.addEventListener('load', () => {
    speak("Inicializando MAXWEL...");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-BR';  // Define a língua para português

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Ouvindo...";
    recognition.start();
});

function takeCommand(message) {
    if (message.includes('max') || message.includes('max')) {
        speak("Fala Gay, como posso ajudar?");
    } else if (message.includes("abrir google")) {
        window.open("https://google.com", "_blank");
        speak("Abrindo o pai dos burro o Google...");
    } else if (message.includes("abrir GPT")) {
        window.open("https://chatgpt.com", "_blank");
        speak("Abrindo o todo poderoso GPT...");
    }else if (message.includes("abrir Faesa")) {
            window.open("https://faesa.grupoa.education/plataforma/my-enrollments/courses", "_blank");
            speak("Abrindo Faesa Nessa Porra, preciso estudar também...");
    } else if (message.includes("abrir youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Abrindo Youtube...");
    } else if (message.includes("abrir whatsApp")) {
        window.open("https://web.whatsapp.com/", "_blank");
        speak("Abrindo Youtube...");
    } else if (message.includes("abrir facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Abrindo Facebook...");
    } else if (message.includes('o que é') || message.includes('quem é') || message.includes('o que são')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "Isso é o que encontrei na internet sobre " + message;
        speak(finalText);
    } else if (message.includes('wikipedia')) {
        window.open(`https://pt.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        const finalText = "Isso é o que encontrei na Wikipedia sobre " + message;
        speak(finalText);
    } else if (message.includes('hora')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "A hora atual é " + time;
        speak(finalText);
    } else if (message.includes('data')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = "A data de hoje é " + date;
        speak(finalText);
    } else if (message.includes('calculadora')) {
        window.open('Calculator:');
        const finalText = "Abrindo Calculadora";
        speak(finalText);
    } else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "Encontrei algumas informações sobre " + message + " no Google";
        speak(finalText);
    }
}
