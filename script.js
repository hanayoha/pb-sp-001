

init();
function init() {
    document.querySelector("#title").innerHTML = title;
    document.querySelector("#navALink").innerHTML = navATitle; document.querySelector("#navBLink").innerHTML = navBTitle; document.querySelector("#navCLink").innerHTML = navCTitle; document.querySelector("#navCLinkA").innerHTML = navCLinkA; document.querySelector("#navCLinkB").innerHTML = navCLinkB; document.querySelector("#navBtnALink").innerHTML = navBtnALink;
    document.querySelector("#navALink").href = navALink; document.querySelector("#navBLink").href = navBLink; document.querySelector("#navCLink").href = navCLink;
    document.querySelector("#mainAL1Title").innerHTML = mainAL1Title; document.querySelector("#mainAL1Brand").innerHTML = mainAL1Brand; document.querySelector("#mainAL1Desc").innerHTML = mainAL1Desc; document.querySelector("#mainAL1BtnALink").innerHTML = mainAL1BtnALink; document.querySelector("#mainAL1BtnBLink").innerHTML = mainAL1BtnBLink;

    document.querySelector("#mainFooterALLALogo").src = mainFooterALLALogo; document.querySelector("#mainFooterALLAName").innerHTML = mainFooterALLAName;

}

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
