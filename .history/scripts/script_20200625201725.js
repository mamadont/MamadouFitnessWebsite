function openNav() {
    if (window.innerWidth) {
        document.getElementById("myNav").style.width = "30%";
    } else {
        document.getElementById("myNav").style.width = "100%";
    }


}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}