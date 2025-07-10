export class TodoForListModel {
constructor(
  public id: number = 0,
  public title: string = '',
  public description: string = '',
  public documentId: string = '',
){}
  
}

export class TodoForSaveModel {
  
  constructor(

    public title: string = '',
    public description: string = '',
    public date: string = new Date().toISOString(),
  ) {
  }
}