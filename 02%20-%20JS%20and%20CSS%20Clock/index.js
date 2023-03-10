setInterval(updateClock, 1000); 

function updateClock(){
    
    var d=new Date(); 
    let seconds=d.getSeconds(); 
    let minutes=d.getMinutes(); 
    let hours=d.getHours(); 
    

    let sH=document.getElementById("seconds"); 
    let mH=document.getElementById("minutes"); 
    let hH=document.getElementById("hours"); 

    sH.style.transform='translate(-100%,-100%) rotate('+(seconds*6)+'deg)'; 
    mH.style.transform='translate(-100%,-100%) rotate('+(minutes*6)+'deg)'; 
    hH.style.transform='translate(-100%, -100%) rotate('+(hours*30)+'deg)';
}