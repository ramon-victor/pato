function changeDuck() {
    if (document.getElementById("pato-gif").src.match("files/pato.gif")) {
        document.getElementById("pato-gif").src = "files/pato2.gif";
    }
    else {
        document.getElementById("pato-gif").src = "files/pato.gif";
    }
}
