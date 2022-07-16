





// document.addEventListener('swipe', function(e) {
//     console.log("swiped");
// });


document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
    return evt.touches // ||             // browser API
        // evt.originalEvent.touches; // jQuery
}


function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* right swipe */
        } else {
            /* left swipe */
        }
    } else {
        if ( yDiff > 0 ) {
            /* down swipe */
            console.log('swiped down')
            document.getElementById('bottom-options').style.display='none';
            document.getElementById('home-intro').style.backgroundImage = 'none';
            document.getElementById('home-intro').style.minHeight = 'calc(100vh - 100vh)';
            document.getElementById('home-footer-mobile').style.display = 'flex';
            document.getElementById('home-mobile-intro-data').style.display = 'none';
            // document.getElementById('home-mobile-intro-data').style.height='0 px';
        } else {
            /* up swipe */
            console.log('swiped up')
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};










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


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween:20,
    slidesPerView:'auto',
});

const swiper2 = new Swiper('.swiper2', {
    // modules:[Pagination],
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
    // spaceBetween:20,
    slidesPerView:1,
    centeredSlides: true,
    // fill: 'row',

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },

    autoplay: {
        delay: 3000,
    },
});

const swiper3 = new Swiper('.swiper3', {
    // modules:[Pagination],
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
    spaceBetween:20,
    slidesPerView:1,
    centeredSlides: true,
    // fill: 'row',

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },

    // autoplay: {
    //     delay: 3000,
    // },
});

const swiper4 = new Swiper('.swiper4', {
    direction: 'horizontal',
    // loop: true,
    spaceBetween:20,
    slidesPerView:'auto',
    // centeredSlides: true,
    // fill: 'row',

    // pagination: {
    //     el: '.swiper-pagination',
    //     type: 'bullets',
    // },

    // autoplay: {
    //     delay: 3000,
    // },
});

const swiper5 = new Swiper('.swiper5', {
    // modules:[Pagination],
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
    spaceBetween:20,
    slidesPerView:1,
    centeredSlides: true,
    // fill: 'row',

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },

    // autoplay: {
    //     delay: 3000,
    // },
});



window.addEventListener('click', (mouseClick) => {
    let itemClicked = mouseClick.target;
    console.log("was clicked: " + itemClicked.className)

    if (itemClicked.className === "search-icon" || itemClicked.className === "search-icon-container") {
        let input = document.getElementById("search-input");
        if (input.style.display === "none") {
            input.style.display = "inherit";
        }else {
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

    if (itemClicked.id === "tank-menu-cat-name") {
        let activeElement = document.getElementsByClassName("mobile-presentation active");
        activeElement[0].className = "mobile-presentation";
        document.getElementById("namePresentation").className += " active";
    }

    if (itemClicked.id === "tank-menu-cat-family") {
        let activeElement = document.getElementsByClassName("mobile-presentation active");
        activeElement[0].className = "mobile-presentation";
        document.getElementById("familyPresentation").className += " active";
    }

    if (itemClicked.id === "tank-menu-cat-baby-friendly") {
        let activeElement = document.getElementsByClassName("mobile-presentation active");
        activeElement[0].className = "mobile-presentation";
        document.getElementById("babyPresentation").className += " active";
    }

    if (itemClicked.id === "tank-menu-cat-personal") {
        let activeElement = document.getElementsByClassName("mobile-presentation active");
        activeElement[0].className = "mobile-presentation";
        document.getElementById("personalPresentation").className += " active";
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

    if (itemClicked.className === "main-title" || itemClicked.className === "fa-solid fa-angle-down arrow" ||
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
            case "fa-solid fa-angle-down arrow": {
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

    if (itemClicked.className === "order-item-title row" ||
        itemClicked.className === "item-title-row row" ||
        itemClicked.className === "item-desc-row row" ||
        itemClicked.className === "item-total-row row" ||
        itemClicked.className === "item-sign") {
        let activeElement = document.getElementsByClassName("center-cont-item active");
        switch (itemClicked.className) {
            case "order-item-title row": {
                activeElement[0].className = "center-cont-item"
                let x = itemClicked.parentElement;
                let y = x.parentElement;
                y.className += " active";
                break;
            }
            case "item-title-row row": {
                activeElement[0].className = "center-cont-item"
                itemClicked.parentElement.className += " active"
                break;
            }
            case "item-desc-row row": {
                activeElement[0].className = "center-cont-item"
                itemClicked.parentElement.className += " active"
                break;
            }

            case "item-total-row row": {
                activeElement[0].className = "center-cont-item"
                itemClicked.parentElement.className += " active";
                break;
            }
            case "item-sign": {
                activeElement[0].className = "center-cont-item"
                let x = itemClicked.parentElement;
                let y = x.parentElement;
                y.className += " active";
                break;
            }
        }
    }

    if (itemClicked.className === "continue-btn") {
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

// let orderForm = document.getElementById("orderForm");
// let checkOutForm = document.getElementById("checkOutForm");
// function handleSubmit(event) {
//     event.preventDefault();
// }
// orderForm.addEventListener('submit', handleSubmit);
// checkOutForm.addEventListener('submit', handleSubmit);
//
//
// let datePicker = document.getElementById("#datePicker");
// datePicker.value = new Date(Date.now()).toISOString().slice(0, 16);
// let timePicker = document.getElementById("timeInput");
// timePicker.value = new Date(Date.now()).toISOString().slice(11, 16);

