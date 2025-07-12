import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "../../components/header/header";

@Component({
  selector: 'app-todo',
  imports: [RouterOutlet, Header],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class Todo {

}
