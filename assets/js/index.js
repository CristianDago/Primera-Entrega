// VARIABLES GLOBALES

const cardPropiedades = document.querySelector(".propiedades");	
const contadorBusqueda = document.querySelector("#contador");
const btnAgregarPropiedad = document.querySelector('#btnAgregarPropiedad');


// ARRAY

const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "./assets/img/casa_01.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "./assets/img/casa_02.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "./assets/img/casa_03.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
       "./assets/img/casa_04.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
       "./assets/img/casa_05.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
       "./assets/img/casa_06.jpg",
      rooms: 5,
      m: 500
    }
  ];


// FUNCIÓN FLECHA

const mostrarPropiedades = () => {

cardPropiedades.textContent = "";
	
// CICLO

for (const propiedad of propiedadesJSON) {
  cardPropiedades.innerHTML += 

  `
     <div class="col py-2">
          <div class="card">
              <img src="${propiedad.src}" class="card-img-top">
              <div class="card-body">
                  <h5 class="card-title">${propiedad.name}</h5>
                  <p class="card-text">Cuartos: ${propiedad.rooms}</p>
                  <p class="card-text">Metros: ${propiedad.m}</p>
              </div>
          </div>
      </div>
  `
}

// LENGHT

contadorBusqueda.innerHTML = (propiedadesJSON.length)

}


mostrarPropiedades();


// FUNCION ANÓNIMA

const filtro = function () {
	
	
let Dormitorios = (document.querySelector("#Dormitorios").value);
let Desde = (document.querySelector("#Desde").value);
let Hasta = (document.querySelector("#Hasta").value);	
	
	
let FiltroPropiedades = propiedadesJSON.filter(
    (propiedad) =>
      propiedad.rooms == Dormitorios &&
      propiedad.m >= Desde &&
      propiedad.m <= Hasta	
);	
	

if ( Dormitorios == "" || Desde == "" || Hasta == "" ){

  //ALERT
	
	alert("Debes llenar todos los campos");
	return ;	
	
} else if (FiltroPropiedades.length == 0) {
    alert("No se encontró ninguna propiedad en base a los filtros");
    return;
	 
 } else {
	
 cardPropiedades.innerHTML= "";	 
	  
for (const propiedad of FiltroPropiedades) {
 
cardPropiedades.innerHTML += ` 
 <div class="col py-2">
 <div class="card">
     <img src="${propiedad.src}" class="card-img-top">
     <div class="card-body">
         <h5 class="card-title">${propiedad.name}</h5>
         <p class="card-text">Cuartos: ${propiedad.rooms}</p>
         <p class="card-text">Metros: ${propiedad.m}</p>
     </div>
 </div>
</div>
    		`
contadorBusqueda.innerHTML = (FiltroPropiedades.length) }
	  
	console.log (FiltroPropiedades)  
	
  }

}

//FUNCION

function agregarNuevaPropiedad() {
  const nombre = prompt("Ingrese el nombre de la nueva propiedad:");
  const descripcion = prompt("Ingrese la descripción de la nueva propiedad:");
  const src = prompt("Ingrese la ruta de la imagen de la nueva propiedad:");
  const habitaciones = parseInt(prompt("Ingrese la cantidad de habitaciones de la nueva propiedad:"), 10);
  const metros = parseInt(prompt("Ingrese la cantidad de metros cuadrados de la nueva propiedad:"), 10);

  if (!nombre || !descripcion || !src || isNaN(habitaciones) || isNaN(metros)) {
    alert("Por favor, ingrese información válida para la nueva propiedad.");
    return;
  }

  const nuevaPropiedad = {
    name: nombre,
    description: descripcion,
    src: src,
    rooms: habitaciones,
    m: metros
  };

  propiedadesJSON.push(nuevaPropiedad);
  mostrarPropiedades(); 
}

btnAgregarPropiedad.addEventListener('click', agregarNuevaPropiedad);










