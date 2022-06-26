// Implement functionality for header/menu
function handleBurgerMenuFn() {
    let x = document.getElementById("myTopNav");
    let openIcon = document.getElementById("open-hamburger-menu-icon");
    let closeIcon = document.getElementById("close-hamburger-menu-icon");
    if (x.className === "header-container base-container row top-nav") {
        openIcon.style.display = "none";
        closeIcon.style.display = "inherit";
        x.className += " responsive";
    } else {
        x.className = "header-container base-container row top-nav";
        openIcon.style.display = "inherit";
        closeIcon.style.display = "none";
    }
}

window.addEventListener('click', (mouseClick) => {
    let itemClicked = mouseClick.target;
    if (itemClicked.className === "main-category") {
        let activeElement = document.getElementsByClassName("main-category active");
        activeElement[0].className = "main-category";
        itemClicked.className += " active";
    }

    if (itemClicked.className === "sub-category") {
        let activeElement = document.getElementsByClassName("sub-category active");
        activeElement[0].className = "sub-category";
        itemClicked.className += " active";
    }

    if (itemClicked.className === "classic-item" || itemClicked.className === "item-title" || itemClicked.className === "item-price" || itemClicked.className === "item-desc") {
        let activeElement = document.getElementsByClassName("classic-item active");

        switch (itemClicked.className) {
            case "classic-item": {
                activeElement[0].className = "classic-item";
                itemClicked.className += " active";
                break;
            }
            case "item-desc": {
                activeElement[0].className = "classic-item";
                itemClicked.parentElement.className += " active";
                break;
            }
            case"item-title": {
                let x = itemClicked.parentElement;
                let y = x.parentElement;
                activeElement[0].className = "classic-item";
                y.className += " active"
                break;
            }
            case "item-price": {
                let x = itemClicked.parentElement;
                let y = x.parentElement;
                activeElement[0].className = "classic-item";
                y.className += " active"
                break
            }
        }
    }
});
