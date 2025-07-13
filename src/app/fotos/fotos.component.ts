import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../services/supabase.service';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-fotos',
  imports: [NgFor,NgIf],
  templateUrl: './fotos.component.html',
  styleUrl: './fotos.component.scss'
})
export class FotosComponent implements OnInit{
  imagenes: any[] = [];
  imagenSeleccionada: any = null;

  constructor(private supabaseService: SupabaseService) {}

  async ngOnInit() {
  const datos = await this.supabaseService.obtenerImagenes();
  console.log('Datos recibidos desde Supabase:', datos);
  this.imagenes = datos;
}

  abrirModal(imagen : any) {
    this.imagenSeleccionada = imagen; // Reiniciar la imagen seleccionada al abrir el modal
  }

  cerrarModal() {
    this.imagenSeleccionada = null; // Reiniciar la imagen seleccionada al cerrar el modal
  }


}
