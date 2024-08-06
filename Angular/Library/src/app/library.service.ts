import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Library } from './model1/library';



@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  url :string;
  library : Library;
  libraryArr : Library[];

  constructor(private http:HttpClient) {
    this.url="http://localhost:4091/library";
    this.library = new Library();
    this.libraryArr =  [];
    
  

   }
  insertLibrary(library :Library){
    this.http.post<Library>(this.url,library).subscribe();
    return "Library Details Added";
   

     
  }
  updateLibrary(library : Library){
    this.http.put<Library>(this.url+"/"+library.id,library).subscribe();
    return "Library Details Updated";
   
   
     
  }
  deleteLibrary(id: number){
    this.http.delete<Library>(this.url+"/"+id).subscribe();
    return "Library Details Deleted";
   
   
     
  }
  findLibrary(id : number){
    this.http.get<Library>(this.url+"/"+id).subscribe(data => this.library= data);
    return this.library;
   }
   findAllLibrary(){
    this.http.get<Library[]>(this.url).subscribe(data => this.libraryArr = data);

    return this.libraryArr;
   }
  

}