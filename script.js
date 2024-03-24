


var arr = [
    { songName: "Starboy", url: "./songs/starboy.mp3", img: "./images/starboy.jpg" },
    { songName: "Chitta", url: "./songs/Chitta.mp3", img: "./images/chitta.jpg" },
    { songName: "Dhundhala", url: "./songs/Dhundhala.mp3", img: "./images/dhundla.webp" },
    { songName: "Psycho", url: "./songs/psycho.mp3", img: "./images/psycho.webp" },
    { songName: "Faasla ft.Hasan Raheem", url: "./songs/Faasla-ft-Hasan Raheem.mp3", img: "./images/Faasla.jpg" }
]


var allsongs = document.querySelector('#all-songs')
var poster = document.querySelector("#left")
var play = document.querySelector("#play");
var back = document.querySelector("#back");
var forward = document.querySelector("#forward");
var audio = new Audio()
var selectedSong = 0


function main() {
    var clutter = ""


    arr.forEach((item, id) => {

        clutter += `<div class="song-card" id=${id}>
    <div class="part-1">
        <img src=${item.img} alt="">
        <h2>${item.songName}</h2>
        <!-- <p>Benson Boone</p> -->
    </div>
    <h6>3:56</h6> 
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