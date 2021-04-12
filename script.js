// const search = document.querySelector('.navbar-search')
// const searchOverlay = document.querySelector('.search-overlay')
// const closeOverlay = document.querySelector('.close-overlay')

// search.addEventListener("click", function() {
//     console.log('ok');
//     searchOverlay.classList.toggle("hide-overlay");
// })

// closeOverlay.addEventListener("click", function() {
//     console.log('ok');
//     searchOverlay.classList.toggle("hide-overlay");
// })

function toggler(openIconClass, overlayClass, closeIconClass, hideClassJustName) {
    const search = document.querySelector(openIconClass)
    const searchOverlay = document.querySelector(overlayClass)
    const closeOverlay = document.querySelector(closeIconClass)

    search.addEventListener("click", function() {
        searchOverlay.classList.toggle(hideClassJustName);
    })

    closeOverlay.addEventListener("click", function() {
        searchOverlay.classList.toggle(hideClassJustName);
})}

toggler(".navbar-search",
        ".search-overlay",
        ".close-overlay",
        "hide-overlay"
    )

toggler(".navbar-toggler",
        ".under-nav",
        ".close-nav-overlay",
        "hide-overlay-nav"
)



function hideDropdownMenu(togleClass, iconClass, animatedClassName, menuClass, menuHide) {
    const t = document.querySelector(togleClass)
    const i = document.querySelector(iconClass)
    const mc = document.querySelector(menuClass)
    const mh  =  menuHide

    const animateClassName = animatedClassName

    t.addEventListener("click", function() {
        i.classList.toggle("navbar-link__rotate");
    })

    t.addEventListener("click", function() {
        mc.classList.toggle(mh);
    })
}

hideDropdownMenu(".dropdown-toggler",
               ".dropdown-link",
               "navbar-link__rotate",
               ".dropdown-menu",
               "hide-dropdown-menu"
)