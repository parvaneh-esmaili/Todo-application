import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TodoForListModel, TodoForSaveModel } from '../_models/todo.model';
import { environment } from '../../environments/environments';


@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private ApiUrl = environment.apiUrl + '/auth/local';

  constructor(private http: HttpClient) {}

  //----------Get todos----------//
  GetTodo(): Observable<TodoForListModel[]> {
    return this.http
      .get<{ data: TodoForListModel[] }>(this.ApiUrl)
      .pipe(map((response) => response.data || []));
  }

  //----------Add a new todo----------//
  AddTodo(newTodo: TodoForSaveModel): Observable<TodoForListModel> {
    console.log(newTodo);
    return this.http
      .post<{ data: TodoForListModel }>(this.ApiUrl, { data: newTodo })
      .pipe(map((response) => response.data));
  }


  //----------Delete todo----------//
  DeleteTodo(documentId: string): Observable<any> {
    return this.http
      .delete(`${this.ApiUrl}/${documentId}`);
  }

  //----------Get todo by its DocumentId----------//
  GetTodoByDocumentId(documentId: string): Observable<{ data: TodoForListModel }> {
    return this.http
      .get<{ data: TodoForListModel }>(`${this.ApiUrl}/${documentId}`);
  }

  //----------Edit Todo----------//
  EditTodo(todoForUpdate: TodoForListModel): Observable<TodoForListModel> {
    const todo = {
    title: todoForUpdate.title,
    description: todoForUpdate.description,
    };
   return this.http
    .put<{ data: TodoForListModel }>(`${this.ApiUrl}/${todoForUpdate.documentId}`, { data: todo })
    .pipe(map(res => res.data));
   }
}