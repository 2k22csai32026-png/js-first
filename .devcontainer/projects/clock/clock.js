const clock=document.querySelector('#clock')
const now=new Date()
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

const time=hours+" : "+minutes+" : "+seconds

clock.innerHTML=time