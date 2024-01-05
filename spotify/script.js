console.log("welcome to spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('Spotify Clone/songs/1.mp3');
let masterPlay = document.getElementById("masterPlay")
let myProgressBar = document.getElementById("myProgressBar")
let gif = document.getElementById("gif")
let masterSongName = document.getElementById("masterSongName")
let songitem = Array.from(document.getElementsByClassName("songitem"));
let songs = [
    {songName:"tere vaste",filePath:"Spotify Clone/songs/1.mp3",coverPath:"Spotify Clone/covers/1.jpg"},
    {songName:"ishq bezooban ",filePath:"Spotify Clone/songs/2.mp3",coverPath:"Spotify Clone/covers/2.jpg"},
    {songName:"tera chehara",filePath:"Spotify Clone/songs/3.mp3",coverPath:"Spotify Clone/covers/3.jpg"},
    {songName:"let me love you",filePath:"Spotify Clone/songs/4.mp3",coverPath:"Spotify Clone/covers/4.jpg"},
    {songName:"let me love you",filePath:"Spotify Clone/songs/5.mp3",coverPath:"Spotify Clone/covers/5.jpg"},
    {songName:"let me love you",filePath:"Spotify Clone/songs/6.mp3",coverPath:"Spotify Clone/covers/6.jpg"},
    {songName:"let me love you",filePath:"Spotify Clone/songs/7.mp3",coverPath:"Spotify Clone/covers/7.jpg"},
    {songName:"let me love you",filePath:"Spotify Clone/songs/8.mp3",coverPath:"Spotify Clone/covers/8.jpg"},
    {songName:"let me love you",filePath:"Spotify Clone/songs/9.mp3",coverPath:"Spotify Clone/covers/9.jpg"},
    {songName:"let me love you",filePath:"Spotify Clone/songs/10.mp3",coverPath:"Spotify Clone/covers/10.jpg"},
]
songitem.forEach((element, i)=>{
    console.log(element, i);
element.getElementsByTagName("img")[0].src = songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//audioElement.play();

// Handle play/puse click
masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
    
})
// listen to event
audioElement.addEventListener("timeupdate",()=>{
    console.log("timeupdate");
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    console.log(progress);
    myProgressBar.value = progress;
    
})
myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlayes = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-pause")
        element.classList.add("fa-play")
    })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        console.log(e.target);
        makeAllPlayes();
        songIndex =parseInt(e.target.id)
        e.target.classList.remove("fa-play")
        e.target.classList.add("fa-pause")
        audioElement.src = `Spotify Clone/songs/${songIndex}.mp3`
        audioElement.currentTime =(0)
        audioElement.play()
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
    })

    
})
document.getElementById("next").addEventListener("click",()=>{
    if(songIndex>9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `Spotify Clone/songs/${songIndex}.mp3`
        audioElement.currentTime = 0;
        audioElement.play()
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
})
document.getElementById("previous").addEventListener("click",()=>{
    if(songIndex<0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `Spotify Clone/songs/${songIndex}.mp3`
        audioElement.currentTime = 0;
        audioElement.play()
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
})