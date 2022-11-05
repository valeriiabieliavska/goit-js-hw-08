
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


 player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });


  const onPlay = function(data) {
        const videoPlayerCurrentTime = data.seconds;
        localStorage.setItem('videoplayer-current-time', videoPlayerCurrentTime);
};

player.on('timeupdate', throttle(onPlay, 1000));


player
    .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
    .then(function (seconds) {})
    .catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                break;

            default:
                break;
        }
    });




    // title true Показать заголовок на видео.

    // библиотека

// =========// Ініціалізуй плеєр у файлі скрипта як це описано в секції pre - existing player,
//     але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.


//     Pre-existing player
// Already have a player on the page? Pass the element to the Vimeo.Player constructor and you’re ready to go.

// <iframe src="https://player.vimeo.com/video/76979871?h=8272103f6e" width="640" height="360" frameborder="0" allowfullscreen allow="autoplay; encrypted-media"></iframe>

// <script src="https://player.vimeo.com/api/player.js"></script>
// <script>
//     const iframe = document.querySelector('iframe');
//     const player = new Vimeo.Player(iframe);

//     player.on('play', function() {
//         console.log('played the video!');
//     });

//     player.getVideoTitle().then(function(title) {
//         console.log('title:', title);
//     });
// </script>


// Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.

// 
// on(событие: строка, обратный вызов: функция):
// Добавьте прослушиватель событий для указанного события. 
// Будет вызывать обратный вызов с одним параметром data,
//     который содержит данные для этого события. 


// const onPlay = function(data) {
//     // data — это объект, содержащий свойства, специфичные для этого события
// };

// player.on('play', onPlay);


// Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".
// Під час перезавантаження сторінки скористайся методом setCurrentTime()
//  з метою відновлення відтворення зі збереженої позиції.

// player.setCurrentTime(30.456).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });

// Додай до проекту бібілотеку lodash.throttle і зроби так, щоб час відтворення оновлювався
//  у сховищі не частіше, ніж раз на секунду.

// getItem(key) - повертає зі сховища значення з ключем key.

// Метод getItem(key) дозволяє прочитати зі сховища запис з ключем key.
// Якщо у сховищі відсутній запис з таким ключем, метод повертає null.
//  Якщо значення - це звичайний рядок, немає потреби його парсити.
