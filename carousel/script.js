const imgCo=document.querySelector('.img-co');
const imgs=document.querySelectorAll('img');

let index=0;
 function carousel(){
    
   
    
if(imgs.length-1<index){
    index=0;
}
const x=`translateX(${-index*500}px)`;
console.log(index,x);

imgCo.style.transform=x;
index++;

}
setInterval(carousel,2000);