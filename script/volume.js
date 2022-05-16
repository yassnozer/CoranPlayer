class Volume{
    constructor(){
this.audioFile=document.getElementById('audio_file')
this.audioFile.volume=50/100
this.volume_range=document.getElementById('volume_range')
this.volume_range.addEventListener('change',
()=>{
    this.audioFile.volume=this.volume_range.value/100
}
)

this.audioFile=document.getElementById('audio_file')
this.audioFile.playbackRate=1
this.speed_range=document.getElementById('speed_range')
this.speed_range.addEventListener('change',
()=>{
    this.audioFile.playbackRate=this.speed_range.value/100
}
)


    }


}
onload=new Volume()