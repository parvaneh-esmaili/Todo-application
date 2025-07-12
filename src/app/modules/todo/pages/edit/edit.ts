import { Component, Inject, OnInit } from '@angular/core';
import { TodoService } from '../../../../_services/todo';
import { TodoForListModel } from '../../../../_models/todo.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  imports: [FormsModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css',
  standalone: true
})
export class Edit  implements OnInit {
  
  todoForUpdate: TodoForListModel = new TodoForListModel();
  documentId: string = '';

  constructor(
  private todoService: TodoService,
  private route: ActivatedRoute,
  private router: Router
) {}

  ngOnInit(): void {
    this.documentId = this.route.snapshot.paramMap.get('documentId')!;
    this.todoService.GetTodoByDocumentId(this.documentId).subscribe((response) => {
      this.todoForUpdate = response.data;
    });
  }

   editTodo() {
  this.todoService.EditTodo(this.todoForUpdate).subscribe({
    next: () => {
      console.log('Todo updated successfully');
      this.router.navigate(['/list']);
    },
    error: (err) => {
      console.error('Error updating todo', err);
    }
  });
}
}