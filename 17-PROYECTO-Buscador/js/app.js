//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const Resultados = document.querySelector('#resultado');
const max = new Date().getFullYear();
const min = max - 10;




//Generar un objeto con la busqueda 

const datosBusqueda = {
    marca: '',
    yer:'',
    minimo:'',
    maximo:'',
    puertas:'',
    transmision:'',
    color:''
}

//Eventos 
document.addEventListener('DOMContentLoaded', ()=>{
    MostrarAustos(autos);

    //llenar las opciones del año 
    llenarSelect();
});

//Event Listener para los select de busqueda 
marca.addEventListener('change', e =>{
    // console.log(e.target.value);
    datosBusqueda.marca = e.target.value;
    // console.log(datosBusqueda);
    filtarAutos();
});

year.addEventListener('change', e =>{
    // console.log(e.target.value);
    datosBusqueda.year = parseInt(e.target.value); // como viene tipo string por el formulario, lo pasamos a entero con esta funcion
    // console.log(datosBusqueda);
    filtarAutos();
});

minimo.addEventListener('change', e =>{
    // console.log(e.target.value);
    datosBusqueda.minimo = parseInt(e.target.value);
    // console.log(datosBusqueda);
    filtarAutos();
});

maximo.addEventListener('change', e =>{
    // console.log(e.target.value);
    datosBusqueda.maximo = e.target.value;
    // console.log(datosBusqueda);
    filtarAutos();
});

puertas.addEventListener('change', e =>{
    // console.log(e.target.value);
    datosBusqueda.puertas = parseInt(e.target.value);
    // console.log(datosBusqueda);
    filtarAutos();
});

transmision.addEventListener('change', e =>{
    // console.log(e.target.value);
    datosBusqueda.transmision = e.target.value;
    // console.log(datosBusqueda);
    filtarAutos();
});

color.addEventListener('change', e =>{
    // console.log(e.target.value);
    datosBusqueda.color = e.target.value;
    console.log(datosBusqueda);
    filtarAutos();
});


//Funciones 
function MostrarAustos (autos){
    limpiarHTML(); //elimina el html previo 
    autos.forEach(auto => {
        const {marca, modelo, year, precio, puertas, color, transmision, fotografia }= auto;
                // Crear un contenedor para el auto
                const autoContainer = document.createElement('div');
                autoContainer.classList.add('auto-container', 'row');
        
                // Crear el contenido HTML para cada auto
                const autoHTML = `
                <div class="auto-image">
                <img src="${fotografia}" alt="${marca} ${modelo}" class="car-image">
                </div>
                <div class="auto-details">
                <p><strong>Marca:</strong> ${marca}</p>
                <p><strong>Modelo:</strong> ${modelo}</p>
                <p><strong>Año:</strong> ${year}</p>
                <p><strong>Precio:</strong> ${precio}</p>
                <p><strong>Puertas:</strong> ${puertas}</p>
                <p><strong>Color:</strong> ${color}</p>
                <p><strong>Transmisión:</strong> ${transmision}</p>
                </div>
                `;
        
                // Insertar HTML en el contenedor
                autoContainer.innerHTML = autoHTML;
        
                // Insertar el contenedor en el resultado
                Resultados.appendChild(autoContainer);

    });

}
//limpiar html
function limpiarHTML (){
    while(Resultados.firstChild){
        Resultados.removeChild(Resultados.firstChild);
    }
}

//llenar los años de select 
function llenarSelect (){
    for(let i = max; i>=min; i--){
        const opcion = document.createElement('option')
        opcion.value=i;
        opcion.textContent=i;
        year.appendChild(opcion); //esto agrega las opciones del año al select
    }
}

//Funcion en filtrar en base a la busqueda 

function filtarAutos () {
    // console.log('filtrando...');
    //esta es una funcion de alto nivel, es decir: esta funcion va tomar otra funcion
    const resultado = autos.filter( filtrarMarca ).filter(filtrarYear).filter(filtrarMinino).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtarTrasmicion).filter(filtrarColor); //gracias a channing de js podemos filtrar por la marca, luego por el año y asi sucesivamente 
    // console.log(resultado);
    if(resultado.length){
        MostrarAustos(resultado);
    }else{
        NoResultado();
    }
   
}

function filtrarMarca(auto){
    // console.log(auto);
    const {marca} = datosBusqueda;
    if(marca){
        return auto.marca === marca;
    }
    return auto; //mantener la referencia 
}

function filtrarYear(auto){
const{year}=datosBusqueda;
//por que me devuelve un arreglo vacio 
// console.log(typeof year);
// console.log(typeof auto.year); //los datos que vienen de formulario son tipo string siempre 
if(year){
    return auto.year === year;
}
return auto;

}

function filtrarMinino(auto){
    const{minimo}=datosBusqueda;

    if(minimo){
        return auto.precio >= minimo;
    }
    return auto;
}

function filtrarMaximo(auto){
    const{maximo}=datosBusqueda;

    if(maximo){
        return auto.precio <= maximo;
    }
    return auto;
}

function filtrarPuertas(auto){
    const{puertas}=datosBusqueda;

    if(puertas){
        return auto.puertas === puertas;
    }
    return auto;
}

function filtarTrasmicion(auto){
    const{transmision}=datosBusqueda;

    if(transmision){
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto){
    const{color}=datosBusqueda;

    if(color){
        return auto.color === color;
    }
    return auto;
}
function NoResultado() {
    limpiarHTML();
    const NoResultado = document.createElement('div');
    NoResultado.classList.add('alert', 'error','auto-container', 'row');
    NoResultado.textContent = 'No hay resultados';
    Resultados.appendChild(NoResultado);
}