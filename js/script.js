//VErsion Groupe A

let index = 1;
/*test*/
function next(n,a){
    show(n, index+=a);
}

function current(n,a){
    show(n,index=a)
}

function show(n,a){
    //pour les images
    let imgz = n.parentNode.querySelectorAll("figure"); //Recuperer les images pour cet ensemble
    //remonter ver le parent pour les points
    let dots = n.parentNode.parentNode.querySelectorAll('.dot');//
    let dots_imgz = n.parentNode.parentNode.querySelectorAll("figure");
    if(imgz.length>0){ //si je clique sur Suiv ou Prev
    a>imgz.length?index=1:a //(Ternaire) si le nombre > superieur nb.img -> l'index retourne a 1
    a<1?index=imgz.length:a //(Ternaire) Si le nombre est inferieur a 1 -> l'index retourne au nb_img
    //Cacher toute les images 
    imgz.forEach(function (e){ 
     e.style.display = "none";});
     imgz[index-1].style.display = "block";
    }
    if(dots.length>0){//si je clique sur un des points
        dots.forEach(function (e){
            e.classList.remove("active");//je supprime toute les class "active"
        });
        dots_imgz.forEach(function (a){
            a.style.display="none";
        })
        //Repetition a ameliorer. a (placer dans une fonction)
        dots[index-1].classList.toggle('active');
        dots_imgz[index-1].style.display = "block";
    }

}

setInterval(() => {
    next(document.querySelector('.new'),1)
}, 4000)
