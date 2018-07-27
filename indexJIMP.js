let Jimp = require("jimp");

function textOnPostcard (filenameIN, nameFrom, nameTo, textPostcard) {
  let filenameOUT = 'image/postcard/postcard.jpg';
  let loadedImage;
  let footerText = 'Вы держите в руках самый Большой и Настоящий подарок: теплу. и искреннюю благодарность' +
    ' от маленького пациента, который ведет борьбу с тяжелым недугом. Именно ему Вы с нашей помощью передали огромную ' +
    'ценность - шанс на выздоровление. Фонд "Подари жизнь" помогает детям с тяжелыми онкогематологическими заболеваниями. И ' +
    'благодаря Вашей поддержке мы имеем возможность помогать детям лечиться, а врачам лечить. Спасибо Вам!';

  Jimp.read(filenameOUT)
    .then((image) => {
      loadedImage = image;
      return Jimp.loadFont('font/fontNameFrom/font.fnt');
    })
    .then((font) => {
      loadedImage.print(font, 773, 487, nameFrom, 232)
        .write(filenameOUT);
    })
    .catch((err) => {
      console.error(err);
    });

  Jimp.read(filenameOUT)
    .then((image) => {
      loadedImage = image;
      return Jimp.loadFont('font/fontNameTo/font.fnt');
    })
    .then((font) => {
      loadedImage.print(font, 444, 588, nameTo)
        .write(filenameOUT);
    })
    .catch((err) => {
      console.error(err);
    });

  Jimp.read(filenameOUT)
    .then((image) => {
      loadedImage = image;
      return Jimp.loadFont('font/fontText/font.fnt');
    })
    .then((font) => {
      loadedImage.print(font, 142, 695, textPostcard, 705)
        .write(filenameOUT);
    })
    .catch((err) => {
      console.error(err);
    });

  Jimp.read(filenameOUT)
    .then((image) => {
      loadedImage = image;
      return Jimp.loadFont('font/fontPZ/font.fnt');
    })
    .then((font) => {
      loadedImage.print(font, 96, 1137, footerText, 609)
        .write(filenameOUT);
    })
    .catch((err) => {
      console.error(err);
    });
}
let textPostcard = 'Поздравляю!';
let nameTo = 'Иван Иванович!';
let nameFrom = 'Полина';

textOnPostcard('image/postcard1.jpg', nameFrom, nameTo, textPostcard);
