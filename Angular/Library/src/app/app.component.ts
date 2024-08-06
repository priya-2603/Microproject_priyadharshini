import { Component } from '@angular/core';
import { Library } from './model1/library';
import { LibraryService } from './library.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  //title: string = '';
  library:Library;
  result:string;
  libraryArr:Library[];
  flag:boolean;

  constructor(private service:LibraryService){
    this.library=new Library();
    this.result="";
    this.libraryArr=[];
    this.flag=false;
  }
  insertLibrary(data:any){
    this.library.id=data.id;
    this.library.bookTitle=data.bookTitle;
    this.library.bookAuthor=data.bookAuthor;
    this.library.bookISBN=data.bookISBN;
   

    this.result=this.service.insertLibrary(this.library);
  }
  updateLibrary(data:any){
    this.library.id=data.id;
    this.library.bookTitle=data.bookTitle;
    this.library.bookAuthor=data.bookAuthor;
    this.library.bookISBN=data.bookISBN;
  
    this.result=this.service.updateLibrary(this.library);
}
deleteLibrary(data:any){
  this.result=this.service.deleteLibrary(data.id);
}
findLibrary(data:any){
  this.library=this.service.findLibrary(data.id);
  this.result=this.library.id+" " +this.library.bookTitle+" "+this.library.bookAuthor+" "+this.library.bookISBN;
}
findAllLibrary(){
  this.libraryArr=this.service.findAllLibrary();
  this.flag=true;
}
}