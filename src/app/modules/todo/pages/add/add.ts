import { Component, inject } from '@angular/core';
import { TodoForListModel, TodoForSaveModel } from '../../../../_models/todo.model';
import { TodoService } from '../../../../_services/todo';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  imports: [FormsModule],
  templateUrl: './add.html',
  styleUrl: './add.css'
})
export class Add {
    newTodo: TodoForSaveModel = new TodoForSaveModel(); 
    todos: TodoForListModel[] = []; 

  private todoService: TodoService = inject(TodoService);
  private router = inject(Router);

  constructor() {}

  ngOnInit() {
    this.todoService.GetTodo().subscribe((todo) => {
      this.todos = todo;
    });
  }

  saveTodo() {
    this.todoService.AddTodo(this.newTodo).subscribe(
      (response) => {
        this.todos.push(response); 
        this.newTodo = new TodoForSaveModel(); 
        this.router.navigate(['/list']); 
      },
    );
  }
}

