


var arr = [
    { songName: "Starboy", artist:"The Weeknd",url: "./songs/starboy.mp3", img: "./images/starboy.jpg",time:"2:20" },
    { songName: "Chitta", artist:"Prabh Deep",url: "./songs/Chitta.mp3", img: "./images/chitta.jpg",time:"2:00" },
    { songName: "Dhundhala",artist:"Dropped Out, Talwiinder, and Yashraj", url: "./songs/Dhundhala.mp3", img: "./images/dhundla.webp",time:"1:48" },
    { songName: "Psycho", artist:"Post Malone",url: "./songs/psycho.mp3", img: "./images/psycho.webp",time:"3:56" },
    { songName: "Faasla ft.Hasan Raheem", artist:"Shamoon Ismail",url: "./songs/Faasla-ft-Hasan Raheem.mp3", img: "./images/Faasla.jpg",time:"1:07" },
    { songName: "Fire for You", artist:"Cannons",url: "./songs/Fire-for-You.mp3", img: "./images/fire-for-you.jpg",time:"2:04" },
    { songName: "Unsaid", artist:"4ever Falling & Auram",url: "./songs/unsaid.mp3", img: "./images/unsaid.jpg",time:"2:13" }
]


var allsongs = document.querySelector('#all-songs')
var poster = document.querySelector("#left")
var play = document.querySelector("#play");
var back = document.querySelector("#back");
var forward = document.querySelector("#forward");
var mainDiv = document.querySelector("#main");
var audio = new Audio()
var selectedSong = 0


function main() {
    var clutter = ""


    arr.forEach((item, id) => {

        clutter += `<div class="song-card" id=${id}>
    
        <img src=${item.img} alt="">
        <div class="part-1">
        <h2>${item.songName}</h2>
        <p>${item.artist}</p>
    </div>
    <h6>${item.time}</h6> 
    </div>`
    })

    allsongs.innerHTML = clutter
    audio.src = arr[selectedSong].url
    poster.style.backgroundImage = `url(${arr[selectedSong].img})`;
}

main()

allsongs.addEventListener("click", (e) => {

    selectedSong = e.target.id;
    main()
    play.innerHTML = `<i class="ri-pause-line"></i>`
    flag = 1
    audio.play()

});


var flag = 0

play.addEventListener("click", () => {
    if (flag == 0) {
        play.innerHTML = `<i class="ri-pause-line"></i>`
        main();
        audio.play();
        flag = 1
       
    } else{
        play.innerHTML = `<i class="ri-play-large-fill"></i>`
        main();
        audio.pause();
        flag = 0
        
    }

})



forward.addEventListener("click", () => {
if (selectedSong < arr.length - 1){
    selectedSong++
    main();
    audio.play()
}else{
    forward.style.opacity = 0.2
}


})

back.addEventListener("click", () => {
    if (selectedSong > 0){
        selectedSong--
        main();
        audio.play()
    }else{
        back.style.opacity = 0.2
    }
    
    
    })