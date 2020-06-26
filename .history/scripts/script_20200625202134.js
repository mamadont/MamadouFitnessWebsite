function openNav() {
    if (window.innerWidth <= 1280) {
        document.getElementById("myNav").style.width = "100%";
    } else {
        document.getElementById("myNav").style.width = "20%";
    }

    console.log(window.innerWidth);

}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}