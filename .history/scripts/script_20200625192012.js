function openNav() {

    if (window.matchMedia("(max-width: 300px)")) {
        document.getElementById("myNav").style.width = "100%";
    } else {
        document.getElementById("myNav").style.width = "30%";
    }

}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}