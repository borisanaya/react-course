'use strict';

let books = [];
let cadenaDOM = "";
let contador = 0;
let librosSel = new Array();

// Cargar datos desde el archivo JSON
fetch('./data/books.json')
    .then(response => response.json())
    .then(data => {
        books = data;
        inicializarApp();
    })
    .catch(error => console.error('Error loading books:', error));

// Función principal para inicializar la aplicación
const inicializarApp = () => {
    //crear el DOM panel Izquierda
    books.forEach((book, i) => {
        cadenaDOM +=
            `<div>
            <img src="images/${book.img}" height="170" width="108" id="img${i}"><br/>
            <strong>${book.title}</strong><br/>
            ${book.author}   
        </div>`;
    });
    document.getElementById("izquierda").innerHTML = cadenaDOM;

    //una vez contruido el DOM de imágenes creamos escuchadores
    books.forEach((book, i) => {
        document.getElementById(`img${i}`).addEventListener('click', () => {
            contador++;
            document.getElementById("contador").innerHTML = contador;
            librosSel.push(book);
            panelDerecha();
        });
    });

    //escuchador para mostrar/ocultar carrito
    document.getElementById("contador").addEventListener('click', () => {
        muestra_oculta("derecha");
    });

    //inicialmente oculto el div
    muestra_oculta("derecha");
};

//función para DOM panel derecha
const panelDerecha = () => {
    let contenido = "";
    librosSel.forEach((book, i) => {
        contenido +=
            `<li class="list-group-item">
            <img class="img-circle media-object pull-left" src="./images/${book.img}" width="32" height="32">
            <div class="media-body">
                <strong>${book.title}</strong>
                <p>${book.author}</p>
                <button class="btn btn-mini btn-default" id="btnMinus${i}">
                    ❌
                </button>  
            </div>
            </li>`;
    });
    document.getElementById("lista").innerHTML = contenido;

    //escuchadores botones minus
    librosSel.forEach((book, i) => {
        document.getElementById(`btnMinus${i}`).addEventListener('click', () => {
            eliminarLibroSel(i);
        });
    });
}

const eliminarLibroSel = (i) => {
    librosSel.splice(i, 1); //eliminamos el elemento del array
    contador--;
    document.getElementById("contador").innerHTML = contador;
    panelDerecha();
}

//función muestra/oculta div
const muestra_oculta = id => {
    if (document.getElementById) { //se obtiene el id
        var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
        el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
    }
}
