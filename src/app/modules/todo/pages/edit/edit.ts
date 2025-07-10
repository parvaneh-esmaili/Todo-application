import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../../_services/todo';
import { TodoForListModel } from '../../../../_models/todo.model';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  imports: [FormsModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css'
})
export class Edit  implements OnInit {
  
  todoForUpdate: TodoForListModel = new TodoForListModel();

  documentId: string = '';

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.documentId = this.route.snapshot.paramMap.get('documentId')!;
    this.todoService.GetTodoByDocumentId(this.documentId).subscribe((response) => {
      this.todoForUpdate = response.data;
    });
  }

   editTodo() {
    this.todoService.EditTodo(this.todoForUpdate).subscribe(() => {
      console.log('done');
    });
  }
}