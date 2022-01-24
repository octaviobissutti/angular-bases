import { Component } from '@angular/core'; //Nuestro componente

@Component({ //Recibe un objeto con las siguientes propiedades
  selector: 'app-root', //Le vamos a indicar que seleccione el app-root definido en el index.html. Sería como el root en react.
  templateUrl: './app.component.html', //Definimos la ruta donde está ese selector para nuestro html.
  styleUrls: ['./app.component.css'] //Lo mismo hacemos con la ruta de los estilos
})
export class AppComponent {
 
}
