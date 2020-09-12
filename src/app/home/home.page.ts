import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../modelo/producto';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private productos;
  private carrito: Array<Producto> = [];
  private cantidad = 0;
  constructor(private prodSrv: ProductoService, private alertCont: AlertController, private loading: LoadingController) {
    this.carrito = this.prodSrv.carrito;
   /* let prod = new Producto();
    prod.id = "4";
    prod.cantidad = 3;
    prod.nombre = "led";
    prod.precio = 100;
    this.prodSrv.agregar(prod);*/
    //this.productos = prodSrv.obtenerTodos();
    
  }

  public  async ngOnInit() {
    const loading = await this.loading.create();
    loading.present();
    this.prodSrv.obtenerTodos().subscribe(datos => {
     
      this.productos = datos;
      loading.dismiss();
    })
   
  }



  public async verCarrito(){
    
    let total = 0;
    let cuerpo = " ";
    for (let prod of this.prodSrv.carrito) {
      cuerpo = cuerpo + prod.nombre + "\n";
      total = total + prod.precio;
    }
    const cuerpoAlert = {
      headear: "Título",
      subHeader: cuerpo,
      message: "Precio total " +total,
      buttons: ["Ok","Cancel"],
    };
    const alerta = await this.alertCont.create(cuerpoAlert);
  

    await alerta.present();
  }
}

