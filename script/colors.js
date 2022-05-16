class Color{
    constructor(){
this.color0=document.getElementById("color1");
this.color1=document.getElementById("color2");
this.color2=document.getElementById("color3");
this.color3=document.getElementById("color4");
this.colors=["#0097e6","#8c7ae6","#e1b12c","#44bd32"]
this.maincolor=document.getElementById("player")
this.headercolors=["#00a8ff","#9c88ff","#fbc531","#4cd137"]
this.color0.style.background=this.colors[0]
this.color1.style.background=this.colors[1]
this.color2.style.background=this.colors[2]
this.color3.style.background=this.colors[3]
if(localStorage.getItem('lastBackColor') != null){
    document.body.style.backgroundColor=localStorage.getItem('lastBackColor')
    this.maincolor.style.backgroundColor=localStorage.getItem('lastFrontColor')
}


this.color0.addEventListener("click",()=>{this.set_color(this.headercolors[0],this.colors[0])})
this.color1.addEventListener("click",()=>{this.set_color(this.headercolors[1],this.colors[1])})
this.color2.addEventListener("click",()=>{this.set_color(this.headercolors[2],this.colors[2])})
this.color3.addEventListener("click",()=>{this.set_color(this.headercolors[3],this.colors[3])})

    }
set_color(col,loc){
document.body.style.backgroundColor=col
this.maincolor.style.backgroundColor=loc
localStorage.setItem('lastFrontColor',col)
localStorage.setItem('lastBackColor',loc)
}

}

onload=new Color();