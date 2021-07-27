//Functions for Changing the Social Icons in the Footer
function changeIcon1(im)
{
    im.src="../img/fb-icon-on.png";
    im.alt="Кликнати Фейсбук Контакти";
}

function changeIcon2(im)
{
    im.src="../img/ig-icon-on.png";
    im.alt="Кликнати Инстаграм Контакти";
}

function changeIcon3(im)
{
    im.src="../img/twt-icon-on.png";
    im.alt="Кликнати Туитър Контакти";
}


//Functions for Restoring the Social Icons in the Footer to their original forms
function restoreIcon1(im)
{
    im.src="../img/fb-icon.png";
    im.alt="Фейсбук Контакти";
}

function restoreIcon2(im)
{
    im.src="../img/ig-icon.png";
    im.alt="Инстаграм Контакти";
}

function restoreIcon3(im)
{
    im.src="../img/twt-icon.png";
    im.alt="Туитър Контакти";
}


//Function for the Price Images
function priceImageReveal(primg)
{
    primg.style.opacity = "1";
}

function priceImageTransparent(primg)
{
    primg.style.opacity = "0.6";
}


//Functions for the Scroll-To-Top Button
var scrollToTopBtn = document.getElementById('scrollToTopButton');
var rootElement = document.documentElement;

function scrollToTop()
{
    rootElement.scrollTo({top: 0, behavior: "smooth"})
}


function changeScrollButton(bim)
{
    bim.src="../img/back-to-top-button-hover.png";
}

function restoreScrollButton(bnewim)
{
    bnewim.src="../img/back-to-top-button.png";
}

//Function for Hovering the Page Logo
function hoverLogo(logoimg)
{
    logoimg.src="../img/logo-hover.png";
}

function unhoverLogo(logonewimg)
{
    logonewimg.src="../img/logo.png";
}