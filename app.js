/*Carreras disponibles */
const courses = [
    { name: "Tecnicatura Superior en Analisis de Sistemas" },
    { name: "Tecnicatura Superior en Gestion Ambiental" },
    { name: "Tecnicatura Superior en Emergencias de Salud" },
    { name: "Tecnicatura Superior en Logistica" },
    { name: "Tecnicatura Superior en Industria Textil e Indumentaria" }
];

/* // Funcion para generar las opciones de carrera en el formulario */
function generateCourseOptions() {
    const courseSelect = document.getElementById("course-select");
    courses.forEach(course => {
        const option = document.createElement("option");
        option.value = course.name;
        option.textContent = course.name;
        courseSelect.appendChild(option);
    });
}

/* // Funcion para manejar el envio del formulario de inscripcion */
function handleFormSubmit(event) {
    event.preventDefault();

    const course = document.getElementById("course-select").value;
    const name = document.getElementById("name-input").value;
    const email = document.getElementById("email-input").value;

    if (course && name && email) {
        // Aqui puedes realizar la logica para enviar el formulario
        console.log("Formulario enviado");
        console.log("Carrera:", course);
        console.log("Nombre:", name);
        console.log("Email:", email);

        // Restablecer los campos del formulario
        document.getElementById("course-select").selectedIndex = 0;
        document.getElementById("name-input").value = "";
        document.getElementById("email-input").value = "";

        // Mostrar un mensaje de exito
        alert("Formulario enviado correctamente");
    } else {
        // Mostrar un mensaje de error
        alert("Por favor, completa todos los campos");
    }
}

/* // Cargar las opciones de carrera al cargar la pagina */
window.onload = function () {
    generateCourseOptions();
    document.getElementById("registration-form").addEventListener("submit", handleFormSubmit);
};
