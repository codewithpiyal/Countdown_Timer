  const targetTime= '14 June 2023 2:30 PM';
  const inputs= document.getElementsByTagName('input')
   document.getElementById('target').innerText=targetTime;

   const clock=()=>{
    const end= new Date (targetTime)
    const now= new Date()
    const diff= (end-now)/1000;

    console.log(end,now)
    console.log(diff)
    inputs[0].value=Math.floor((diff/3600/24));
    inputs[1].value= Math.floor((diff/3600%24));
    inputs[2].value= Math.floor((diff/60)%60);
    inputs[3].value= Math.floor((diff%60));

   }
clock()

setInterval(()=>{
    clock()
},1000)