//E-commerce
//Construcción de Array productos de artículos a vender.

class producto {
    constructor(sku, categoria, nombre, precio) {
        this.sku = parseInt(sku);
        this.categoria = categoria;
        this.nombre = nombre;
        this.precio = precio;
    }

}

let productos = [];

productos.push(new producto(101, "Pulsera", "Colina", 40));
productos.push(new producto(102, "Collar", "Laguna", 30));
productos.push(new producto(103, "Aro", "Chochis", 20));
productos.push(new producto(104, "Diadema", "Taperas", 50));

//productos en stock

console.log("Productos en stock son: ");
for (const objeto of productos) {
    console.log(objeto.nombre);
}

//Ordenamos el Array productos por precio, de menor a mayor
let ordenadosPorPrecio = productos.sort(function (a, b) {
    return a.precio - b.precio;
});

console.log(ordenadosPorPrecio);

for (const producto of ordenadosPorPrecio) {
    console.log(producto.precio);
}
//Ingreso de SKU number para hacer la compra
let compra =parseInt (prompt("Ingrese SKU number de producto de la lista anterior"));

if (productObj = productos.find(({sku})=> sku === compra)) {
    let {categoria, nombre, precio} = productObj;
console.log("Usted agrego la/el ",categoria, "llamad@",nombre, "con precio final $", precio);
}else{
    console.log("SKU number inexistente")
}