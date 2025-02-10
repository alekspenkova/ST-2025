document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('text-container');
    const texts = ["Обичам те, Любов!"];

    // Функция за създаване на падащ текст
    function createText() {
        const textElement = document.createElement('div');
        textElement.classList.add('text');
        // Избираме случайния текст от масива
        const randomText = texts[Math.floor(Math.random() * texts.length)];
        textElement.textContent = randomText;

        // Случайно местоположение по ширината на екрана
        const leftPosition = Math.random() * 100;  // между 0 и 100%
        textElement.style.left = leftPosition + '%';

        // Добавяме текста в контейнера
        container.appendChild(textElement);

        // Премахваме текста след като анимацията свърши
        setTimeout(() => {
            container.removeChild(textElement);
        }, 5000);  // премахваме след края на анимацията
    }

    // Създаваме ново съобщение всяка 200мс
    setInterval(createText, 200);
});
