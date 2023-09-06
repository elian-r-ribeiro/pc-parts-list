import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Part } from 'src/app/model/entities/part';
import { PartsService } from 'src/app/model/services/parts.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  index! : number;
  type! : string;
  brand! : string;
  model! : string;
  definitions! : string;
  power! : string;
  part! : Part;
  isEditable : boolean = false;

  constructor(private alertController: AlertController, private actRoute : ActivatedRoute, private router: Router, private partsService : PartsService){}

  ngOnInit() {
    this.actRoute.params.subscribe((params_) => {
      if(params_["index"]){
        this.index = params_["index"];
      }

      this.part = this.partsService.getPartByIndex(this.index);
      this.type = this.part.type;
      this.brand = this.part.brand;
      this.model = this.part.model;
      this.definitions = this.part.definitions;
      this.power = this.part.power;
    })
  }

  toggle(){
    if(this.isEditable){
      this.isEditable = false;
    }else{
      this.isEditable = true;
    }
  }

  editPart(){
    if(this.type && this.brand && this.model && this.definitions && this.power){
      if(this.brand.length >= 5 && this.model.length >= 5 && this.definitions.length >= 5){
        let new_part = new Part(this.type, this.brand, this. model, this.definitions, this.power);
        this.partsService.updatePart(this.index, new_part)
        this.router.navigate(["/home"])
      }else{
        this.partsService.presentAlert('Erro!', 'Todos os campos devem conter no mínimo cinco caracteres e estarem selecionados!')
      }
    }else{
      this.partsService.presentAlert('Erro!', 'Todos os campos são obrigatórios!');
    }
  }

  confirmDelete(){
    this.presentConfirmAlert('Alerta!', 'Tem certeza que deseja deletar a parte?');
  }

  deletePart(){
    this.partsService.deletePart(this.index);
    this.router.navigate(['/home']);
  }

  async presentConfirmAlert(subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Lista de partes',
      subHeader: subHeader,
      message: message,
      buttons: [
        {text: 'Cancelar'},
        {text: 'Confirmar', role: 'confirmar', handler: (alert_action)=>{this.deletePart()}}
      ],
    });
  await alert.present();
  }
}
