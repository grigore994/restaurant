function hidePopUp() {
    let popUp = document.getElementsByClassName('pop-up')[0];
    popUp.style.opacity = '1';
    popUp.style.visibility = 'hidden';
}

function showPopUp() {
    let popUp = document.getElementById('pop-up');
    popUp.style.opacity = '1';
    popUp.style.visibility = 'visible';
}

// Implement functionality for header/menu
function handleBurgerMenuFn() {
    let x = document.getElementById("myTopNav");
    let openIcon = document.getElementById("open-hamburger-menu-icon");
    let closeIcon = document.getElementById("close-hamburger-menu-icon");
    if (x.className === "header-container base-container row top-nav") {
        openIcon.style.display = "none";
        x.style.backgroundColor = "#FFFFFF";
        closeIcon.style.display = "inherit";
        x.className += " responsive";
    } else {
        x.className = "header-container base-container row top-nav";
        openIcon.style.display = "inherit";
        x.style.backgroundColor = "transparent";
        closeIcon.style.display = "none";
    }
}


function attachEventListenerForAllElements(array, eventType, handler, options) {
    Array.from(array).forEach(element => {
        element.addEventListener(eventType, handler, false);
    });
}

function setActiveNamePresentation() {
    let lateralMnuNamePresentation = document.getElementById("tank-menu-cat-name");
    let namePresentation = document.getElementById("namePresentation");
    let activePresentation = document.getElementsByClassName("mobile-presentation active row");
    let activeLateralElement = document.getElementsByClassName("main-category active");

    activePresentation[0].className = "mobile-presentation row";
    namePresentation.className += " active"

    activeLateralElement[0].className = "main-category";
    lateralMnuNamePresentation.className += " active"
}

function setActiveFamilyPresentation() {
    let lateralMnuFamilyPresentation = document.getElementById("tank-menu-cat-family");
    let familyPresentation = document.getElementById("familyPresentation");
    let activePresentation = document.getElementsByClassName("mobile-presentation active row");
    let activeLateralElement = document.getElementsByClassName("main-category active");

    activePresentation[0].className = "mobile-presentation row";
    familyPresentation.className += " active"

    activeLateralElement[0].className = "main-category";
    lateralMnuFamilyPresentation.className += " active"
}
function setActiveBabyPresentation() {
    let lateralMnuBabyPresentation = document.getElementById("tank-menu-cat-baby-friendly");
    let babyPresentation = document.getElementById("babyPresentation");
    let activePresentation = document.getElementsByClassName("mobile-presentation active row");
    let activeLateralElement = document.getElementsByClassName("main-category active");

    activePresentation[0].className = "mobile-presentation row";
    babyPresentation.className += " active"

    activeLateralElement[0].className = "main-category";
    lateralMnuBabyPresentation.className += " active"
}

function setActivePersonalPresentation() {
    let lateralMnuPersonalPresentation = document.getElementById("tank-menu-cat-personal");
    let personalPresentation = document.getElementById("personalPresentation");
    let activePresentation = document.getElementsByClassName("mobile-presentation active row");
    let activeLateralElement = document.getElementsByClassName("main-category active");

    activePresentation[0].className = "mobile-presentation row";
    personalPresentation.className += " active"

    activeLateralElement[0].className = "main-category";
    lateralMnuPersonalPresentation.className += " active"}


function handlePresentationCard(evt) {
    if (!xDown || !yDown) {
        return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
        if (xDiff > 0) {
            /* right swipe */
        } else {
            /* left swipe */
        }
    } else {
        if (yDiff > 0) {
            /* down swipe */

            switch (evt.path[2].id) {
                case "namePresentation": {
                    setActiveFamilyPresentation();
                    break;
                }
                case "familyPresentation": {
                    setActiveBabyPresentation()
                    break;
                }
                case "babyPresentation": {
                    setActivePersonalPresentation();
                    break;
                }
                case "personalPresentation": {
                    setActiveNamePresentation()
                    break;
                }
            }
        } else {
            /* up swipe */
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
}

try {
    let mobilePresentation = document.getElementsByClassName("mobile-presentation");
    attachEventListenerForAllElements(mobilePresentation, "touchstart", handleTouchStart, false);
    attachEventListenerForAllElements(mobilePresentation, "touchmove", handlePresentationCard, false);
} catch (error) {
    console.log(error)
}

try {
    document.getElementById('home-intro').addEventListener('touchstart', handleTouchStart, false);
    document.getElementById('home-intro').addEventListener('touchmove', handleTouchMove, false);

    document.getElementById('special-mnu-section').addEventListener('touchstart', handleTouchStart, false);
    document.getElementById('special-mnu-section').addEventListener('touchmove', handleTouchMove, false);
} catch (e) {
    console.log(e)
}

try {
    window.addEventListener('click', (mouseClick) => {
        let itemClicked = mouseClick.target;

        if (itemClicked.className === "search-icon" || itemClicked.className === "search-icon-container") {
            let input = document.getElementById("search-input");
            if (input.style.display === "none") {
                input.style.display = "inherit";
            } else {
                input.style.display = "none";
            }
        }

        if (itemClicked.className === "main-category") {
            let activeElement = document.getElementsByClassName("main-category active");
            activeElement[0].className = "main-category";
            itemClicked.className += " active";
        }

        if (itemClicked.className === "mobile-type-category") {
            let activeElement = document.getElementsByClassName("mobile-type-category active");
            activeElement[0].className = "mobile-type-category";
            itemClicked.className += " active";
        }

        if (itemClicked.className === "sub-category") {
            let activeElement = document.getElementsByClassName("sub-category active");
            activeElement[0].className = "sub-category";
            itemClicked.className += " active";
        }

        if (itemClicked.className === "main-title" || itemClicked.className === "expand-arrow" ||
            itemClicked.className === "main-cat-item") {

            switch (itemClicked.className) {
                case "main-cat-item": {
                    itemClicked.className += " active";
                    break;
                }
                case "main-cat-item active": {
                    itemClicked.className += "main-cat-item";
                    break;
                }
                case "main-title": {
                    let x = itemClicked.parentElement;
                    let y = x.parentElement;
                    if (y.className === "main-cat-item") {
                        y.className += " active";
                    } else {
                        y.className = "main-cat-item";
                    }
                    break;
                }
                case "expand-arrow": {
                    let x = itemClicked.parentElement;
                    let y = x.parentElement;
                    let z = y.parentElement;
                    if (z.className === "main-cat-item") {
                        z.className += " active";
                    } else {
                        z.className = "main-cat-item";
                    }
                    break;
                }
            }
        }

        let centerContainer = document.getElementsByClassName("center-container")[0];
        let leftContainer = document.getElementsByClassName("left-container")[0];

        if (itemClicked.className === "continue-btn") {
            centerContainer.style.filter = "blur(3px)";
            centerContainer.style.opacity = "0.5";
            leftContainer.style.filter = "blur(3px)";
            leftContainer.style.opacity = "0.5";

            let x = itemClicked.parentElement;
            let y = x.parentElement;
            let z = y.parentElement;
            let w = z.parentElement;
            w.style.display = "none";
            let checkOutContainer = document.getElementById("check-out-container");
            checkOutContainer.style.display = "inherit";
        }

        if (itemClicked.className === "back-btn check-out-container-back-btn") {
            document.getElementById("check-out-container").style.display = "none";
            document.getElementById("shop-container").style.display = "inherit";

        } else if (itemClicked.parentElement.className === "back-btn check-out-container-back-btn") {
            document.getElementById("check-out-container").style.display = "none";
            document.getElementById("shop-container").style.display = "inherit";
        }

        if (itemClicked.className === "back-btn complete-order-container-back-btn") {
            document.getElementById("check-out-container").style.display = "inherit";
            document.getElementById("complete-order-container").style.display = "none";
        } else if (itemClicked.parentElement.className === "back-btn complete-order-container-back-btn") {
            document.getElementById("check-out-container").style.display = "inherit";
            document.getElementById("complete-order-container").style.display = "none";
        }

        if (itemClicked.className === "checkout-btn") {
            let x = itemClicked.parentElement;
            let y = x.parentElement;
            let z = y.parentElement;
            let w = z.parentElement;
            w.style.display = "none";
            let completeOrderContainer = document.getElementById("complete-order-container");
            completeOrderContainer.style.display = "inherit";
        }

    });
} catch (e) {
    console.log(e)
}


let xDown = null;
let yDown = null;

function getTouches(evt) {
    return evt.touches
}


function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
        if (xDiff > 0) {
            /* right swipe */
        } else {
            /* left swipe */
        }
    } else {
        if (yDiff > 0) {
            /* down swipe */
            document.getElementById('bottom-options').style.display = 'none';
            document.getElementById('home-intro').style.minHeight = 'calc(100vh - 100vh)';
            document.getElementById('home-intro').style.transition = 'min-height 0.3s ease-in-out 0.3s';
            document.getElementById('bottom-background-img').style.display = "none";
            document.getElementById('top-background-img').style.display = "none";
            document.getElementById("main-mnu-header").style.filter = "none"
            document.getElementById("mob-food-cat-wrapper").style.filter = "none"
            document.getElementById("mobile-food-cat").style.filter = "none"
            document.getElementById('home-footer-mobile').style.display = 'flex';
            document.getElementById('home-mobile-intro-data').style.display = 'none';
            document.getElementById('card-icon').style.display = 'inherit';
            document.getElementById('search-container').style.display = 'inherit';
            document.getElementById('icon').style.backgroundColor = '#F7F7F7';
            document.getElementById('icon').style.color = '#4C4C4C';
        } else {
            /* up swipe */
            document.getElementById('top-background-img').style.display = "inherit";
            document.getElementById('bottom-background-img').style.display = "inherit";
            document.getElementById('bottom-options').style.display = 'inherit';
            document.getElementById('home-intro').style.minHeight = 'calc(100vh - 170px)';
            document.getElementById('home-footer-mobile').style.display = 'none';
            document.getElementById('home-mobile-intro-data').style.display = 'flex';
            document.getElementById('home-mobile-intro-data').style.zIndex = '7';
            document.getElementById('card-icon').style.display = 'none';
            document.getElementById('search-container').style.display = 'none';
            document.getElementById('icon').style.backgroundColor = '#FFFFFF';
            document.getElementById('icon').style.color = '#526A30';
            document.getElementById("main-mnu-header").style.filter = "blur(3px)"
            document.getElementById("mob-food-cat-wrapper").style.filter = "blur(4px)"
            document.getElementById("mobile-food-cat").style.filter = "grayscale(100%)"
            document.querySelector(".home-mobile-wrapper .footer-mobile-container").style.display = "none";

        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
}

try {
    let orderForm = document.getElementById("orderForm");
    let checkOutForm = document.getElementById("checkOutForm");

    orderForm.addEventListener('submit', handleSubmit);
    checkOutForm.addEventListener('submit', handleSubmit);
} catch (e) {
    console.log(e)
}

function handleSubmit(event) {
    event.preventDefault();
}

try {
    let datePicker = document.getElementById("#datePicker");
    datePicker.value = new Date(Date.now()).toISOString().slice(0, 16);
} catch (e) {
    console.log(e)
}

try {

} catch (e) {
    let timePicker = document.getElementById("timeInput");
    timePicker.value = new Date(Date.now()).toISOString().slice(11, 16);
}


try {
    let menuItems = document.getElementsByClassName("classic-item");
    attachEventListenerForAllElements(menuItems, "mouseover", setActive, false);
    attachEventListenerForAllElements(menuItems, "mouseleave", setInactive, false);
} catch (e) {
    console.log(e)
}

function setActive(event) {
    //if an item is active set it inactive
    try {
        let activeElement = document.getElementsByClassName("classic-item active");
        activeElement[0].className = "classic-item";
    } catch (e) {
        console.log(e)
    }

    //set current item active
    switch (event.target.className) {
        case "classic-item": {
            event.target.className += " active";
            break;
        }
        case "item-desc": {
            event.target.parentElement.className += " active";
            break;
        }
        case"item-title": {
            let x = event.target.parentElement;
            let y = x.parentElement;
            y.className += " active"
            break;
        }
        case "item-price": {
            let x = event.target.parentElement;
            let y = x.parentElement;
            y.className += " active"
            break
        }
    }
}

function setInactive(event) {
    try {
        let activeElement = document.getElementsByClassName("classic-item active");
        activeElement[0].className = "classic-item";
    } catch (e) {
        console.log(e)
    }
}

try {
    let items = document.getElementsByClassName("center-cont-item");
    attachEventListenerForAllElements(items, "mouseover", event => {
        //if an item is active set it inactive
        try {
            let activeElement = document.getElementsByClassName("center-cont-item active");
            activeElement[0].className = "center-cont-item";
        } catch (e) {
            console.log(e)
        }
        //set current item active
        switch (event.target.className) {
            case "order-item-title row": {
                let x = event.target.parentElement;
                let y = x.parentElement;
                y.className += " active";
                break;
            }
            case "item-title-row row": {
                event.target.parentElement.className += " active"
                break;
            }
            case "item-desc-row row": {
                event.target.parentElement.className += " active"
                break;
            }

            case "item-total-row row": {
                event.target.parentElement.className += " active";
                break;
            }
            case "item-sign": {
                let x = event.target.parentElement;
                let y = x.parentElement;
                y.className += " active";
                break;
            }
        }

    }, false);
} catch (e) {
    console.log(e)
}