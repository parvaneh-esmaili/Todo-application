import { Component, OnInit, signal } from '@angular/core';
import { TodoService } from '../../../../_services/todo';
import { TodoForListModel } from '../../../../_models/todo.model';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-list',
  imports: [NgFor,RouterLink],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List implements OnInit {
  todo: TodoForListModel[] = [];
  today: Date = new Date();

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.GetTodo().subscribe((response) => {
      this.todo = response;
    });
  }

  deleteTodo(documentId: string) {
    this.todoService.DeleteTodo(documentId).subscribe(() => {
      this.todo = this.todo.filter((todo) => todo.documentId !== documentId);
    });
  }
}
