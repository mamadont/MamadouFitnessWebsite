function openNav() {
    if (window.innerWidth) {
        document.getElementById("myNav").style.width = "30%";
    } else {
        document.getElementById("myNav").style.width = "100%";
    }

    console.log(window.innerWidth);


}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}