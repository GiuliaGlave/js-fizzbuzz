//griglia 100 elementi
const gridEl = document.getElementById("grid");

for (let i = 1; i <=  100; i++) {
 
    let gridItem;

//multipli di 3  

    if ((i % 3 == 0) && (i % 5 == 0)) {
        gridItem = `<li class="box box-multi-15">fizzbuzz</li>`;
    }

//multipli di 5
  
    else if (i % 3 == 0) {
        gridItem = `<li class="box box-multi-3">fizz</li>`;
    }
    
//multipli di 15

    else if (i % 5 == 0) {
        gridItem = `<li class="box box-multi-5">buzz</li>`;
    }

    else{
        gridItem = `<li class="box ">${i}</li>`;
    }
    
    /* const gridElNumber = `<li class="${gridClass}">${i}</li>`; */
    gridEl.innerHTML += gridItem

}





