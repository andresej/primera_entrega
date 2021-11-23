//E-commerce
//Construcción de Array productos de artículos a vender.

class producto {
    constructor(sku, categoria, nombre, precio) {
        this.sku = parseInt(sku);
        this.categoria = categoria;
        this.marca = marca.toUpperCase();
        this.precio = precio;
    }

    añadirIVA() {
        this.precio = this.precio * 1.21;
    }
}

let productos = [];

productos.push(new producto(101, "Pulseras", "Colina", 20));
productos.push(new producto(102, "Televisor", "Sony", 30));
productos.push(new producto(103, "Pulseras", "braun", 20));
productos.push(new producto(104, "Televisor", "samsung", 50));

//Mostramos las marcas en stock

console.log("Las marcas de los artículos en stock son: ");
for (const objeto of productos) {
    console.log(objeto.marca);
}

//Ordenamos el Array productos por precio, de menor a mayor
let productosOrdenadosPorPrecio = productos.sort(function (a, b) {
    return a.precio - b.precio;
});

console.log(productosOrdenadosPorPrecio);

for (i = 0; i < productosOrdenadosPorPrecio.length; i++) {
    console.log(productosOrdenadosPorPrecio[i].precio);
}

for (const producto of productosOrdenadosPorPrecio) {
    console.log(producto.precio);
}
