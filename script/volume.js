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

this.speed5=document.getElementById('speed0.5')
this.speed5.addEventListener('click',()=>{ this.audioFile.playbackRate=0.5;this.speed_range.value =0.5*100})

this.speed1=document.getElementById('speed1')
this.speed1.addEventListener('click',()=>{ this.audioFile.playbackRate=1;this.speed_range.value =1*100})

this.speed2=document.getElementById('speed2')
this.speed2.addEventListener('click',()=>{ this.audioFile.playbackRate=2;this.speed_range.value =2*100})
    }


}
onload=new Volume()