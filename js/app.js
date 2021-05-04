const counters = document.querySelectorAll(".counter");
const speed= 200;

counters.forEach(function(counter){
    const update = ()=>{
        const target = +counter.getAttribute('data-target');
        // console.log("target")
        const count = parseInt(counter.innerText);
        
        const inc = target / speed;

        if(count < target){
            counter.innerText = count + inc;
            setTimeout(update, 500)
        }else{
            count.innerText= target;
        }
    }

    update()
})