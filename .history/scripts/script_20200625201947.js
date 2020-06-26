function openNav() {
    if (window.innerWidth == 375) {
        document.getElementById("myNav").style.width = "100%";
    } else {
        document.getElementById("myNav").style.width = "30%";
    }

    console.log(window.innerWidth);


}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}