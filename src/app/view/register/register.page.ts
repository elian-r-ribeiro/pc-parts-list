import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PartsService } from 'src/app/model/services/parts.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public type! : string;
  public brand! : string;
  public model! : string;
  public definitions! : string;
  public power! : string;

  constructor(private alertController: AlertController, private partsService : PartsService, private router : Router){}

  ngOnInit() {
  }

  register(){
    if(this.type && this.brand && this.model && this.definitions && this.power){
      if(this.brand.length >= 5 && this.model.length >= 5 && this.definitions.length >= 5){
        
      }else{
        this.presentAlert('Erro!', 'Todos os campos devem conter no mínimo cinco caracteres!')
      }
    }else{
      this.presentAlert('Erro!', 'Todos os campos são obrigatórios!');
    }
  }

  async presentAlert(subHeader : string, message : string) {
    const alert = await this.alertController.create({
      header: 'Parts list',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
