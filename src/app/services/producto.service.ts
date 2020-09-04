import { Injectable } from '@angular/core';
import { FORMERR } from 'dns';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Producto } from '../modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos:Array<Producto> = [{
    "id": "1",
    "nombre": "Celular",
    "precio": 1500,
    "cantidad": 10,
    "imagen": "https://ar.celulares.com/fotos/tecno-camon-15-pro-86037-m.jpg" 
  },
  {
    "id": "2",
    "nombre": "Tablet",
    "precio": 3000,
    "cantidad": 3,
    "imagen": "https://thumb.pccomponentes.com/w-220-220/articles/15/157938/1.jpg"
    
    
    },
    {
      "id": "3",
      "nombre": "tv",
      "precio": 5600,
      "cantidad": 0,
      "imagen": "https://images.samsung.com/is/image/samsung/latin-fhd-t5300-un43t5300apxpa-frontblack-229166470?$PD_GALLERY_L_JPG$"
      
      
      }]
 
  public carrito: Array<Producto> = [];
  constructor() { }
  
  public obtenerTodos ()
  {
    return this.productos;
  }
  public obtenerPorId(id:String) {
    for (let prod of this.productos) {
      if (prod.id == id)
        return prod;
    }
  }
  public agregar(prod: Producto) {
    this.productos.push(prod);
  }
}

