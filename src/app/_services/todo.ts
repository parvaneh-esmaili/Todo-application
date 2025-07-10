import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TodoForListModel, TodoForSaveModel } from '../_models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'http://localhost:1337/api/todos';

  constructor(private http: HttpClient) {}

  //----------Get todos----------//
  GetTodo(): Observable<TodoForListModel[]> {
    return this.http
      .get<{ data: TodoForListModel[] }>(this.apiUrl)
      .pipe(map((response) => response.data || []));
  }

  //----------Add a new todo----------//
  AddTodo(newTodo: TodoForSaveModel): Observable<TodoForListModel> {
    console.log(newTodo);
    return this.http
      .post<{ data: TodoForListModel }>(this.apiUrl, { data: newTodo })
      .pipe(map((response) => response.data));
  }


  //----------Delete todo----------//
  DeleteTodo(documentId: string): Observable<any> {
    return this.http
      .delete(`${this.apiUrl}/${documentId}`);
  }

  //----------Get todo by its DocumentId----------//
  GetTodoByDocumentId(documentId: string): Observable<{ data: TodoForListModel }> {
    return this.http
      .get<{ data: TodoForListModel }>(`${this.apiUrl}/${documentId}`);
  }

  //----------Edit Todo----------//
  EditTodo(todoForUpdate: TodoForListModel): Observable<TodoForListModel> {
    const todo = {
    title: todoForUpdate.title,
    description: todoForUpdate.description,
    };
   return this.http
    .put<{ data: TodoForListModel }>(`${this.apiUrl}/${todoForUpdate.documentId}`, { data: todo })
    .pipe(map(res => res.data));
   }
}