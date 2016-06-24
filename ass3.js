window.onload=function(){
 document.getElementById("caption").innerHTML="1/5 - Dubai, UAE";
}
var order=1;
var timer;
var totalimages = 5;
var index=0;
var img = new Array();
img[0]="img/dubai.jpg";
img[1]="img/london.jpg";
img[2]="img/los-angeles.jpg";
img[3]="img/new-york.jpg";
img[4]="img/toronto.jpg";

var caption = new Array();
caption[1] = "Dubai, UAE";
caption[2] = "London, UK";
caption[3] = "Los-Angeles, USA";
caption[4] = "New-York City, USA";
caption[5] = "Toronto, Canada ";
var msg=document.getElementById("caption");

//------------Action buttons onclick--------------------------------------------
document.getElementById("play").onclick=play;
document.getElementById("stop").onclick=stop;
document.getElementById("next").onclick=next;
document.getElementById("prev").onclick=prev;
document.getElementById("first").onclick=first;
document.getElementById("last").onclick=last;
//----------------Functions-----------------------------------------------------
function play(){
msg.innerHTML=caption[index];
changeCounter(index, totalimages);
document.getElementById("dubai").src=img[index];
if(index<img.length-1){
index++;
}
else {
index=0;
}
timer=setTimeout("play()",2000);
}

function stop(){
 clearTimeout(timer);
}

function next(){
if(order === 1)
{
    index--;
    order++;
}
if(index<img.length-1){
index=index+1;
}else{
index=0;
}
document.getElementById("dubai").src=img[index];
changeCounter(index, totalimages);
}

function prev(){
if (index>0){
index=index-1;
}
else {
index=img.length-1;
}
document.getElementById("dubai").src=img[index];
changeCounter(index, totalimages);
}

function first(){
index=0;
document.getElementById("dubai").src=img[index];
changeCounter(index, totalimages);
}

function last(){
index=4;
document.getElementById("dubai").src=img[index];
changeCounter(index, totalimages);
}

//----------------Counter-------------------------------------------------------

function changeCounter(index, totalimages) {
    index=index+1;
    document.getElementById("caption").innerHTML = index + "/" + totalimages +"&nbsp;-&nbsp;"+caption[index];;
}