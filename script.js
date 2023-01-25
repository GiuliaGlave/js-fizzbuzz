//griglia 100 elementi
const gridEl = document.getElementById("grid")

for (let i = 1; i <= 100; i++) {
    gridEl.innerHTML += `<li class="box box–-${i}">${i}</li>`;
    
}