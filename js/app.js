// la mayoria de elementos html van a ser const ya que es el mas usado
// variables 
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-cursos tbody');
const vaciarCarrito=document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
cargarEventListeners();

function cargarEventListeners(){
    //cuando agregas un curso cuando presionas "Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);
}

// funciones

function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        console.log(e.target);
    }
   
}