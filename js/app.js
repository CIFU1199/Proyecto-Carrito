// la mayoria de elementos html van a ser const ya que es el mas usado
// variables 
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito=document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito= [];

cargarEventListeners();

function cargarEventListeners(){
    //cuando agregas un curso cuando presionas "Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);
}

// funciones

function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
         
        leerDatosCurso(cursoSeleccionado);
    }
   
}
 
// lee el contenido del html al que le dimos clisck y extrae la información del curso 


function leerDatosCurso(curso){
    console.log(curso);

    // crear un objeto con el contenido del curso actual 
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    //agrega elementos al arreglo de carrito 

    articulosCarrito = [...articulosCarrito,infoCurso];

    console.log(articulosCarrito);
    carritoHTML();
}


//muestra el carrito de  compras en html 

function carritoHTML(){
    //limpiar el HTML


    //Recorre el html
    articulosCarrito.forEach( curso => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                ${curso.titulo}
            </td>
        `;

        //agrega el html del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });
}

// Elimina los cursos del tbody

function limpiarHTML(){
    //forma lenta
    //contenedorCarrito.innerHTML = '';
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}