// El arreglo de notas
let notas = [8, 4, 10, 6, 3, 9, 5, 7, 2];

// Función para calcular notas
function calcularNotas() {
    //contadores
    let aprobados = 0;
    let supletorios = 0;
    let reprobados = 0;
    let sumaTotal = 0;

    notas.forEach((nota) => {
        
        sumaTotal += nota;

        // uso if
        if (nota >= 7 && nota <= 10) {
            aprobados++;
        } else if (nota >= 5 && nota < 7) {
            supletorios++;
        } else if (nota >= 0 && nota < 5) {
            reprobados++;
        }
    });

    //Calcular Promedio
    let promedio = sumaTotal / notas.length;

    // estaod cel curso
    let estado = "";
    let colorEstado = "";

    if (promedio >= 7) {
        estado = "APROBADO";
        colorEstado = "text-success";
    } else {
        estado = "EN RIESGO";
        colorEstado = "text-danger";
    }

    document.getElementById('total_aprobados').innerText = aprobados;
    document.getElementById('total_supletorios').innerText = supletorios;
    document.getElementById('total_reprobados').innerText = reprobados;
    
    document.getElementById('promedio_curso').innerText = promedio.toFixed(2); 

    const elementoEstado = document.getElementById('estado_curso');
    elementoEstado.innerText = estado;
    
    elementoEstado.className = "";
    elementoEstado.classList.add("fw-bold", colorEstado);

    const btnCalcular = document.getElementById('btn_calcular');
    btnCalcular.disabled = true;
    btnCalcular.innerText = "CALCULADO";
}
