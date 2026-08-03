document.addEventListener('DOMContentLoaded', () => {
    const jokeDisplay = document.getElementById('jokeDisplay');
    const generateButton = document.getElementById('generateButton');
    let currentAudio = null; // Для остановки предыдущего звука, если быстро кликают

    // ТВОЙ НОВЫЙ СПИСОК ФРАЗ И ЗВУКОВ
    const jokes = [
        { text: "Газовый король на троне сидит, от каждого пука земля дрожит!", sound: "audio/fart1.mp3" },
        { text: "О, это не ветер в трубах, это мой кишечник поет серенады!", sound: "audio/fart2.mp3" },
        { text: "Когда желудок зовет, даже самые крепкие двери не устоят.", sound: "audio/fart3.mp3" },
        { text: "Мой пердёж — как хорошее вино, с годами только крепче становится.", sound: "audio/fart4.mp3" },
        { text: "Кто сказал 'гром'? Это просто моя еда решила заговорить.", sound: "audio/fart5.mp3" },
        { text: "Я не порчу воздух, я добавляю ему характер!", sound: "audio/fart6.mp3" }, // Можно повторять звуки
        { text: "Это не запах, это ароматерапия для смелых.", sound: "audio/fart7.mp3" },
        // ... ДОБАВЬ СЮДА ВСЕ СВОИ ФРАЗЫ И ССЫЛКИ НА ЗВУКИ ...
        // Убедись, что файл "fartX.mp3" реально лежит в папке "audio"
    ];

    let lastJokeIndex = -1;

    function generateRandomJoke() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * jokes.length);
        } while (newIndex === lastJokeIndex && jokes.length > 1);
        
        lastJokeIndex = newIndex;
        const selectedJoke = jokes[newIndex]; // Выбираем объект шутки
        
        jokeDisplay.textContent = selectedJoke.text; // Отображаем текст
        
        // Воспроизводим звук
        if (currentAudio) {
            currentAudio.pause(); // Останавливаем предыдущий звук, если есть
            currentAudio.currentTime = 0; // Сбрасываем его
        }
        currentAudio = new Audio(selectedJoke.sound);
        // .catch(e => console.error("Ошибка воспроизведения звука:", e)) - это для отладки, можно убрать
        currentAudio.play().catch(e => console.error("Ошибка воспроизведения звука:", e)); 
        
        // Анимация текста
        jokeDisplay.style.transform = 'scale(0.9)';
        setTimeout(() => {
            jokeDisplay.style.transform = 'scale(1)';
        }, 100);
    }

    generateButton.addEventListener('click', generateRandomJoke);
    generateRandomJoke(); // Генерируем первую шутку при загрузке
});