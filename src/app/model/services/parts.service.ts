import { Injectable } from '@angular/core';
import { Part } from '../entities/part';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PartsService {
  public listOfParts : Part[] = [];

  constructor(private alertController: AlertController){
    let p1 : Part = new Part("Placa de vídeo", "NVidia", "RTX 4090", "CUDA Core 16384", "High-end");
    let p2 : Part = new Part("Processador", "Intel", "i9-13900KS", "6 GHz", "High-end");
    this.listOfParts.push(p1);
    this.listOfParts.push(p2);
  }

  getAllParts(): Part[]{
    return this.listOfParts;
  }

  getPartByIndex(index: number): Part{
    return this.listOfParts[index];
  }

  registerPart(part : Part){
    this.listOfParts.push(part);
  }

  updatePart(index : number, new_part : Part){
    this.listOfParts[index] = new_part;
  }

  deletePart(index: number){
    this.listOfParts.splice(index, 1);
  }

  async presentAlert(subHeader : string, message : string) {
    const alert = await this.alertController.create({
      header: 'Lista de partes',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
