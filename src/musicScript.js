window.onload = function(){
    var song = document.getElementById("mixdown");
    var logo = document.getElementById("Logo");
    logo.onclick = function() {
        song.play();
    }
}