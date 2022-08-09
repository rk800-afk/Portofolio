const navBar = document.getElementById("header");
const historyVideo = document.querySelectorAll(".history_video")[0]
const historyArticle = document.querySelectorAll(".history_article")[0]
const map = document.getElementById("map")
const map_buttons = document.querySelectorAll(".map_button")
const map_image = document.querySelectorAll(".map_section_image")[0]
const map_overlay = document.querySelectorAll(".map_overlay")[0]
const underline = document.querySelectorAll(".underline")[0]
let cardImages = document.querySelectorAll(".card_images_slider")
const imagesSliderCards = document.querySelectorAll(".images_slider_section_cards")[0]

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

function clickFirstLoc(){
    if(!map_buttons[0].classList.contains("map_button_active")){
        map.src = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d229.76867659623045!2d23.868543535856553!3d49.78500898654319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2sua!4v1659619837724!5m2!1sru!2sua"
        map_image.style.background = "url(/images/Корпус.jpg) no-repeat center"
        clear_active()
        map_buttons[0].classList.add("map_button_active")
        underline.style.transform = "translateX(0)"
    }
}
function clickSecondLoc(){
    if(!map_buttons[1].classList.contains("map_button_active")){
        map.src = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d324.9404335767552!2d23.869704303888593!3d49.785239335505274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2sua!4v1659619882290!5m2!1sru!2sua"
        map_image.style.background = "url(/images/Площа.jpg) no-repeat center"
        clear_active()
        map_buttons[1].classList.add("map_button_active")
        underline.style.transform = "translateX(150px)"
    }
}
function clickThirdLoc(){
    if(!map_buttons[2].classList.contains("map_button_active")){
        map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d306.0857908937876!2d23.86818681564651!3d49.78320286850345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae15ad3a337a3%3A0xd45e78b9ca486cd3!2sPalats%20Arkhiyepyskopiv!5e1!3m2!1sru!2sua!4v1659879485895!5m2!1sru!2sua"
        map_image.style.background = "url(/images/Палац.jpg) no-repeat center"
        clear_active()
        map_buttons[2].classList.add("map_button_active")
        underline.style.transform = "translateX(300px)"
    }
}
function clickFourthLoc(){
    if(!map_buttons[3].classList.contains("map_button_active")){
        map.src = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d386.4297042464282!2d23.869079671668015!3d49.78420773289384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2sua!4v1659620059219!5m2!1sru!2sua"
        map_image.style.background = "url(/images/Парк.jpg) no-repeat center"
        clear_active()
        map_buttons[3].classList.add("map_button_active")
        underline.style.transform = "translateX(450px)"
    }
}

function clear_active()
{
    for(let i = 0; i < map_buttons.length; i++)
        map_buttons[i].classList.remove("map_button_active")
}



map_image.addEventListener("click", ()=>{
    if(!map_image.classList.contains("map_section_image_active")){
        map_image.classList.add("map_section_image_active")
        map_overlay.style.display = "block"
    }
    else{
        map_image.classList.remove("map_section_image_active") 
        map_overlay.style.display = "none"
    }
})

map_overlay.addEventListener("click", ()=>{
    if(map_image.classList.contains("map_section_image_active")){
        map_image.classList.remove("map_section_image_active")
        map_overlay.style.display = "none"
    }
})

if(cardImages.length >= 5){
    cardImages[0].classList.add("card_images_slider_left")
    cardImages[1].classList.add("card_images_slider_middle")
    cardImages[2].classList.add("card_images_slider_right")
    cardImages[3].classList.add("card_images_slider_right_hidden")
    cardImages[cardImages.length - 1].classList.add("card_images_slider_left_hidden")
}

let leftHidPos = cardImages.length - 1
let leftPos = 0
let middlePos = 1
let rightPos = 2
let rightHidPos = 3

function rightArrowClick(){

    cardImages[leftHidPos].classList.remove("card_images_slider_left_hidden")
    if(leftHidPos > 0){
        cardImages[leftHidPos-1].classList.add("card_images_slider_left_hidden")
        leftHidPos--
    }
    else{
        cardImages[cardImages.length - 1].classList.add("card_images_slider_left_hidden")
        leftHidPos = cardImages.length - 1
    }
    cardImages[leftPos].classList.remove("card_images_slider_left")
    if(leftPos > 0){
        cardImages[leftPos-1].classList.add("card_images_slider_left")
        leftPos--
    }
    else{
        cardImages[cardImages.length - 1].classList.add("card_images_slider_left")
        leftPos = cardImages.length - 1
    }
    cardImages[middlePos].classList.remove("card_images_slider_middle")
    if(middlePos > 0){
        cardImages[middlePos-1].classList.add("card_images_slider_middle")
        middlePos--
    }
    else{
        cardImages[cardImages.length - 1].classList.add("card_images_slider_middle")
        middlePos = cardImages.length - 1
    }
    cardImages[rightPos].classList.remove("card_images_slider_right")
    if(rightPos > 0){
        cardImages[rightPos-1].classList.add("card_images_slider_right")
        rightPos--
    }
    else{
        cardImages[cardImages.length - 1].classList.add("card_images_slider_right")
        rightPos = cardImages.length - 1
    }
    cardImages[rightHidPos].classList.remove("card_images_slider_right_hidden")
    if(rightHidPos > 0){
        cardImages[rightHidPos-1].classList.add("card_images_slider_right_hidden")
        rightHidPos--
    }
    else{
        cardImages[cardImages.length - 1].classList.add("card_images_slider_right_hidden")
        rightHidPos = cardImages.length - 1
    }
}

function leftArrowClick(){

    cardImages[leftHidPos].classList.remove("card_images_slider_left_hidden")
    if(leftHidPos < cardImages.length - 1){
        cardImages[leftHidPos+1].classList.add("card_images_slider_left_hidden")
        leftHidPos++
    }
    else{
        cardImages[0].classList.add("card_images_slider_left_hidden")
        leftHidPos = 0
    }
    
    cardImages[leftPos].classList.remove("card_images_slider_left")
    if(leftPos < cardImages.length - 1){
        cardImages[leftPos+1].classList.add("card_images_slider_left")
        leftPos++
    }
    else{
        cardImages[0].classList.add("card_images_slider_left")
        leftPos = 0
    }
    cardImages[middlePos].classList.remove("card_images_slider_middle")
    if(middlePos < cardImages.length - 1){
        cardImages[middlePos+1].classList.add("card_images_slider_middle")
        middlePos++
    }
    else{
        cardImages[0].classList.add("card_images_slider_middle")
        middlePos = 0
    }
    cardImages[rightPos].classList.remove("card_images_slider_right")
    if(rightPos < cardImages.length - 1){
        cardImages[rightPos+1].classList.add("card_images_slider_right")
        rightPos++
    }
    else{
        cardImages[0].classList.add("card_images_slider_right")
        rightPos = 0
    }
    cardImages[rightHidPos].classList.remove("card_images_slider_right_hidden")
    if(rightHidPos < cardImages.length - 1){
        cardImages[rightHidPos+1].classList.add("card_images_slider_right_hidden")
        rightHidPos++
    }
    else{
        cardImages[0].classList.add("card_images_slider_right_hidden")
        rightHidPos = 0
    }
}

function changeSizeHistory(){
    if(historyArticle.style.width == "1500px"){
        historyArticle.style.width = "500px"
    }
    else
    {
        historyArticle.style.width = "1500px"
    }

}

