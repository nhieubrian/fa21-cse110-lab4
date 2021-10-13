
function timer (time) {
    console.log(time);
}

while(true){
    let d = new Date();
    let time = d.toLocaleTimeString();
    
    setTimeout(timer, 1000, time);
}
