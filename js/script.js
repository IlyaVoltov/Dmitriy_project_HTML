// Ждем, пока весь HTML документ загрузится
document.addEventListener('DOMContentLoaded', function() {

    // Находим форму по её ID
    const contactForm = document.getElementById('appointmentForm');

    // Если форма найдена на странице
    if (contactForm) {
        // Слушаем событие "submit" (отправка)
        contactForm.addEventListener('submit', function(event) {

            // 1. Останавливаем перезагрузку страницы
            event.preventDefault();

            // 2. Достаем данные из полей ввода
            const name = document.getElementById('userName').value;
            const phone = document.getElementById('userPhone').value;
            const specialty = document.getElementById('userSpecialty').value;

            // 3. Выводим красивое уведомление (Имитация работы JS)
            alert('Благодарим вас, ' + name + '! \nВаша заявка на направление "' + specialty + '" принята. \nМы перезвоним вам по номеру ' + phone + ' в течение 15 минут.');

            // 4. Очищаем форму для нового ввода
            contactForm.reset();

            console.log('Заявка от ' + name + ' успешно отправлена');
        });
    }

});