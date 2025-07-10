import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-todo',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class Todo {

}
