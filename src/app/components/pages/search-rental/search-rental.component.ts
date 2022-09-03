import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-rental',
  templateUrl: './search-rental.component.html',
  styleUrls: ['./search-rental.component.scss']
})
export class SearchRentalComponent implements OnInit {

  texts: {title: string, description: string}[] = [
    {
      title: "Tu espacio, tus reglas",
      description: "¿Tienes cuartos en renta? Encuentra a alguien que se mude contigo - ¡ya sea por un mes o por un año!"
    },
    {title: "Mensajes seguros", description: "Tu información de contacto es privada al mensajear con roomies potenciales a través de la app o el sitio web de Roomi."},
    {title: "Verificamos antecedentes", description: "Conoce a la persona con la que vas a vivir. Puedes pedirle a roomies potenciales que completen una verificación de antecedentes antes de aplicar a tu anuncio."}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
