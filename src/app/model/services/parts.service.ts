import { Injectable } from '@angular/core';
import { Part } from '../entities/part';

@Injectable({
  providedIn: 'root'
})
export class PartsService {
  public listOfParts : Part[] = [];

  constructor(){
    let p1 : Part = new Part("Placa de vídeo", "NVidia", "RTX 4090", "CUDA Core 16384", "High-end");
    let p2 : Part = new Part("Processador", "Intel", "i9-13900KS", "6 GHz", "High-end");
    this.listOfParts.push(p1);
    this.listOfParts.push(p2);
  }

  getAllParts(): Part[]{
    return this.listOfParts;
  }

  getByIndex(index: number): Part{
    return this.listOfParts[index];
  }
}
