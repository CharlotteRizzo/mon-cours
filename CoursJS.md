# Cours de Javascript préécole

## voir le javascript d'une page 
clic droit inspecter


## création page html 
on créée le js dans une partie body puis script d'une page html.

le js permet d'activer des choses en dynamique
pour écrire du JS, il n'est pas obligatoire de mettre les ;, mais c'est uen bonne pratique pour éviter de ne pas les mettre dans d'autres langage serveurs type PHP et/ ou Java

## créer une variable
var prénom = "sam" // 
- var = déclaration de la variable
- prénom = le nom de lavariable
- "" = la valeur de la variable avec des "" pour les chaines de caractères, si u chiffre pas besoin de ".

en appelant prénom on trouve "sam"

Créer une variable permet de garder en mémoire une information. Onp eut changer la valeur de la variable.

Pour joindre du texte, variable1 + variable 2

ex: 
var modelDePhrase ="Bonjour je m'appelle: "
var prénom = "sam"

modelDePhrase + prénom
>> "Bonjour je m'appelle: sam"

Si la variable n'est pas défini, un message d'erreur s'affiche

variables
- ifTrue = true (variable prédéfinie en booleen)
- undefined 
- reprendre des types de variable permet de s'assurer que 2 variables sont compatibles : 
(type de variables : string , bolen, text, nombre, etc.undefined etc.)
        var test1 = typeof (var1) ;
        var test2 = typeof (var2) ;
        var test3 = typeof (var3) ;

## console.log : afficher dans la console

<script type="text/javascript">

    var ChampNom = "Prénom de la personne : "
    var prenom = "X"

    console.log(ChampNom + prenom)

    </script>

## Alert(variable)
ouvre une fenetre avec un message d'alerte


## Prompt
permet d'afficher un champ à remplir 
prompt(question)

## confirm
afficher un message 


## incrementation 
+ variable =1
variable =+1
variable ++

## Rappel divers : 
- un framework est une librairie qui permet d'aller chercher des fonctions spécifiques déjà écrite
- le front est la partie visuelle (html et CSS)
- dans une page atom, pour faire apparaitre toutes les lignes du début : taper html + enter
- netlify ou neocities = serveurs d'hébergements gratuits
- pour accéder au fichier en local avec le navigateurs : remettre le chemin dans la barre de 
- dans Atom si il y a le point bleu en haut c'est que ce n'est pas enregistré

- raccourci atom pour affihcer des comm : cmd = shift + /
- modulo = %
`



## Ressources
- https://github.com/js-learning/js-beginner 
- prochains ateliers : créer son portfolio en ligne à partir du 20 juin
- présentation du framework titanium pour dev d'application crossplateformes
