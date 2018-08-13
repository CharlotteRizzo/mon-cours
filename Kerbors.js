// alert('hello')

//quels sont les derniers utilisateurs d'inventaire qui ont posté un lire public

fetch('http://192.168.43.133:3006/api/items?action=recent-public&limit=15&lang=fr&assert-image=true').then(resultat => {
	//on a tout dans resultat
	return resultat.json();
})

.then(myjson => {

	var Liste=document.getElementById(ListeUtilisateur);		
	
	var user;
	for(user of myjson.users){		
		console.log(user.username);
	var li=document.createElement("li");
	li.appendChild(document.createTextNode(user.username));
	Liste.appendChild(li);
	}
});
	



//aller chercher l'information constitué de 3 informations dans la base
	
//toutes les minutes stocker afficher dans la page 
//effacer la donnée précédente



