// ===============================
// Mobile Hamburger Menu Toggle
// Handles opening & closing of the
// slide-in mobile navigation.
// ===============================

function toggleMenu() {

    // Select menu, overlay and body
    const menu = document.getElementById("mobileMenu");
    const overlay = document.getElementById("overlay");
    const body = document.body;

    // If menu is open → close it
    if (menu.style.right === "0px") {
        menu.style.right = "-100%";      // slide menu out
        overlay.style.display = "none";  // hide overlay
        body.classList.remove("no-scroll"); // enable scroll

    } else {
        // If menu is closed → open it
        menu.style.right = "0px";        // slide menu in
        overlay.style.display = "block"; // show overlay
        body.classList.add("no-scroll"); // disable background scroll
    }
}

// ===============================
// Close menu when overlay clicked
// ===============================
document.getElementById("overlay").addEventListener("click", () => {

    document.getElementById("mobileMenu").style.right = "-100%";
    document.getElementById("overlay").style.display = "none";
    document.body.classList.remove("no-scroll");

});

