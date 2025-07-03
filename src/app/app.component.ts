import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TituloGaleriaComponent } from './titulo-galeria/titulo-galeria.component';
import { FotosComponent } from './fotos/fotos.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TituloGaleriaComponent, FotosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GaleriaInteractiva';
}
