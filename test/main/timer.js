// Установите начальное время в 1 минуту и 15 секунд (75 секунд)
let timeLeft = 74;

function updateTimer() {
    if (timeLeft <= 0) {
        // Если время истекло, выведите сообщение
        document.getElementById("timer-display").innerHTML = "Время истекло!";
        // clearInterval(timerInterval); // Остановите таймер


        
        // Найдите элементы по их классам и удалите их
        // const idCodeElement = document.querySelector('.ID_Code');
        // const qrCodeElement = document.querySelector('.QR');
        // if (idCodeElement) {
        //     idCodeElement.parentNode.removeChild(idCodeElement);
        // }
        // if (qrCodeElement) {
        //     qrCodeElement.parentNode.removeChild(qrCodeElement);
        // }




        // Найдите элемент <div> с классом "ID_Code"
        const idCodeDiv = document.querySelector('div.ID_Code');

        if (idCodeDiv) {
            // Измените содержимое элемента
            idCodeDiv.textContent = "#-none";
        }

        // Найдите элемент изображения по его классу
        const qrImage = document.querySelector('img.QR');

        if (qrImage) {
            // Измените src атрибут
            qrImage.src = 'QR.jpeg';
        }

    } else {
        // Иначе обновите отображение таймера
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;

        // Форматируйте вывод таймера с двумя знаками для минут и секунд
        const displayText = `осталось: ${minutes.toString().padStart(2, '0')} мин ${seconds.toString().padStart(2, '0')} секунд <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
            d="M11.9298 5.75488L11.6964 5.82516L2.37593 8.92309L0.256836 9.61621L1.49086 10.0083V16.4808C1.04572 16.7375 0.745227 17.2057 0.745227 17.7531C0.745227 18.1455 0.902342 18.5218 1.18201 18.7992C1.46168 19.0767 1.84099 19.2325 2.2365 19.2325C2.63201 19.2325 3.01132 19.0767 3.29098 18.7992C3.57065 18.5218 3.72777 18.1455 3.72777 17.7531C3.72777 17.2057 3.42728 16.7375 2.98213 16.4808V10.5187L4.4734 11.0032V14.7942C4.4734 15.4008 4.84622 15.9038 5.28913 16.2515C5.73203 16.5969 6.28231 16.841 6.94295 17.06C8.2657 17.4964 10.009 17.7531 11.9298 17.7531C13.8505 17.7531 15.5938 17.4972 16.9166 17.0592C17.5772 16.841 18.1275 16.5969 18.5704 16.2507C19.0133 15.9038 19.3861 15.4008 19.3861 14.7942V11.0032L21.4836 10.3093L23.6027 9.61621L21.4828 8.92235L12.1624 5.82516L11.9298 5.75488ZM11.9298 7.30459L18.9201 9.61621L11.9298 11.9278L4.93942 9.61621L11.9298 7.30459ZM5.96467 11.5121L11.6971 13.4073L11.9298 13.4768L12.1631 13.4065L17.8948 11.5114V14.7942C17.8948 14.8016 17.8978 14.8874 17.6615 15.0716C17.4258 15.2566 17.0031 15.4896 16.4498 15.673C15.3448 16.0377 13.7155 16.2737 11.9298 16.2737C10.144 16.2737 8.51474 16.0384 7.40897 15.6723C6.8572 15.4896 6.43368 15.2558 6.19806 15.0716C5.96094 14.8867 5.96467 14.8016 5.96467 14.7942V11.5114V11.5121Z"
            fill="#B93634" />
    </svg>`;
        document.getElementById("timer-display").innerHTML = displayText;

        // Уменьшите оставшееся время на 1 секунду
        timeLeft--;
    }
}

// Обновляйте таймер каждую секунду
setInterval(updateTimer, 1000);