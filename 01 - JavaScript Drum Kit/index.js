let boxes=['A','S','D','F','G','H','J','K','L']; 
let sounds=['sounds\\clap.wav','sounds\\hihat.wav','sounds\\kick.wav','sounds\\openhat.wav','sounds\\boom.wav','sounds\\ride.wav','sounds\\snare.wav','sounds\\tom.wav','sounds\\tink.wav']

window.addEventListener('keydown',(event)=>{
    let key=event.key.toUpperCase(); 
    let box=document.getElementById(key); 
    box.className+=" play"
    

    let index=-1; 
    for(let i=0;i<9;i++){
        if(boxes[i]===key)
        index=i; 
    }
    if(index!=-1){
    var audio=new Audio(sounds[index]); 
    audio.play(); 
}
}, false); 

window.addEventListener('keyup',(event)=>{
    let key=event.key.toUpperCase(); 
    let box=document.getElementById(key); 
    box.className="key" ; 
}, false)