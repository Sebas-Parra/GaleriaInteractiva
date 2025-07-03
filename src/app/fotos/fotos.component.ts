import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../services/supabase.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-fotos',
  imports: [NgFor],
  templateUrl: './fotos.component.html',
  styleUrl: './fotos.component.scss'
})
export class FotosComponent implements OnInit{
  imagenes: any[] = [];

  constructor(private supabaseService: SupabaseService) {}

  async ngOnInit() {
  const datos = await this.supabaseService.obtenerImagenes();
  console.log('Datos recibidos desde Supabase:', datos);
  this.imagenes = datos;
}


}
