document.addEventListener("DOMContentLoaded",()=>{
function updateClock(){
  const now=new Date();
  const hours=now.getHours().toString().padStart(2,'0');
  const minutes=now.getMinutes().toString().padStart(2,'0');
  const seconds=now.getSeconds().toString().padStart(2,'0');
  const time=`${hours}:${minutes}:${seconds}`;
  document.getElementById("clock").textContent=time;
}
updateClock();
setInterval(updateClock,1000);

function updateDay(){
  const day=new Date();
  const date=day.getDate().toString().padStart(2,'0');
  const month=(day.getMonth()+1).toString().padStart(2,'0');
  const year=day.getFullYear().toString().padStart(2,'0');
  const today=`${date}/${month}/${year}`;
  document.getElementById("date").textContent=today;
}
let now=new Date();
let midNight= new Date(
              now.getFullYear(),
              now.getMonth(),
              now.getDate()+1,
              0,0,0,0)-now;
setTimeout(function(){
            updateDay(),
            setInterval(updateDay,24*60*60*1000)},midNight);

updateDay();
})
