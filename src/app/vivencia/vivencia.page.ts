import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Storage } from '@ionic/storage-angular';
import { Filesystem, Directory } from '@capacitor/filesystem';

@Component({
  selector: 'app-vivencia',
  templateUrl: './vivencia.page.html',
  styleUrls: ['./vivencia.page.scss'],
})
export class VivenciaPage implements OnInit {

  titulo: string;
  descripcion: string;
  public vivencia = {};

  constructor(
    private storage: Storage,
    private activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.titulo = this.activatedRoute.snapshot.paramMap.get('titulo');
    this.vivencia = await this.storage.get(this.titulo);
  }

}
