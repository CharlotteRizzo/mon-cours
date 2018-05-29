#Cours de HTML préécole du numérique  

##1 Quelques bases : 

HTML : dynamisme
CSS : style
Javascript : calculs

Le html et le css peuvent être dans un même bloc mais il vaut mieux les séparer
exemple : Unordored list (Type de tag)

##HTML : 
###Sémantique : 
les normes pour écrire le langage : la syntaxe
Une vingtaine de balises les plus utilisées : 
- <p>
- <table>
- <ul> <li>
- title
- head
- body
  -<div> : bloc pour créer des blocs/boites invisibles
  -<span> :
  -<h1> à <h6> : h1 ne peut s'afficher qu'une seule fois, les autres permettent de définir des sections d'importances hierarchisées
  - ul <li>: par déafaut le navigateur met des points
- formulaire : 
  input
  textarea
  select liste de selections
  button : boutons
 -balises d'emphase : 
  - em : séparer un mos dans un phrase 
  - strong : mise en gras : utilisé à l'interieur de balise (balise de type inline)
  -<br> : balise orpheline qui permet d'aller à la ligne
- balise de liens : 
  -<a> : ancre se déplacer dans différentes parties de la page 
  -<a href="Link"> dans la balise - possible de mettre des attributs : 
    target,
    title (l'infobulle) 
    id : identifier pour mettre un style avec CSS
- tableau (les tableaux sont de moins en moins utilisés car peu responsive et moins utils - les mailset les newslettre sont coés en tableaux
  - <table>
    -<tbody>
    -<tr> créer une ligne (table raw)
    -<th> créer une colonne
    -<td> data cellule dans chaque tableau
    -<thead> entete du tableau
    -<tfoot>
  - objets html5 - à l'interieur de body on écrit les objets - par exemple pour un blog ou un site (attention poru etre référencé c'est le contenu qui compte 
    - nav
    - header
    - section
    - article
    - aside (side bar)


Html 5 : simplifié, nouvelles balises structurantes, des fonctionnalités nouvelles (accès a des nouvelles normes) 
html 5 api : api en javascript
(B, I, u ne sont plus utilisé puisque le CSS permet de créer le style)


### Normes d'une page web : 
- <!doctype html> : historique pour dire que le code est en html
< html lang>
- <head> : la partie qui va cherche les informations : 
    - du CSS (positionner, donner de la couleur <link ...> 
    - et d javascript le coté dynamique pour gérer les changements de page par exemple : < script ...>
- <body> : <header> <p> <footer> <div> <span>

ce qu'on peut y mettre : texte, video, 

##CSS
Le css permet de modifier les styles par défaut. les styles par défaut sont définis par chaque navigateur

cascading style sheet
déclarer et aller chercher le fichier dans le 
<link href="style.css" rel="stylesheet"/>

p{
color:redj
}
tous les éléments de texte qui sont à l'interieur du paragraphe seront aussi rouge (


span-red  // le selecteur attribut classe qui s'appelle span-blue
{ 
color: red;
font-weight : bold;;
font-saze : 32px// propriété
}
Dans le html : <p class=span-red> </p>

Attention, les éléments en css ont des poids différents. L'ordre de déclaration dans le CSS permet de prioriser des selectoor 


##Editeurs de code : 
- Atom
les fichier enregistrés en local avec atom peuvent être ouvert et compilés directement dans le navigateurs
- js fidle
- Codepen.io
Dans codepen : il n'est pas nécessaire d'ajouter le head, le code s'écrit directement avec les head.
- les fichiers stockés sur gitHub pevent être compilé dans rawgit
- htmleditor.tools 

##cours en ligne
- apprendre-html.3wa.fr
- doc mozilla : https://developer.mozilla.org/fr/docs/Apprendre/HTM 
- https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwjS-Kb50avbAhWlK8AKHfLVAXUQFggoMAA&url=https%3A%2F%2Fopenclassrooms.com%2Fcourses%2Fapprenez-a-creer-votre-site-web-avec-html5-et-css3&usg=AOvVaw1J3ajbrbMLxW0RJ9nOuj40
- validateur W3C : uniquement pour le html et CSS
