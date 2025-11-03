<h1><code>Module 323</code> - Programmer de manière fonctionnelle</h1>

# Formative F01 - Entraînement à la programmation fonctionnelle

## Objectifs

- S'entraîner à la programmation fonctionnelle.
- Se préparer à l'évaluation sommative.

## Rapports à produire

Dans le fichier [f01-data.js](/src/f01-data.js) vous disposez, directement au format JSON, d'une extraction des achats réalisés à la cafétéria de l'EMF par ses clients utilisant un badge.

Vous allez devoir filtrer, réduire et ne prendre que la partie nécessaire de ces données qui correspondent à une liste de demandes spécifiques.

>[!TIP]
>**N.B.** : Observez les noms des rapports à produire (libellés sur les boutons). Ils vous indiquent clairement si vous devez retourner un tableau [] ou un objet {}.

Les rapports à produire :

- [Utilisation de `reduce()` seul](#utilisation-de-reduce-seul)
  - [Rapport A01 - La plus petite et la plus grande date](#rapport-a01---la-plus-petite-et-la-plus-grande-date)
  - [Rapport A02 - Le chiffre d'affaire quotidien moyen](#rapport-a02---le-chiffre-daffaire-quotidien-moyen)
  - [Rapport A03 - Liste des clients par id](#rapport-a03---liste-des-clients-par-id)
  - [Rapport A04 - Liste des clients et leur CA](#rapport-a04---liste-des-clients-et-leur-ca)
  - [Rapport A05 - CA et nbre de ventes par jour de la semaine](#rapport-a05---ca-et-nbre-de-ventes-par-jour-de-la-semaine)
  - [Rapport A06 - CA par type de produit](#rapport-a06---ca-par-type-de-produit)
  - [Rapport A07 - Types de produits et leur produits](#rapport-a07---types-de-produits-et-leur-produits)
  - [Rapport A08 - Nbre de vente des produits par type](#rapport-a08---nbre-de-vente-des-produits-par-type)
- [Utilisation de `map()` et `flat()`](#utilisation-de-map-et-flat)
  - [Rapport A09 - toutes les ventes réalisées](#rapport-a09---toutes-les-ventes-réalisées)
- [Utilisation de tous les opérateurs sauf les boucles](#utilisation-de-tous-les-opérateurs-sauf-les-boucles)
  - [Rapport A10 - le TOP 6 des produits générant le plus de CA](#rapport-a10---le-top-6-des-produits-générant-le-plus-de-ca)
  - [Rapport A11 - La liste des clients, triée par nom puis par prénom](#rapport-a11---la-liste-des-clients-triée-par-nom-puis-par-prénom)
  - [Rapport A12 - Les dates et leur chiffre d'affaire, de la meilleure à la pire](#rapport-a12---les-dates-et-leur-chiffre-daffaire-de-la-meilleure-à-la-pire)

### Utilisation de `reduce()` seul

N.B. ⚠️ Vous n'avez pas le droit d'utiliser les boucles comme `foreach()` ‼️

#### Rapport A01 - La plus petite et la plus grande date

⚠️ Votre code doit utiliser la méthode `reduce()` pour faire cela ‼️

À partir des données déjà chargées dans `jsonData`, vous devez obtenir ceci :

```json
{
   "dateMin": "2024-09-02",
   "dateMax": "2024-12-31"
}
```

#### Rapport A02 - Le chiffre d'affaire quotidien moyen

⚠️ Votre code doit utiliser la méthode `reduce()` pour faire cela ‼️

À partir des données déjà chargées dans `jsonData`, vous devez obtenir la moyenne demandée:

>[!TIP]
>La somme de toutes les ventes réalisées divisé par le nombre de journées distinctes.

```json
118.20344827586193
```

#### Rapport A03 - Liste des clients par id

⚠️ Votre code doit utiliser la méthode `reduce()` pour faire cela ‼️

À partir des données déjà chargées dans `jsonData`, vous devez obtenir les information suivantes :

```json
{
   "ID2108DF8A-37B5AB5A": {
      "nom": "Terrieur",
      "prenom": "Alex"
   },
   "ID12D7310B-3972B953": {
      "nom": "Terrieur",
      "prenom": "Alain"
   },
   "ID1C4E8094-30849278": {
      "nom": "Ternet",
      "prenom": "Alain"
   },
   "ID3A3D49B6-21F77D0C": {
      "nom": "Friedli",
      "prenom": "Paul"
   },
   "ID09F6B523-042C8280": {
      "nom": "Nissens",
      "prenom": "Remy"
   },
   "ID1529E3C7-1A2CDD50": {
      "nom": "Fice",
      "prenom": "Eddy"
   },
   "ID38D4C392-0FB4B1D9": {
      "nom": "d'Œuf",
      "prenom": "John"
   },
   "ID0BAA34BE-15694812": {
      "nom": "Haroni",
      "prenom": "Mac"
   },
   "ID289F8B35-39C65DB1": {
      "nom": "Galley",
      "prenom": "Philippe"
   },
   "ID188020B2-1C54920C": {
      "nom": "Célère",
      "prenom": "Jack"
   },
   "ID11CEAC28-34EE910C": {
      "nom": "Voyante",
      "prenom": "Claire"
   },
   "ID29AFF6B4-36813BA8": {
      "nom": "Rique",
      "prenom": "Théo"
   },
   "ID2141229C-0B0CBFB0": {
      "nom": "Tariste",
      "prenom": "Guy"
   }
}
```

#### Rapport A04 - Liste des clients et leur CA

⚠️ Votre code doit utiliser la méthode `reduce()` pour faire cela ‼️

>[!TIP]
>À la fin, la méthode `Object.values(unObjet)` vous permettra de transformer votre objet en un tableau ne contenant que les valeurs face aux clé ;-)

À partir des données déjà chargées dans `jsonData`, vous devez obtenir les information suivantes :

```json
[
   {
      "id": "ID2108DF8A-37B5AB5A",
      "nom": "Terrieur",
      "prenom": "Alex",
      "ca": 731.9000000000001
   },
   {
      "id": "ID12D7310B-3972B953",
      "nom": "Terrieur",
      "prenom": "Alain",
      "ca": 756.8999999999999
   },
   {
      "id": "ID1C4E8094-30849278",
      "nom": "Ternet",
      "prenom": "Alain",
      "ca": 813.6999999999998
   },
   {
      "id": "ID3A3D49B6-21F77D0C",
      "nom": "Friedli",
      "prenom": "Paul",
      "ca": 909.2
   },
   {
      "id": "ID09F6B523-042C8280",
      "nom": "Nissens",
      "prenom": "Remy",
      "ca": 795.0999999999998
   },
   {
      "id": "ID1529E3C7-1A2CDD50",
      "nom": "Fice",
      "prenom": "Eddy",
      "ca": 834.1999999999999
   },
   {
      "id": "ID38D4C392-0FB4B1D9",
      "nom": "d'Œuf",
      "prenom": "John",
      "ca": 787.3999999999997
   },
   {
      "id": "ID0BAA34BE-15694812",
      "nom": "Haroni",
      "prenom": "Mac",
      "ca": 828.6000000000001
   },
   {
      "id": "ID289F8B35-39C65DB1",
      "nom": "Galley",
      "prenom": "Philippe",
      "ca": 866.7999999999998
   },
   {
      "id": "ID188020B2-1C54920C",
      "nom": "Célère",
      "prenom": "Jack",
      "ca": 667.1999999999996
   },
   {
      "id": "ID11CEAC28-34EE910C",
      "nom": "Voyante",
      "prenom": "Claire",
      "ca": 684.5
   },
   {
      "id": "ID29AFF6B4-36813BA8",
      "nom": "Rique",
      "prenom": "Théo",
      "ca": 852.1999999999998
   },
   {
      "id": "ID2141229C-0B0CBFB0",
      "nom": "Tariste",
      "prenom": "Guy",
      "ca": 756
   }
]
```

#### Rapport A05 - CA et nbre de ventes par jour de la semaine

⚠️ Votre code doit utiliser la méthode `reduce()` pour faire cela ‼️

>[!TIP]
>Pour identifier le nom du jour de la semaine à partir d'une date, utilisez la formule suivante : `new Date(unedate).getDay()`. Cette formule vous retournera un nombre de 0..6 correspondant à "lundi".."dimanche".

À partir des données déjà chargées dans `jsonData`, vous devez obtenir les information suivantes :

```json
{
   "lundi": {
      "ca": 2233.2,
      "nbre_ventes": 229
   },
   "mardi": {
      "ca": 2180.000000000001,
      "nbre_ventes": 239
   },
   "mercredi": {
      "ca": 1807.6000000000004,
      "nbre_ventes": 214
   },
   "jeudi": {
      "ca": 2200.0000000000005,
      "nbre_ventes": 233
   },
   "vendredi": {
      "ca": 1862.8999999999999,
      "nbre_ventes": 212
   }
}
```

#### Rapport A06 - CA par type de produit

⚠️ Votre code doit utiliser la méthode `reduce()` pour faire cela mais peut s'aider d'autres méthodes comme `flatMap` ‼️

À partir des données déjà chargées dans `jsonData`, vous devez obtenir les information suivantes :

```json
{
   "Fruits": 281.5,
   "Boisson énergisante": 490,
   "Salades": 653.0000000000003,
   "Boisson froide": 1582.6999999999975,
   "Boisson chaude": 1285,
   "Plats chauds": 2572.5,
   "Produits laitiers": 333.6000000000003,
   "Sandwich": 1170.8999999999965,
   "Viennoiserie": 415,
   "Pâtisseries & desserts": 535.5,
   "Biscuits": 549,
   "Snacks": 414.9999999999993
}
```

#### Rapport A07 - Types de produits et leur produits

⚠️ Votre code doit utiliser la méthode `reduce()` pour faire cela mais peut s'aider d'autres méthodes comme `flatMap` ‼️

À partir des données déjà chargées dans `jsonData`, vous devez obtenir les information suivantes :

```json
{
   "Fruits": [
      "Poire",
      "Banane",
      "Pomme"
   ],
   "Boisson énergisante": [
      "Monster Energy, cannette 300ml",
      "Red Bull, cannette 250ml"
   ],
   "Salades": [
      "Salade de pâtes",
      "Salade césar"
   ],
   "Boisson froide": [
      "Eau minérale plate 3dl",
      "Jus de pommes 3dl",
      "Eau minérale gazeuse 3dl",
      "Thé-froid citron maison sans sucre 4dl",
      "Coca-cola 3dl",
      "Thé-froid citron 3dl",
      "Thé-froid pêche 3dl",
      "Coca-cola zéro 3dl"
   ],
   "Boisson chaude": [
      "Café",
      "Cappuccino",
      "Espresso",
      "Latte macchiato",
      "Chocolat chaud",
      "Thé"
   ],
   "Plats chauds": [
      "Plat du jour chaud avec viande",
      "Plat du jour chaud avec pâtes ou riz",
      "Plat du jour chaud végétarien"
   ],
   "Produits laitiers": [
      "Briquette de lait UHT de 250ml",
      "Morceau de Gruyère AOP surchoix 100g"
   ],
   "Sandwich": [
      "Sandwich poulet/curry",
      "Sandwich jambon/beurre",
      "Sandwich jambon/fromage",
      "Sandwich au thon"
   ],
   "Viennoiserie": [
      "Croissant au beurre",
      "Petit-pain au lait",
      "Petit-pain au chocolat"
   ],
   "Pâtisseries & desserts": [
      "Tranche de gâteau aux noix",
      "Tranche de gâteau aux pommes"
   ],
   "Biscuits": [
      "Les bricelets de grand-mère, paquet de 10",
      "Les palets Bretons, paquet de 5"
   ],
   "Snacks": [
      "Cacahouettes",
      "Chips paprika",
      "Sachet de fruits secs",
      "Barre de céréales"
   ]
}
```

#### Rapport A08 - Nbre de vente des produits par type

⚠️ Votre code doit utiliser la méthode `reduce()` pour faire cela mais peut s'aider d'autres méthodes comme `flatMap` ‼️

À partir des données déjà chargées dans `jsonData`, vous devez obtenir les information suivantes :

```json
{
   "Fruits": {
      "Poire": 93,
      "Banane": 79,
      "Pomme": 70
   },
   "Boisson énergisante": {
      "Monster Energy, cannette 300ml": 68,
      "Red Bull, cannette 250ml": 72
   },
   "Salades": {
      "Salade de pâtes": 74,
      "Salade césar": 85
   },
   "Boisson froide": {
      "Eau minérale plate 3dl": 91,
      "Jus de pommes 3dl": 94,
      "Eau minérale gazeuse 3dl": 79,
      "Thé-froid citron maison sans sucre 4dl": 81,
      "Coca-cola 3dl": 75,
      "Thé-froid citron 3dl": 73,
      "Thé-froid pêche 3dl": 69,
      "Coca-cola zéro 3dl": 96
   },
   "Boisson chaude": {
      "Café": 75,
      "Cappuccino": 78,
      "Espresso": 88,
      "Latte macchiato": 89,
      "Chocolat chaud": 81,
      "Thé": 88
   },
   "Plats chauds": {
      "Plat du jour chaud avec viande": 87,
      "Plat du jour chaud avec pâtes ou riz": 87,
      "Plat du jour chaud végétarien": 71
   },
   "Produits laitiers": {
      "Briquette de lait UHT de 250ml": 76,
      "Morceau de Gruyère AOP surchoix 100g": 84
   },
   "Sandwich": {
      "Sandwich poulet/curry": 79,
      "Sandwich jambon/beurre": 84,
      "Sandwich jambon/fromage": 83,
      "Sandwich au thon": 75
   },
   "Viennoiserie": {
      "Croissant au beurre": 92,
      "Petit-pain au lait": 82,
      "Petit-pain au chocolat": 77
   },
   "Pâtisseries & desserts": {
      "Tranche de gâteau aux noix": 82,
      "Tranche de gâteau aux pommes": 71
   },
   "Biscuits": {
      "Les bricelets de grand-mère, paquet de 10": 86,
      "Les palets Bretons, paquet de 5": 97
   },
   "Snacks": {
      "Cacahouettes": 72,
      "Chips paprika": 88,
      "Sachet de fruits secs": 85,
      "Barre de céréales": 70
   }
}
```

### Utilisation de `map()` et `flat()`

#### Rapport A09 - toutes les ventes réalisées

⚠️ Votre code doit utiliser la méthode `map()` et/ou `flat()` pour faire son travail ‼️

À partir des données déjà chargées dans `jsonData`, vous devez obtenir les information suivantes :

```json
[
   {
      "id": "ID9048EEAB-7AC25BB7",
      "type": "Fruits",
      "nom": "Poire",
      "prix": 1
   },
   {
      "id": "ID4DB55AE8-E00E9A5E",
      "type": "Boisson énergisante",
      "nom": "Monster Energy, cannette 300ml",
      "prix": 3.5
   },
   {
      "id": "IDD16AA41D-FDE7F70F",
      "type": "Salades",
      "nom": "Salade de pâtes",
      "prix": 4
   },

...     // 3326 ventes
...     // 3326 ventes
...     // 3326 ventes

   {
      "id": "IDA10F5190-F81799C0",
      "type": "Sandwich",
      "nom": "Sandwich jambon/fromage",
      "prix": 3.8
   },
   {
      "id": "ID44438AF1-588AA0A0",
      "type": "Boisson chaude",
      "nom": "Thé",
      "prix": 2
   },
   {
      "id": "IDE72F6A73-CF2B809C",
      "type": "Boisson froide",
      "nom": "Coca-cola zéro 3dl",
      "prix": 2.5
   }
]
```

### Utilisation de tous les opérateurs sauf les boucles

#### Rapport A10 - le TOP 6 des produits générant le plus de CA

⚠️ Votre code peut tout utiliser sauf les boucles pour faire son travail ‼️

À partir des données déjà chargées dans `jsonData`, vous devez obtenir les information suivantes :

```json
[
   {
      "id": "ID726EC1B7-91D5EEC3",
      "nom": "Plat du jour chaud avec viande",
      "ca": 913.5
   },
   {
      "id": "ID91279676-773EF5BA",
      "nom": "Plat du jour chaud avec pâtes ou riz",
      "ca": 913.5
   },
   {
      "id": "ID6216CE8C-C0255DD8",
      "nom": "Plat du jour chaud végétarien",
      "ca": 745.5
   },
   {
      "id": "IDB0B4FAFD-429B64A5",
      "nom": "Salade césar",
      "ca": 356.99999999999943
   },
   {
      "id": "IDA10F5190-F81799C0",
      "nom": "Sandwich jambon/fromage",
      "ca": 315.4000000000005
   },
   {
      "id": "IDD16AA41D-FDE7F70F",
      "nom": "Salade de pâtes",
      "ca": 296
   }
]
```

#### Rapport A11 - La liste des clients, triée par nom puis par prénom

⚠️ Votre code peut tout utiliser sauf les boucles pour faire son travail ‼️

⚠️ Le nom doit être transformé en majuscules et le prénom doit être transformé la première lettre en majuscules et suivantes en minuscules ‼️

À partir des données déjà chargées dans `jsonData`, vous devez obtenir les information suivantes :

```json
[
   {
      "nom": "CÉLÈRE",
      "prenom": "Jack"
   },
   {
      "nom": "D'ŒUF",
      "prenom": "John"
   },
   {
      "nom": "FICE",
      "prenom": "Eddy"
   },
   {
      "nom": "FRIEDLI",
      "prenom": "Paul"
   },
   {
      "nom": "GALLEY",
      "prenom": "Philippe"
   },
   {
      "nom": "HARONI",
      "prenom": "Mac"
   },
   {
      "nom": "NISSENS",
      "prenom": "Remy"
   },
   {
      "nom": "RIQUE",
      "prenom": "Théo"
   },
   {
      "nom": "TARISTE",
      "prenom": "Guy"
   },
   {
      "nom": "TERNET",
      "prenom": "Alain"
   },
   {
      "nom": "TERRIEUR",
      "prenom": "Alain"
   },
   {
      "nom": "TERRIEUR",
      "prenom": "Alex"
   },
   {
      "nom": "VOYANTE",
      "prenom": "Claire"
   }
]
```

#### Rapport A12 - Le TOP 5 des meilleures dates et leur CA

⚠️ Votre code peut tout utiliser sauf les boucles pour faire son travail ‼️

À partir des données déjà chargées dans `jsonData`, vous devez obtenir les information suivantes :

```json
[
   {
      "date": "2024-10-17",
      "ca": 211.7
   },
   {
      "date": "2024-10-10",
      "ca": 204.80000000000004
   },
   {
      "date": "2024-12-30",
      "ca": 200.4
   },
   {
      "date": "2024-09-19",
      "ca": 196.8
   },
   {
      "date": "2024-10-21",
      "ca": 196.2
   }
]
```

<img src="res/EMF_logo_RVB_Info_long.png" width="25%" style="margin-left:-20px;">
