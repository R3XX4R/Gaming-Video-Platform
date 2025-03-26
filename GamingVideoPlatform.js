
// Select the HTML5 video
const video = document.querySelector("#video")
// set the pause button to display:none by default
document.querySelector(".fa-pause").style.display = "none"
// update the progress bar
video.addEventListener("timeupdate", () => {
    let curr = (video.currentTime / video.duration) * 100
    if(video.ended){
        document.querySelector(".fa-play").style.display = "block"
        document.querySelector(".fa-pause").style.display = "none"
    }
    document.querySelector('.inner').style.width = `${curr}%`
})
// pause or play the video
const play = (e) => {
    // Condition when to play a video
    if(video.paused){
        document.querySelector(".fa-play").style.display = "none"
        document.querySelector(".fa-pause").style.display = "block"
        video.play()
    }
    else{
        document.querySelector(".fa-play").style.display = "block"
        document.querySelector(".fa-pause").style.display = "none"
        video.pause()
    }
}
// trigger fullscreen
const fullScreen = (e) => {
    e.preventDefault()
    video.requestFullscreen()
}
// download the video
const download = (e) => {
    e.preventDefault()
    let a = document.createElement('a')
    a.href = video.src 
    a.target = "_blank"
    a.download = ""
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}
// rewind the current time
const rewind = (e) => {
    video.currentTime = video.currentTime - ((video.duration/100) * 5)
}
// forward the current time
const forward = (e) => {
    video.currentTime = video.currentTime + ((video.duration/100) * 5)
}



//Переменные страниц
let mainPage = document.getElementById('mainMenuPageId')
let shortsPage = document.getElementById('shortsMenuPageId')

//Переменные строк боковой секции
let mainSideBarString = document.getElementById('mainSideString')
let shortsSideBarString = document.getElementById('shortsSideString')




mainSideBarString.onclick = () => {
    if(mainSideBarString.className = "sideBarString"){
        mainSideBarString.className = "sideBarStringActive"
        shortsSideBarString.className = "sideBarString"

        mainPage.style.visibility = "visible"
        mainPage.style.position = "relative";

        shortsPage.style.visibility = "hidden"
        shortsPage.style.position = "absolute"
    } else{
    }
}
shortsSideBarString.onclick = () => {
    if(shortsSideBarString.className = "sideBarString"){
        shortsSideBarString.className = "sideBarStringActive"
        mainSideBarString.className = "sideBarString"
        
        mainPage.style.visibility = "hidden"
        mainPage.style.position = "absolute";

        shortsPage.style.visibility = "visible"
        shortsPage.style.position = "relative"
    } else{
    }
}