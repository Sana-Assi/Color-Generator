function NewColor(){
    var symbol;
    var color;
    symbol="0123456789ABCDEF";
    color="#";
    for(let i=0;i<6;i++){
        color+=symbol[Math.floor(Math.random()*16)];
    }
    document.body.style.backgroundColor=color;
    document.getElementById("hex").innerHTML=color;
}