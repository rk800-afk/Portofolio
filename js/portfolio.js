const navBar = document.getElementById("header");
const historyVideo = document.querySelectorAll(".history_video")[0]
const historyArticle = document.querySelectorAll(".history_article")[0]

window.addEventListener("scroll", () => {
    if (window.scrollY >= getCoords(historyVideo) - window.innerHeight) {
        historyVideo.style.transform = "translateX(0)"
        historyVideo.style.opacity = "1"
        historyArticle.style.transform = "translateX(0)"
        historyArticle.style.opacity = "1"
    }
    else{
        historyVideo.style.transform = "translateX(-200%)"
        historyVideo.style.opacity = "0"
        historyArticle.style.transform = "translateX(200%)"
        historyArticle.style.opacity = "0"
    }
})

function getCoords(elem) {
    let box = elem.getBoundingClientRect();
  
    return box.top + window.pageYOffset
  }