import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrl: './new-book.component.css'
})
export class NewBookComponent {
 
  bookForm = new FormGroup({
     bookTitle:new FormControl("",Validators.required),
     bookAuthor: new FormControl("",Validators.required),
     bookIsbn:new FormControl("", Validators.required),
     bookCategory: new FormControl("", Validators.required),
     bookDescription: new FormControl("", Validators.required),
  })

  onSubmit(){
    if(this.bookForm.valid){
      console.log(this.bookForm.value)
      
    }
  }
}
