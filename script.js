window.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href="#"]');
  Array.from(links).forEach(link => {
    const pref = link.querySelector('p');
    const map = MAPS[pref.innerText];
    if (map) {
      link.href = map;
    } else {
      console.log(`${pref.innerText}の地図データが見つかりませんでした。`, MAPS);
      link.querySelector('div[id]').style.backgroundColor = '#AAA';
    }
  });
});


const RAW_MAPS = `
北海道	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1Po5y6q9-cVsZ7GY2_D6ZZRuvyMGpjxE&ll=42.649294697236684%2C140.45364525000002&z=9
青森県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1bQfh5cYFsyC-5H8p3Dv69yORc4pIQb8&ll=40.87807570564145%2C141.14684675&z=9
岩手県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1oYIShrDtCiFORmzRnMTMBzLm2fiTP-0&ll=39.91971196803393%2C141.53022995&z=9
秋田県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1OlKNjerUdp5gQlKC0rvyBFWPcjSKBoA&ll=39.73385604975236%2C140.1262527&z=18
宮城県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1ZTkNkXpnvy0pMGg3TU11bgARLAAvZ7c&ll=38.84052544227373%2C141.08053290000007&z=8
山形県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1QB9eL4VZ2hOZJ8-ww2HbK5PPJbkVHqA&ll=38.31311928332171%2C140.4346099&z=18
福島県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1BqL-sZampmYG8NgAdBI3n6B4KenzsTA&ll=37.35271062804276%2C140.40273639999998&z=10
茨城県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=14THCiMBg2vQLKEwXY7mFPxJFVAmkvlw&ll=36.27014881748668%2C140.50280535000005&z=9
栃木県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1iqQx3RbXiGbFkbN72s5HNLE7rhh5mSU&ll=37.09828218350481%2C140.0010725&z=18
群馬県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1wU5oNren_mc0oNh6nc8UQdYsdPYnOz8&ll=36.55040177559503%2C139.37293709999997&z=18
埼玉県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1UKnwFnZNrCmjJkRstycbtlniksqru0A&ll=35.94401223648208%2C139.28655885&z=11
千葉県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1n8KqNwke0jXLwHFmDS4TdMIunbCpSg0&ll=35.39170219808454%2C140.30935895000005&z=9
東京都	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1v0cNigxarvTuGr7DzIsBd3F6q0pKBsY&ll=35.69858160162444%2C139.7926743663561&z=13
神奈川県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1qc5DBxH3a96pXUa1YA39ldaiSbRtfDc&ll=35.34524945550467%2C139.2718546&z=11
新潟県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1A3AlKP0i8JFsDS1ReaQrB5WIBSYiWlQ&ll=37.80919236006261%2C139.19416624999997&z=9
富山県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1gtonuVrAHpiRHpjuAY95ep12Rv7TcEs&ll=36.5572449977637%2C137.06865725000006&z=11
石川県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=14yyWwX2X2zrDHJv7LftcWCDhgmdI1Ks&ll=36.56194188359511%2C136.6519359&z=18
福井県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1blQFt6G2o5EnD_wwqWTJpoabSjFxjBA&ll=35.79610632614759%2C135.98571575&z=10
山梨県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1YHVO3HPq1uCvdjSAWru8-1JxIYg8oEg&ll=35.534712883784074%2C138.7777561&z=18
長野県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1iOokR99_yPxGpsUQthrhtAa7UAH10Cc&ll=36.48497039313284%2C138.23297194999998&z=10
岐阜県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1hfKOvMLOHLI-904Qyt5PDKLPfKK2UI0&ll=35.778630887001704%2C137.15295545000004&z=10
静岡県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=188no-ftAjD2i-Q7kotD5IME0yG7kBnCx&ll=34.816930482795854%2C138.4943978&z=10
愛知県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=15vSYJm4oAjKNWKMDI7ScmNKnsRTOTuM&ll=35.122880831870575%2C136.93811194999998&z=10
三重県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1De5reBrJsCNsi3hJhpDn2z85wjU93RQ&ll=34.78980659305612%2C136.419712&z=10
滋賀県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1jd__Hdh1aLqF8PlpJzppbO-XULCoCrg&ll=35.07971500294741%2C136.07052350000004&z=9
京都府	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=11P1eJrmOFjvoRumkTJqG99p6lHejW9A&ll=35.20417024030061%2C135.5147009&z=12
大阪府	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1AdIZACIg5qQwrzThk8cuXmAMNhqwr3M&ll=34.68339116921695%2C135.50222295000003&z=14
兵庫県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1XcV-xCYGWra65YbQZ1jBS6URTgopzHg&ll=35.1127853352592%2C134.8310059&z=9
奈良県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1nskJJiYurF66tE0DP2ueQzGkRjcFqVM&ll=34.60121620165518%2C135.97461575&z=11
和歌山県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1jeh7lvT3igcQpxpy8OGGfMNRKGPEJdk&ll=33.618025847820064%2C135.57333585&z=12
鳥取県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1d1Icj7VSDLIV7hbLoDKKU3VmMXNOsp4&ll=35.33175815395434%2C133.52961615&z=10
島根県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1Kx4DBbrNtUio3qggsowuckZl0DGifKY&ll=35.36788124740187%2C133.00259925&z=10
岡山県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1EyB9BLCIJ3beJckLeNINVKuDaWwYGE8&ll=34.638918744425595%2C133.9520127&z=13
広島県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=10cPwbi_cEwDDFof9kYv4wFOttY04a2U&ll=34.336945630439644%2C132.71221665000002&z=11
山口県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1sL_pzyt1Z6eTHKNsZSDqc5ZZIeamCb0&ll=34.41970148401275%2C131.0626655&z=18
徳島県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1MddlnfpKu6qdyXkHhHEQzIV4VN3hWmg&ll=34.04292653930738%2C133.95355884999998&z=12
香川県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1jI4JWNCD8Rp2xy8NpMgUh6uGFXymrlE&ll=34.16082901974916%2C133.654871&z=18
愛媛県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1y_tRT53p3VbRjk8CarZFFqnYugkP91k&ll=33.587063543460445%2C132.8525545&z=9
高知県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1rjzp3sRWPQuhzePg61VjuhO1yqP9Bdg&ll=33.10411688468248%2C133.39865329999998&z=9
福岡県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1iRHe8pgmHmwf7fwhZHD5AZPls4sRPz9D&ll=33.47710150882733%2C130.8895189&z=9
佐賀県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1iRBumoND_eKK_0zzkqkvf9E1I6TqNbk&ll=33.08102348431928%2C130.1090007&z=18
長崎県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1faAzNuemUttLtKA87GFRPfXpy0ZFZDw&ll=33.10125746575787%2C129.77471535&z=13
熊本県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1LEt0BbP4nByr3FfLMH9Idg-G67aelDc&ll=32.98352278434292%2C130.81432759999998&z=18
大分県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1JiSGP9kQ72kps0uHZC2wy90_ki0zkfc&ll=33.02694402817901%2C131.60778419999997&z=12
宮崎県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1qXq9C1-Wf9hargZuFqXemtdYFk7T98Y&ll=32.19015244864129%2C131.212327&z=9
鹿児島県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1TM3U4wyXw1wrJPwjS9LXzkGKEAerNrk&ll=31.58127479550831%2C130.35830475&z=9
沖縄県	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1ggM4HtRlZ9_tC9HInFnS49easdq5u5g&ll=26.502018101356285%2C128.0129047&z=13
足立区	https://www.google.com/maps/d/u/0/edit?hl=ja&mid=1nf6b4vufeZgh_nX4gajujMzN4VEZ2D0&ll=35.78007398008128%2C139.79556535&z=13
`;

const MAPS = RAW_MAPS.split(/[\n\r]+/)
  .map(line => line.trim())
  .filter(line => line.length)
  .map(line => line.split(/\s/))
  .reduce((maps, line) => {
    const name = line[0];
    const shortName = name.replace(/(県|都|府)$/, '');
    maps[shortName] = line[1];
    return maps;
  }, {})