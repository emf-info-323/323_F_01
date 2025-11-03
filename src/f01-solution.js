window.addEventListener("load", (event) => {
    document.querySelector('#idActionA1').addEventListener('click', actionA1);
    document.querySelector('#idActionA2').addEventListener('click', actionA2);
    document.querySelector('#idActionA3').addEventListener('click', actionA3);
    document.querySelector('#idActionA4').addEventListener('click', actionA4);
    document.querySelector('#idActionA5').addEventListener('click', actionA5);
    document.querySelector('#idActionA6').addEventListener('click', actionA6);
    document.querySelector('#idActionA7').addEventListener('click', actionA7);
    document.querySelector('#idActionA8').addEventListener('click', actionA8);
    document.querySelector('#idActionA9').addEventListener('click', actionA9);
    document.querySelector('#idActionA10').addEventListener('click', actionA10);
    document.querySelector('#idActionA11').addEventListener('click', actionA11);
    document.querySelector('#idActionA12').addEventListener('click', actionA12);
});

// ---------------------------------------------------------------------------

function afficherObjet(resultat) {
    const container = document.getElementById("output");
    container.innerHTML = JSON.stringify(resultat, null, 3);
}

// ---------------------------------------------------------------------------

function actionA1() {

    const datesMinMax = [
        'Trouver le traitement à réaliser sur jsonData',
        'qui soit en respect de la consigne',
        'qui retourne exactement les données au format souhaité',
        'tout ça en respect des principes de programmation fonctionnelle enseignés !',
        'Bonne chance et have fun 😎 !'
    ];

    afficherObjet(datesMinMax);
}

function actionA2() {

    const caMoyenParJour = [
        'Trouver le traitement à réaliser sur jsonData',
        'qui soit en respect de la consigne',
        'qui retourne exactement les données au format souhaité',
        'tout ça en respect des principes de programmation fonctionnelle enseignés !',
        'Bonne chance et have fun 😎 !'
    ];

    afficherObjet(caMoyenParJour);
}

function actionA3() {

    const clientsUniques = [
        'Trouver le traitement à réaliser sur jsonData',
        'qui soit en respect de la consigne',
        'qui retourne exactement les données au format souhaité',
        'tout ça en respect des principes de programmation fonctionnelle enseignés !',
        'Bonne chance et have fun 😎 !'
    ];

    afficherObjet(clientsUniques);
}

function actionA4() {

    const listeDesClientsEtCA = [
        'Trouver le traitement à réaliser sur jsonData',
        'qui soit en respect de la consigne',
        'qui retourne exactement les données au format souhaité',
        'tout ça en respect des principes de programmation fonctionnelle enseignés !',
        'Bonne chance et have fun 😎 !'
    ];

    afficherObjet(listeDesClientsEtCA);
}

function actionA5() {

    const joursSemaine = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];

    const statsParJour = [
        'Trouver le traitement à réaliser sur jsonData',
        'qui soit en respect de la consigne',
        'qui retourne exactement les données au format souhaité',
        'tout ça en respect des principes de programmation fonctionnelle enseignés !',
        'Bonne chance et have fun 😎 !'
    ];

    afficherObjet(statsParJour);
}

function actionA6() {

    const CAParTypeDeProduit = [
        'Trouver le traitement à réaliser sur jsonData',
        'qui soit en respect de la consigne',
        'qui retourne exactement les données au format souhaité',
        'tout ça en respect des principes de programmation fonctionnelle enseignés !',
        'Bonne chance et have fun 😎 !'
    ];

    afficherObjet(CAParTypeDeProduit);
}

function actionA7() {

    const produitsParTypeSet = [
        'Trouver le traitement à réaliser sur jsonData',
        'qui soit en respect de la consigne',
        'qui retourne exactement les données au format souhaité',
        'tout ça en respect des principes de programmation fonctionnelle enseignés !',
        'Bonne chance et have fun 😎 !'
    ];

    afficherObjet(produitsParTypeSet);
}

function actionA8() {

    const nbVendusParTypeEtProduit = [
        'Trouver le traitement à réaliser sur jsonData',
        'qui soit en respect de la consigne',
        'qui retourne exactement les données au format souhaité',
        'tout ça en respect des principes de programmation fonctionnelle enseignés !',
        'Bonne chance et have fun 😎 !'
    ];

    afficherObjet(nbVendusParTypeEtProduit);
}

function actionA9() {

    const toutesLesVentes = [
        'Trouver le traitement à réaliser sur jsonData',
        'qui soit en respect de la consigne',
        'qui retourne exactement les données au format souhaité',
        'tout ça en respect des principes de programmation fonctionnelle enseignés !',
        'Bonne chance et have fun 😎 !'
    ];

    afficherObjet(toutesLesVentes);
}

function actionA10() {

    const TOP_VALUE = 6;

    const topDesVentes = [
        'Trouver le traitement à réaliser sur jsonData',
        'qui soit en respect de la consigne',
        'qui retourne exactement les données au format souhaité',
        'tout ça en respect des principes de programmation fonctionnelle enseignés !',
        'Bonne chance et have fun 😎 !'
    ];


    afficherObjet(topDesVentes);
}

function actionA11() {

    const clientsTries = [
        'Trouver le traitement à réaliser sur jsonData',
        'qui soit en respect de la consigne',
        'qui retourne exactement les données au format souhaité',
        'tout ça en respect des principes de programmation fonctionnelle enseignés !',
        'Bonne chance et have fun 😎 !'
    ];

    afficherObjet(clientsTries);
}


function actionA12() {

    const TOP_VALUE = 5;

    const listeDesMeilleursCAParDate = [
        'Trouver le traitement à réaliser sur jsonData',
        'qui soit en respect de la consigne',
        'qui retourne exactement les données au format souhaité',
        'tout ça en respect des principes de programmation fonctionnelle enseignés !',
        'Bonne chance et have fun 😎 !'
    ];

    afficherObjet(listeDesMeilleursCAParDate);

}
