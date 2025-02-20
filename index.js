const say = require('say');

function playText(text) {
    say.speak(text, 'Microsoft Zira Desktop', 1.0, (err) => {
        if (err) {
            console.error('Xatolik yuz berdi:', err);
            return;
        }
        console.log('Matn eshittirildi!');
    });
}

playText("Salom, bu avtomatik ovozli eshittirish testi!");
