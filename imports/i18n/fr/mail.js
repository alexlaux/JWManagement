const mail = {
  footer: 'Ceci est un E-mail automatique. Il n’est pas nécessaire d’y répondre.',
  link: 'Ouvrir JW Management',
  accountCreated: {
    subject: 'Compte JW Management créé!',
    headline: 'Bienvenue!',
    hello: 'Bonjour',
    text1: 'Nous vous informons que nous vous avons créé un compte dans JW Management. Vous pouvez définir votre identifiant et votre mot de passe personnel en cliquant sur le bouton ci-dessous.',
    text2: 'En cas de problème, n’hésitez pas à nous contacter.<br>Nous vous souhaitons bien du plaisir dans l\'utilisation de JW Management.<br> Vos frères de JW Management.',
    button: 'C\'est parti!'
  },
  teamCancellation: {
    subject: 'Équipe supprimée.',
    headline: 'L’équipe a été supprimée.',
    hello: 'Bonjour',
    text: 'Malheureusement, nous devions vous informer que votre attribution d’équipe  <b>{{date}}</b> pour le <b>{{time}}</b> a été <u>annulée</u>.',
    missingParticipant: 'Un participant manque. S’il y a suffisamment de participants, l’équipe peut reprendre.'
  },
  confirmation: {
    subject: 'Nouvelle inscription acceptée',
    headline: 'Votre inscription a été acceptée !',
    hello: 'Bonjour',
    text1: 'Votre inscription concernant l’horaire suivant a été acceptée :',
    datetime: '{{date}} à partir de {{time}} o\'clock'
  },
  declined: {
    subject: 'Inscription rejetée.',
    headline: 'Votre inscription a été rejetée.',
    hello: 'Bonjour',
    text1: 'Malheureusement, votre inscription concernant l’horaire suivant a été rejetée:',
    text2: 'Merci beaucoup pour votre inscription !',
    datetime: '{{date}} à partir de {{time}} o\'clock'
  },
  reversal: {
    subject: 'Modifications',
    hello: 'Bonjour',
    text1: 'Vous avez été retiré de l’équipe  ci-dessous :',
    datetime: '{{date}} à partir de {{time}} o\'clock'
  },
  teamUpdate: {
    subject: 'Changement d’équipe',
    _changed: 'Modifié.',
    changed: {
      participant: 'Un participant',
      time: 'La durée',
      location: 'Le lieux',
      leader: 'Le responsable d\'équipe'
    },
    hello: 'Bonjour',
    text1: 'Vous êtes désigné comme membre  ou responsable d’équipe, c’est pour cela que nous vous informons de certains changements dans votre équipe.',
    text2: 'Voici la formation actuel de votre équipe',
    datetime: '{{date}} à partir de {{time}} o\'clock'
  },
  understaffed: {
    subject: 'Équipe en sous-effectif',
    headline: 'L’équipe n’a pas assez de membre',
    hello: 'Bonjour',
    text1: 'L’équipe ci-dessous est en sous-effectif et a besoin d’un',
    text2: 'Auriez-vous la possibilité d’aider cette équipe ?',
    datetime: '{{date}} à partir de {{time}} o\'clock'
  },
  resetPassword: {
    subject: 'Changement de mot de passe',
    headline: 'Changez votre mot de passe',
    text1: 'Bonjour,<br>our changer de mot de passe, veuillez utiliser le lien ci-dessous :',
    button: 'Changer le mot de passe',
    text2: '<p>Des conseils utiles pour générer un mot de passe sécurisé peuvent être trouvés sur <a href="http://wol.jw.org/en/wol/d/r1/lp-e/102001451">g01 6/22 p. 31</a></p><p>Si vous n’avez pas fait de demande de changement de mot de passe, vous pouvez supprimer cette e-mail.</p>'
  }
}

export default mail