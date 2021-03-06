const mail = {
  footer: 'Ez egy automatikus levél. Kérlek ne válaszolj rá!',
  link: 'JW Management megnyitása',
  accountCreated: {
    subject: 'JW Management fiók létrehozva!',
    headline: 'Üdvözlet!',
    hello: 'Üdvözlünk!',
    text1: 'Szeretnénk elmondani, hogy léthoztunk egy fiókot a részedre  a JW Management-ben. Beállíjuk neked a felhasználóneved és a jelszavad, kérjük kattints az alábbi gombra.',
    text2: 'Probléma esetén kérjük, bátran forduljon hozzánk.<br>Kivánjuk hogy leld örömöd  JW Management-ben miközben hasznákod.<br> A testvéreid: JW Management készítői',
    button: 'Kezdjünk bele!'
  },
  teamCancellation: {
    subject: 'Csoport törlés',
    headline: 'A Csoport törölve lett.',
    hello: 'Üdvözlünk!',
    text: 'Sajnálattal értesítünk, hogy a Csoport beosztás ami <b>{{date}}</b> <b>{{time}}</b> -ra (-re) volt bejegyezve <u> törölve lett. </ u>.',
    missingParticipant: 'Egy résztvevő hiányzik. Ha van elég résztvevő (párod), a csoportmunkát újra létrehozhatod.'
  },
  confirmation: {
    subject: 'Új kérelem jóváhagyva',
    headline: 'A kérésed jóvá lett hagyva!',
    hello: 'Üdvözlünk!',
    text1: 'A kérésed a következő időszakban jóvá lett hagyva:',
    datetime: '{{date}} from {{time}}'
  },
  declined: {
    subject: 'A kérés nincs jóváhagyva!',
    headline: 'A kérésed nem lett jóváhagyva!',
    hello: 'Üdvözlünk!',
    text1: 'A kérésed a következő időszakban nem lett jóvá hagyva:',
    text2: 'Köszönjük szépen a kérésed (felajánlásod)!',
    datetime: '{{date}} from {{time}}'
  },
  reversal: {
    subject: 'Lemondás',
    hello: 'Üdvözlünk!',
    text1: 'Töröltük csoportmunkádat a következő időpontban:',
    datetime: '{{date}} from {{time}}'
  },
  teamUpdate: {
    subject: 'Csoport változás',
    _changed: 'Megváltozott.',
    changed: {
      participant: 'A résztvevő',
      time: 'az idő',
      location: 'A helyszín',
      leader: 'A Csoport felelőse'
    },
    hello: 'Üdvözlünk!',
    text1: 'Téged válásztottak a csoportba vagy te lettél a csoport felelőse, ezért a következő tájékoztatást szeretnénk adni a változásokról a csoportmunkában:',
    text2: 'Itt láthatod a jelenlegi információkat a csoportról:',
    datetime: '{{date}} from {{time}} időponban'
  },
  understaffed: {
    subject: 'Csoport létszámhiány',
    headline: 'A csoport létszámhiányos',
    hello: 'Üdvözlünk!',
    text1: 'a következő csoport létszámhiányos és szüksége van egy',
    text2: 'Kérünk, tekintsd meg, hogy tudnál e segíteni a csoportban a következő időpontban:',
    datetime: '{{date}} from {{time}}'
  },
  resetPassword: {
    subject: 'Jelszó visszaállítása',
    headline: 'Jelszavad visszaállítása',
    text1: 'Üdvözlünk!,<br> Kérlek kattints a következő gombra az új jelszavad megadásához:',
    button: 'Jelszó visszaállítás',
    text2: '<p>Hasznos tudnivalók a biztonságos jelszó generálásához a következő linken található  <a href="http://wol.jw.org/hu/wol/d/r17/lp-h/102001451#h=1:0-11:0">g01 6/22 p. 31</a></p><p>Ha nem kértél jelszó visszaállítást, nyugodtan töröld ezt az üzenetet. </ P>'
  }
}

export default mail
