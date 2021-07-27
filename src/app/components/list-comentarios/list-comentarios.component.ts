import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/interfaces/Comentario';
@Component({
  selector: 'app-list-comentarios',
  templateUrl: './list-comentarios.component.html',
  styleUrls: ['./list-comentarios.component.css']
})
export class ListComentariosComponent implements OnInit {
  listComentarios:Comentario[]=[
    {titulo:"Angular",creador:"Erick",fechaCreacion: new Date(),texto:"Framework para crear SPA"},
    {titulo:"React",creador:"Joel",fechaCreacion: new Date(),texto:"Libreria para crear SPA"},
    {titulo:"NodeJs",creador:"Limon",fechaCreacion: new Date(),texto:"Framework para backend"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
