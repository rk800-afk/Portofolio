const navBar = document.getElementById("header");
const historyVideo = document.querySelectorAll(".history_video")[0]
const historyArticle = document.querySelectorAll(".history_article")[0]
const map = document.getElementById("map")
const map_buttons = document.querySelectorAll(".map_button")
const map_image = document.querySelectorAll(".map_section_image")[0]
const map_overlay = document.querySelectorAll(".map_overlay")[0]
const underline = document.querySelectorAll(".underline")[0]
const cardImages = document.querySelectorAll(".card_images_slider")

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
        map_image.style.background = "url(/images/first.jfif) no-repeat center"
        clear_active()
        map_buttons[0].classList.add("map_button_active")
        underline.style.transform = "translateX(0)"
    }
}
function clickSecondLoc(){
    if(!map_buttons[1].classList.contains("map_button_active")){
        map.src = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d324.9404335767552!2d23.869704303888593!3d49.785239335505274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2sua!4v1659619882290!5m2!1sru!2sua"
        map_image.style.background = "url(/images/second.jpg) no-repeat center"
        clear_active()
        map_buttons[1].classList.add("map_button_active")
        underline.style.transform = "translateX(150px)"
    }
}
function clickThirdLoc(){
    if(!map_buttons[2].classList.contains("map_button_active")){
        map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d772.866578561013!2d23.868251547666052!3d49.78375828428979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae168cd4a5437%3A0x71a3286e79cec09!2sKaplytsya%20Sv.%20Apostoliv%20Petra%20I%20Pavla!5e1!3m2!1sru!2sua!4v1659619995956!5m2!1sru!2sua"
        map_image.style.background = "url(/images/third.jpg) no-repeat center"
        clear_active()
        map_buttons[2].classList.add("map_button_active")
        underline.style.transform = "translateX(300px)"
    }
}
function clickFourthLoc(){
    if(!map_buttons[3].classList.contains("map_button_active")){
        map.src = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d386.4297042464282!2d23.869079671668015!3d49.78420773289384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2sua!4v1659620059219!5m2!1sru!2sua"
        map_image.style.background = "url(/images/fourth.png) no-repeat center"
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

let middlePos = ""

function leftArrowClick(){
    let left = null
    let middle = null
    let right = null
    for(let i = 0; i < cardImages.length; i++)
    {
        if(cardImages[i].classList.contains("card_images_slider_left"))
        {
            left = cardImages[i]
            console.log(left);
        }
        else if(cardImages[i].classList.contains("card_images_slider_middle"))
        {
            middle = cardImages[i]
            console.log(middle);
        }
        else if(cardImages[i].classList.contains("card_images_slider_right"))
        {
            right = cardImages[i]
            console.log(right);

        }
    }


    
    left.style.transform = "translateX(-320px)"
    // left.classList.remove("card_images_slider_left")
    // left.classList.add("card_images_slider_right")
    // middle.classList.add("left")
    // middle.classList.remove("card_images_slider_middle")
    // middle.classList.add("card_images_slider_left")
    // right.classList.add("left")
    // right.classList.remove("card_images_slider_right")
    // right.classList.add("card_images_slider_middle")

    // left.classList.add("left")
    // middle.classList.add("left")
    // middle.classList.remove("card_images_slider_middle")
    // middle.classList.add("card_images_slider_left")
    // right.classList.add("left")
    // right.classList.remove("card_images_slider_right")
    // right.classList.add("card_images_slider_middle")
}


