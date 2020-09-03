import { Component } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../modelo/producto';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private productos;
  private cantidad=0;
  constructor(private prodSrv: ProductoService) {
    let prod = new Producto();
    prod.id = "4";
    prod.cantidad = 3;
    prod.nombre = "led";
    prod.precio = 100;
    this.prodSrv.agregar(prod);
    this.productos = prodSrv.obtenerTodos();
  }
}

