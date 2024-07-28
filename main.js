function muestra_oculta(id) {
    let div = document.getElementById(id);
    if (div.style.display == ""){
        div.style.display = "none";
    }
    else{
        div.style.display = "";
    }
} 