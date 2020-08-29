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
    "imagen": "http://dummyimage.com/102x217.jpg/dddddd/000000" 
  },
  {
    "id": "2",
    "nombre": "Tablet",
    "precio": 3000,
    "cantidad": 3,
    "imagen": "http://dummyimage.com/131x116.jpg/5fa2dd/ffffff"
    
    
    },
    {
      "id": "3",
      "nombre": "tv",
      "precio": 5600,
      "cantidad": 0,
      "imagen": "http://dummyimage.com/131x116.jpg/5fa2dd/ffffff"
      
      
      }]
 
 
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

