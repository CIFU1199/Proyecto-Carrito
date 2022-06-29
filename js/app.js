// la mayoria de elementos html van a ser const ya que es el mas usado
// variables 
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito=document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito= [];

// Listeners 
cargarEventListeners();

function cargarEventListeners(){
    //cuando agregas un curso cuando presionas "Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);
}

// funciones



// Función que añade el curso al carrito
function agregarCurso(e) {
    e.preventDefault();
    // Delegation para agregar-carrito
    if(e.target.classList.contains('agregar-carrito')) {
         const curso = e.target.parentElement.parentElement;
         // Enviamos el curso seleccionado para tomar sus datos
         leerDatosCurso(curso);
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
    
    // Revisa si un elemento ya existe en el carrito 
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if(existe){
        //actulizamos la cantidad
        const cursos = articulosCarrito.map( curso =>{ 
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso; // retorna el objeto actualizado 
            }else{
                curso; // retorna el objeto que no son actualizados 
            }
        } );
        articulosCarrito = [...cursos];
    }else{
        //Agregamos el curso al carrito 
        //agrega elementos al arreglo de carrito 
        articulosCarrito = [...articulosCarrito,infoCurso];
    }

    
    
    
    console.log(articulosCarrito);
    carritoHTML();
}


//muestra el carrito de  compras en html 

function carritoHTML(){
    //limpiar el HTML
    limpiarHTML();

    //Recorre el html
    articulosCarrito.forEach( curso => {
        const {imagen, titulo,precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>

            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>

        `;

        //agrega el html del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });
}

// Elimina los cursos del tbody

function limpiarHTML(){
    //forma lenta
   // contenedorCarrito.innerHTML = '';
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}