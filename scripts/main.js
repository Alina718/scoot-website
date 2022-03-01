const menuBtn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const mobileNavigation = document.getElementById('mobile-navigation');


menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(
        overlay.dataset.visible === "false" && 
        mobileNavigation.dataset.visible === "false") {
            overlay.dataset.visible = "true";
            mobileNavigation.dataset.visible = "true";
            menuBtn.style.backgroundImage = 'url(./assets/icons/close.svg)';
            document.body.style.overflowY = 'hidden';
        } else {
            overlay.dataset.visible = "false";
            mobileNavigation.dataset.visible = "false";
            menuBtn.style.backgroundImage = 'url(./assets/icons/hamburger.svg)';
            document.body.style.overflowY = 'visible';
        }
});

const buttons = document.querySelectorAll('.button[data-goto]');
const buttonMobile = document.getElementById('button-mobile');

function scrollToAppSection(e, button) {
    const link = e.target;
        
        if(button.dataset.goto 
            && document.querySelector(button.dataset.goto)) {
                const goToBlock = document.querySelector(button.dataset.goto);
                const goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.block').offsetHeight;

                window.scrollTo({
                    top: goToBlockValue,
                    behavior: 'smooth'
                });
                e.preventDefault();
        }
}

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        scrollToAppSection(e, button);
    });
});

buttonMobile.addEventListener('click', (e) => {
    overlay.dataset.visible = "false";
    mobileNavigation.dataset.visible = "false";
    menuBtn.style.backgroundImage = 'url(./assets/icons/hamburger.svg)';
    document.body.style.overflowY = 'visible';
    scrollToAppSection(e, buttonMobile);
})




