function openNav() {
    // Changes width based on the width of the viewport (30% for larger screens, 100% for smaller screens)
    if (window.innerWidth < 1280) {
        document.getElementById("myNav").style.width = "100%";
    } else {
        document.getElementById("myNav").style.width = "20%";
    }

    document.getElementById("main").style.opacity = 0.5
    document.getElementById("myNav").style.opacity = 1

}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("main").style.opacity = 1.0
}