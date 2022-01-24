let formulario = document.getElementById("formulario");

let idCantidad = 0;

let productos = [];

formulario.addEventListener("submit", (e) => {
   e.preventDefault();
   capturarDatos();
});

function incrementarId(idCantidad) {}

const capturarDatos = () => {
   let nombre = document.getElementById("nombre").value;
   let precio = document.getElementById("precio").value;
   let cantidad = document.getElementById("cantidad").value;
   let categoria = document.getElementById("categoria").value;
   let id = Math.round(Math.random() * (100 - 1) + 1);

   let producto = {
      id,
      nombre,
      precio,
      cantidad,
      categoria,
   };

   console.log(producto);

   const key = JSON.parse(localStorage.getItem("Producto"));

   if (key !== null) {
      key.unshift(producto);
      localStorage.setItem("Producto", JSON.stringify(key));
   } else {
      productos.unshift(producto);
      localStorage.setItem("Producto", JSON.stringify(productos));
   }

   pintarDatos();
};

let listar = document.getElementById("lista");

const pintarDatos = () => {
   listar.innerHTML = "";
   let datos = JSON.parse(localStorage.getItem("Producto"));

   datos.map((productos) => {
      const { id, nombre, precio, cantidad, categoria } = productos;
      listar.innerHTML += `
            <tr>
                <th scope="row">${nombre}</th>
                <td>${precio}</td>
                <td>${cantidad}</td>
                <td>${categoria}</td>
                <td><button id="${id}" class="btn btn-danger">Eliminar</button></td>
            </tr> 
      `;
   });
};

document.addEventListener("DOMContentLoaded", pintarDatos);

listar.addEventListener("click", (e) => {
   const eliminar = e.target.classList.contains("btn-danger");
   const id = e.target.id;
   const datos = JSON.parse(localStorage.getItem("Producto"));
   const buscar = datos.find((data) => data.id === Number(id));

   if (eliminar) {
      datos.forEach((element, index) => {
         if (element.id === buscar.id) {
            datos.splice(index, 1);
            localStorage.setItem("Producto", JSON.stringify(datos));
            pintarDatos();
         }
      });
   }
});

// Prueba de buscador

// let cadena = "Esto es una prueba";
// let palabra = "prueba";

// let index = cadena.indexOf(palabra);

// if(index >= 0) {
//     console.log("la palabra existe dentro de la cadena y se encuentra en la posición " + index);
// } else {
//     console.log("la palabra no existe dentro de la cadena");
// }
