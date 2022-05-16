class Player{
    constructor(){
var heightMain=document.getElementById("player")
heightMain.style.height=screen.height+"px"

if(screen.width<500){
    heightMain.style.height=screen.width+"px"
}
var heightDiv=document.getElementById("content")
heightDiv.style.height=(screen.height-300) +"px"
}
}

onload=new Player();

//buttons class

class AudioPlayer{
    constructor(){
       
if(localStorage.getItem("lastserver")!=null){
    this.server=parseInt(localStorage.getItem("lastserver"))
}else{
    this.server=0
    localStorage.setItem("lastserver", this.server)
     this.server=parseInt(localStorage.getItem("lastserver"))
}

             

this.audioFile=document.getElementById("audio_file")
this.audioTitle=document.getElementById("audio_title")
this.play_File=document.getElementById("play_btn")   

this.isplayed=false
this.play_File.addEventListener("click",
()=>{
    this.isplayed=!this.isplayed
    this.play_pause(this.isplayed)
    }
)
this.names_radio=["عبدالرحمن الماجد - البقرة","إسلام صبحي - الكهف","العيون الكوشي - النساء","إسلام صبحي - الرحمان"]
this.source_audio=["https://server10.mp3quran.net/a_majed/002.mp3","https://server14.mp3quran.net/islam/Rewayat-Hafs-A-n-Assem/018.mp3","https://server11.mp3quran.net/koshi/004.mp3","https://server14.mp3quran.net/islam/Rewayat-Hafs-A-n-Assem/055.mp3"]

this.set_ressources(this.server)
 
this.back_File=document.getElementById("back_btn")   
this.back_File.addEventListener("click",
()=>{
    this.server--
    
    if(this.server==-1){
        this.server=this.names_radio.length-1
        this.set_ressources(this.server)
        this.play_pause(this.isplayed)
        
    }else if(this.server<this.names_radio.length){
        this.set_ressources(this.server)
        this.play_pause(this.isplayed)
    }
    localStorage.setItem("lastserver", this.server)
})


this.next_File=document.getElementById("next_btn")   
this.next_File.addEventListener("click",
()=>{
    this.server++
    if(this.server<this.names_radio.length){
        this.set_ressources(this.server)
        this.play_pause(this.isplayed)
        
    }else if(this.server==this.names_radio.length){
        this.server=0
        this.set_ressources(this.server)
        this.play_pause(this.isplayed)
    }
    localStorage.setItem("lastserver", this.server)
   
})



}

set_ressources(ser){

    this.audioTitle.innerText=this.names_radio[ser]
    this.audioTitle.innerText=this.names_radio[ser]
    this.audioFile.src=this.source_audio[ser]



}

play_pause(statut){
   
if(statut==true){
    audio_file.play()
    this.play_File.src="img/pause.png"
}else{
    audio_file.pause()
    this.play_File.src="img/play.png"
}
localStorage.setItem("lastserver", this.server)
}
}

onload= new AudioPlayer();