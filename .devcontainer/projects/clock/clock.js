const clock=document.querySelector('#clock')

// let hours = now.getHours();
// let minutes = now.getMinutes();
// let seconds = now.getSeconds();

// const time=hours+" : "+minutes+" : "+seconds

// clock.innerHTML=time
setInterval(function(){
const now=new Date()
clock.innerHTML=now.toLocaleTimeString();
},1000);