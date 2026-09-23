//-------------------------------------//
//--|funcionalidad_afiches_digitales|--//
//-------------------------------------//
const nombre_evento = document.getElementById("nombre_evento");
const fecha_evento = document.getElementById("fecha_evento");
const hora_evento = document.getElementById("hora_evento");
const lugar_evento = document.getElementById("lugar_evento");
const precio_evento = document.getElementById("precio_evento");
const descripcion_evento = document.getElementById("descripcion_evento");
const vista_nombre = document.getElementById("vista_nombre");
const vista_fecha = document.getElementById("vista_fecha");
const vista_hora = document.getElementById("vista_hora");
const vista_lugar = document.getElementById("vista_lugar");
const vista_precio = document.getElementById("vista_precio");
const vista_descripcion = document.getElementById("vista_descripcion");
const afiche_evento = document.getElementById("afiche_evento");
const cambiar_tema = document.getElementById("cambiar_tema");
const restaurar_afiche = document.getElementById("restaurar_afiche");
//-------------------------------------//
//--|datos_guardados_en_localstorage|--//
//-------------------------------------//
const datos_guardados = JSON.parse(localStorage.getItem("datos_afiche")) || {
        nombre: "", fecha: "", hora: "", lugar: "", precio: "", descripcion: ""
    };
function guardar_datos() {
    const datos = {
        nombre: nombre_evento.value,
        fecha: fecha_evento.value,
        hora: hora_evento.value,
        lugar: lugar_evento.value,
        precio: precio_evento.value,
        descripcion: descripcion_evento.value
    };
    localStorage.setItem("datos_afiche", JSON.stringify(datos));
}
//-----------------------//
//--|actualizar_afiche|--//
//-----------------------//
function actualizar_afiche() {
    vista_nombre.textContent = nombre_evento.value || "Mi Evento";
    vista_fecha.textContent = fecha_evento.value || "Fecha del evento";
    vista_hora.textContent = hora_evento.value || "Hora del evento";
    vista_lugar.textContent = lugar_evento.value || "Lugar del evento";
    vista_precio.textContent = precio_evento.value || "Entrada gratuita";
    vista_descripcion.textContent = descripcion_evento.value || "Aquí aparecerá la descripción de tu evento.";
    guardar_datos();
}
//------------------------//
//--|eventos_formulario|--//
//------------------------//
const campos_formulario = [
    nombre_evento,
    fecha_evento,
    hora_evento,
    lugar_evento,
    precio_evento,
    descripcion_evento
];
campos_formulario.forEach(
    function(campo) {
        campo.addEventListener("input", actualizar_afiche);
        campo.addEventListener("change", actualizar_afiche);
    }
);
//----------------------------//
//--|cambiar_y_aplicar_tema|--//
//----------------------------//
let tema_actual =
    Number(
        localStorage.getItem(
            "tema_afiche"
        )
    ) || 0;
cambiar_tema.addEventListener(
    "click",
    function() {
        tema_actual++;
        if (tema_actual > 2) {
            tema_actual = 0;
        }
        aplicar_tema();
        localStorage.setItem("tema_afiche", tema_actual);
    }
);
function aplicar_tema() {
    if (tema_actual === 0) {
        afiche_evento.style.background = "linear-gradient(145deg,#312e81,#7c3aed)";
    }
    if (tema_actual === 1) {
        afiche_evento.style.background = "linear-gradient(145deg,#0f766e,#0891b2)";
    }
    if (tema_actual === 2) {
        afiche_evento.style.background = "linear-gradient(145deg,#9f1239,#ea580c)";
    }
}
//---------------------//
//--|restaurar_datos|--//
//---------------------//
restaurar_afiche.addEventListener(
    "click",
    function() {
        nombre_evento.value = "";
        fecha_evento.value = "";
        hora_evento.value = "";
        lugar_evento.value = "";
        precio_evento.value = "";
        descripcion_evento.value = "";
        tema_actual = 0;
        localStorage.removeItem("datos_afiche");
        localStorage.removeItem("tema_afiche");
        aplicar_tema();
        actualizar_afiche();
    }
);
//----------------------//
//--|cargar_los_datos|--//
//----------------------//
function cargar_datos() {
    nombre_evento.value = datos_guardados.nombre;
    fecha_evento.value = datos_guardados.fecha;
    hora_evento.value = datos_guardados.hora;
    lugar_evento.value = datos_guardados.lugar;
    precio_evento.value = datos_guardados.precio;
    descripcion_evento.value = datos_guardados.descripcion;
    actualizar_afiche();
}
cargar_datos();
aplicar_tema();