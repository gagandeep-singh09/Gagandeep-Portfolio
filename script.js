
// OPEN PORTFOLIO

function showPortfolio() {

    document.getElementById("home").style.display = "none";

    document.getElementById("portfolio").style.display = "block";

    window.scrollTo(0, 0);

}


// GO BACK TO HOME

function goHome() {

    document.getElementById("portfolio").style.display = "none";

    document.getElementById("home").style.display = "flex";

    window.scrollTo(0, 0);

}
