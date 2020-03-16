import {Component, OnInit} from '@angular/core';
import {PRODUCTOS_STOCK} from '../Clase/StockProductos';
import {Productos} from '../Clase/productos';
import {PRODUCTOS_SELECCIONADOS} from '../Clase/ProductosSeleccionados';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  producto1: Productos;
  producto2: Productos;
  productosStock = PRODUCTOS_STOCK;
  productoSeleccionado = PRODUCTOS_SELECCIONADOS;

  constructor() {
  }

  ngOnInit() {
  }
  // Manejador del evento "click" que asigna el producto seleccionado a la variable productoSeleccionado
  onClick(producto: Productos, index): void {
    this.producto1 = producto;
    producto.estado = true;
    this.productoSeleccionado.push(this.producto1);
    this.productosStock.splice(index, 1);
  }

  // Manejador del evento "click" que asigna el producto Deseleccionado a la variable productosStock
  // esta función es usada con los productos seleccionados
  onClick2(producto: Productos, index): void {
    this.producto2 = producto;
    producto.estado = false;
    this.productosStock.push(this.producto2);
    this.productoSeleccionado.splice(index, 1);
  }

}
