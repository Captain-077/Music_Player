


var arr = [
    {songName:"Starboy",url:"./songs/starboy.mp3",img:"./images/starboy.jpg"},
    {songName:"Chitta",url:"./songs/Chitta.mp3",img:"./images/chitta.jpg"},
    {songName:"Dhundhala",url:"./songs/Dhundhala.mp3",img:"./images/dhundla.webp"},
    {songName:"Psycho",url:"./songs/psycho.mp3",img:"./images/psycho.webp"},
    {songName:"Faasla ft.Hasan Raheem",url:"./songs/Faasla-ft-Hasan Raheem.mp3",img:"./images/Faasla.jpg"}
]


var allsongs = document.querySelector('#all-songs')
var audio = new Audio()


function main(){
    var clutter = ""


arr.forEach((item,id)=>{
    
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
allsongs.addEventListener("click",(e)=>{

const info = arr[e.target.id];
const bgChanger = document.querySelector("#left").style.backgroundImage = `url(${info.img})`;
audio.src = info.url
audio.play()

});
}

main()



const Playbtn = document.querySelector("#play");

Playbtn.addEventListener("click",() => {

    audio.pause();

})
