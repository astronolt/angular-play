export class Posts {

   constructor(
      public userId?: number,
      public id?: number,
      public title: string = 'title',
      public body: string = 'body',
      public votes?: number
   ){}
}