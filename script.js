//griglia 100 elementi
const gridEl = document.getElementById("grid")

for (let i = 1; i <= 100; i++) {
/*     gridEl.innerHTML += `<li class="box box–-${i}">${i}</li>`; */
 
//multipli di 3  

    let gridClass;

    if(i % 3 == 0){
        gridClass = "box box-multi-3 ";
    }

    else if (i % 5 == 0) {
        gridClass = "box box-multi-5";
    }


    else{
        gridClass = `box box–-${i}`
    }
    
    gridEl.innerHTML += `<li class="${gridClass}">${i}</li>`;
    
}



//multipli di 5

//multipli di 15