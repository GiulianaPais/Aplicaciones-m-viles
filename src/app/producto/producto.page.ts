import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../modelo/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit { //implementar una interfase

  private producto =new Producto();
  
  constructor(private activeteRoute: ActivatedRoute,
  private prodSrv:ProductoService) { }

  ngOnInit() {
    this.activeteRoute.paramMap.subscribe(
      paramMap => {
        
        this.prodSrv.obtenerPorId(paramMap.get("id"))
          .subscribe(datos => {
            this.producto = datos;
          });
        
    });
  }
  public agregarCarrito(): void {
    this.prodSrv.carrito.push(this.producto);
   }
}
