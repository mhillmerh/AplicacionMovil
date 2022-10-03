import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  

  constructor(private mibasededatos : Storage) { 



  }

  async ngOnInit() {
    let obj = {
      articulo: "pelota de futbol",
      precio: 200,
      fecha: new Date()
    }
    await this.mibasededatos.set("articulo", obj);


  }
  
 
}

export class imageSlider{
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    loop: true,
    autoplay: {
          delay: 400,
          reverseDirection: true
    }
  };
  constructor() {}




}


