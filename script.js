document.addEventListener('DOMContentLoaded', () => {
    const jokeDisplay = document.getElementById('jokeDisplay');
    const generateButton = document.getElementById('generateButton');
    let currentAudio = null; // Для остановки предыдущего звука, если быстро кликают

    // ТВОЙ НОВЫЙ СПИСОК ФРАЗ И ЗВУКОВ
    const jokes = [
        // Старые фразы (для примера, можешь оставить или удалить)
        { text: "Газовый король на троне сидит, от каждого пука земля дрожит!", sound: "audio/fart1.mp3" },
        { text: "О, это не ветер в трубах, это мой кишечник поет серенады!", sound: "audio/fart2.mp3" },
        { text: "Когда желудок зовет, даже самые крепкие двери не устоят.", sound: "audio/fart3.mp3" },
        { text: "Мой пердёж — как хорошее вино, с годами только крепче становится.", sound: "audio/fart4.mp3" },
        { text: "Кто сказал 'гром'? Это просто моя еда решила заговорить.", sound: "audio/fart5.mp3" },
        { text: "Я не порчу воздух, я добавляю ему характер!", sound: "audio/fart6.mp3" },
        { text: "Это не запах, это ароматерапия для смелых.", sound: "audio/fart2.mp3" },
        { text: "Молчаливый, но мощный — вот девиз моего кишечника.", sound: "audio/fart3.mp3" },
        { text: "После таких звуков даже соседи начинают гадать: что это было?", sound: "audio/fart8.mp3" },
        { text: "Мой внутренний мир хочет выйти наружу... с шумом.", sound: "audio/fart5.mp3" },
        { text: "Пусть говорят, что пердёж — это невежливо. Я называю это 'звуковой атакой'!", sound: "audio/fart1.mp3" },
        { text: "Когда душа просит праздника, а желудок — фанфар.", sound: "audio/fart4.mp3" },
        { text: "Не беспокойтесь, это просто моё пищеварение аплодирует обеду.", sound: "audio/fart1.mp3" },
        { text: "Иногда нужно просто отпустить... звук.", sound: "audio/fart10.mp3" },
        { text: "Мой личный симфонический оркестр играет по расписанию.", sound: "audio/fart6.mp3" },

        // НОВЫЕ ФРАЗЫ (20 штук)

        // Общие юмористические фразы (16 штук)
        { text: "Мой кишечник — это барабан, а пердёж — его соло.", sound: "audio/fart1.mp3" },
        { text: "Это не пук, это тихий бунт пищеварения.", sound: "audio/fart12.mp3" },
        { text: "Когда еда решает устроить прощальный салют.", sound: "audio/fart13.mp3" },
        { text: "Слышали? Это моя диета помахала ручкой.", sound: "audio/fart13.mp3" },
        { text: "Не всякий взрыв бывает громким, но каждый оставляет след.", sound: "audio/fart10.mp3" },
        { text: "Это не просто газ, это газовый гимн моего живота.", sound: "audio/fart13.mp3" },
        { text: "Пардон, это был звук загрузки новой идеи.", sound: "audio/fart8.mp3" },
        { text: "Моя еда была очень творческой на выходе.", sound: "audio/fart11.mp3" },
        { text: "Ох, кажется, мой кишечник решил выпустить пар.", sound: "audio/fart7.mp3" },
        { text: "Это был не пердёж, это был эмоциональный выдох.", sound: "audio/fart11.mp3" },
        { text: "Мои внутренние демоны решили постучаться в дверь.", sound: "audio/fart13.mp3" },
        { text: "Иногда даже воздух внутри меня хочет свободы.", sound: "audio/fart10.mp3" },
        { text: "Скромный, но заметный вклад в атмосферу дня.", sound: "audio/fart9.mp3" },
        { text: "Это не я, это моя пищеварительная система передает привет.", sound: "audio/fart10.mp3" },
        { text: "Каждый звук имеет значение, особенно этот.", sound: "audio/fart4.mp3" },
        { text: "Ох, кажется, я только что нарушил тишину Вселенной.", sound: "audio/fart5.mp3" },
        
        // Фразы про мопсиков (2 штуки)
        { text: "Мой пердёж — как мопс: маленький, шумный и очень харизматичный!", sound: "audio/fartmops1.mp3" },
        { text: "Как мопс спит, так и мой кишечник звуки издает: с хрюком и пуком!", sound: "audio/fartmops2.mp3" },

        // Фразы про голубей (2 штуки)
        { text: "Мой пердёж — как голубь на подоконнике: внезапно, громко и оставляе


т след!", sound: "audio/fartg.mp3" },
        { text: "Слышали? Это мой кишечник воркует, как голубь, но немного иначе.", sound: "audio/fartg.mp3" }
    ];

    let lastJokeIndex = -1;

    function generateRandomJoke() {
        let newIndex;
        // Избегаем повторов, если шуток больше одной
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
        // Запускаем звук, отлавливая возможные ошибки (например, если браузер блокирует автопроигрывание)
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