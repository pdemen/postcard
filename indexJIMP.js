// let Jimp = require("jimp");

// адресат - 12pt/14pt bold
// обращение - 21pt/25pt
// текст - 16pt/22pt
// текст наш - 12pt/14pt

function textOnPostcard (filenameIN, personName, textPostcard) {
  let filenameOUT = 'image/postcard/postcard.jpg';
  let loadedImage;
  let footerText = 'Вы держите в руках самый Большой и Настоязий подарок: теплу. и искреннюю благодарнрсть' +
    ' от маленького пациента, который ведет борьбу с тяжелым недугом. Именно ему Вы с нашей помощью передали огромную ' +
    'ценность - шанс на выздоровление. Фонд "Подари жизнь" помогает детям с тяжелыми онкогематологическими заболеваниями. И ' +
    'благодаря Вашей поддержке мы имеем возможность помогать детям лечиться, а врачам лечить. Спасибо Вам!';

  Jimp.read(filenameIN)
    .then((image) => {
      loadedImage = image;
      return Jimp.loadFont('font/font/font.fnt');
    })
    .then((font) => {
      loadedImage.print(font, 306, 588, personName)
        .print(font, 142, 695, textPostcard, 705)
        .print(font, 96, 1137, footerText, 609)
        .write(filenameOUT);
    })
    .catch((err) => {
      console.error(err);
    });

  // Jimp.read(filenameOUT)
  //   .then((image) => {
  //     loadedImage = image;
  //     return Jimp.loadFont('font/font/font.fnt');
  //   })
  //   .then((font) => {
  //     loadedImage.print(font, 142, 695, textPostcard, 705)
  //       .write(filenameOUT);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });
  //
  // Jimp.read(filenameOUT)
  //   .then((image) => {
  //     loadedImage = image;
  //     return Jimp.loadFont('font/font/font.fnt');
  //   })
  //   .then((font) => {
  //     loadedImage.print(font, 96, 1137, footerText, 609)
  //       .write(filenameOUT);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });

}
let textPostcard = 'Вы держите в руках самый Большой и Настоязий подарок: теплу. и искреннюю благодарнрсть' +
  ' от маленького пациента, который ведет борьбу с тяжелым недугом. Именно ему Вы с нашей помощью передали огромную ' +
  'ценность - шанс на выздоровление. Фонд "Подари жизнь" помогает детям с тяжелыми онкогематологическими заболеваниями. И ' +
  'благодаря Вашей поддержке мы имеем возможность помогать детям лечиться, а врачам лечить. Спасибо Вам!';

let name = 'Дорогой Иван Иванович!';

textOnPostcard('image/postcard1.jpg', name, textPostcard);
