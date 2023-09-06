import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Part } from 'src/app/model/entities/part';
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

  constructor(private partsService : PartsService, private router : Router){}

  ngOnInit() {
  }

  register(){
    if(this.type && this.brand && this.model && this.definitions && this.power){
      if(this.brand.length >= 5 && this.model.length >= 5 && this.definitions.length >= 5){
        let new_part = new Part(this.type, this.brand, this. model, this.definitions, this.power);
        this.partsService.registerPart(new_part)
        this.router.navigate(["/home"])
      }else{
        this.partsService.presentAlert('Erro!', 'Todos os campos devem conter no mínimo cinco caracteres e estarem selecionados!')
      }
    }else{
      this.partsService.presentAlert('Erro!', 'Todos os campos são obrigatórios!');
    }
  }
}
