let datePicker = document.getElementById("#datePicker");
datePicker.value = new Date(Date.now()).toISOString().slice(0,16);

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

//Implement functionality for carousel on "about" page
// let visitorReviewCarousel = document.querySelector('.carousel');
// let customersCardFlickity = new Flickity(visitorReviewCarousel, {
//     // options
//     cellalign: 'left',
//     pageDots: true,
//     // groupCells: '100%',
//     selectedAttraction: 0.03,
//     friction: 0.15,
//     initialIndex: 0,
//     autoPlay: true,
//     prevNextButtons: false,
//     // wrapAround:true
// });

window.addEventListener('click', (mouseClick) => {
    let itemClicked = mouseClick.target;
    console.log("was clicked: " + itemClicked.className)
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

    // if (itemClicked.className === "decrease-btn" || itemClicked.className === "increase-btn") {
    //     console.log(itemClicked.className);
    //
    //     switch (itemClicked.className){
    //         case "increase-btn":{
    //             console.log(document.querySelector(".total-items-nr input"));
    //             break;
    //         }
    //         case "decrease-btn":{
    //             break;
    //         }
    //     }
    // }

});
