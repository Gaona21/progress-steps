const panels = document.querySelectorAll(".panel");
const progreso = document.querySelector(".progreso");
const btnAnterior = document.getElementById("anterior");
const btnSiguiente = document.getElementById("siguiente");

totalProgreso = panels.length;
contadorProgreso = 1;
let widthProgreso = 0;

btnSiguiente.addEventListener("click", () => {
    if (contadorProgreso < totalProgreso) {
        widthProgreso += 99 / (totalProgreso - 1);
        progreso.style.width = widthProgreso + "%";
        panels[contadorProgreso].classList.add("active");
        contadorProgreso++;
    }
});

btnAnterior.addEventListener("click", () => {
    if (contadorProgreso > 1) {
        widthProgreso -= 99 / (totalProgreso - 1);
        progreso.style.width = widthProgreso + "%";
       
        contadorProgreso--;
        panels[contadorProgreso].classList.remove("active");
    }
});

const Progreso = () => {
    panels.forEach((panel,i) => {
        if(i==totalProgreso){
            panel.classList.add("active");
        }
    });
}