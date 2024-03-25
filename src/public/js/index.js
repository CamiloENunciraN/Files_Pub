
function loadMovie () {
	// body... 
	let div=document.getElementById('contenedor_l');
	let load=`<div class="movie_tittle"><h1>List Movies</h1></div>`;
	for(let i=0;i<listMovies.length;i++){
		load+=`<div class="movie"><a onclick="runMovie('`+listMovies[i].url+`')">`+listMovies[i].name+`</a></div>`;
	}
	div.innerHTML=load;
}

function runMovie (url) {
	let player=document.getElementById('player');
	player.src=url;
	//quito el fondo que se bugea con el reproductor
	var fondo = document.getElementById('contenedor_r');
	fondo.style.backgroundImage = "none";
	//subo al reproductor
	window.scrollTo(0,0);
}

document.getElementById("listMovies").onclick = function() {
 loadMovie();
};