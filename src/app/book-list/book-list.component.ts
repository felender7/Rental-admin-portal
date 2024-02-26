import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { NewBookComponent } from '../new-book/new-book.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  books = [
    
      {
        "_id": 1,
        "title": "Unlocking Android",
        "isbn": "1933988673",
        "pageCount": 416,
        "publishedDate": {
          "$date": "2009-04-01T00:00:00.000-0700"
        },
        "thumbnailUrl": "https://cdn.kobo.com/book-images/1ca9e3d7-67b0-436c-ad2f-4eac66cfb28f/180/1000/False/00-99-android-ithome.jpg",
        "shortDescription": "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system.",
        "longDescription": "Android is an open-source mobile phone platform based on the Linux operating system and developed by a consortium of developers known as the Open Handset Alliance. Written by developers who have been using the new Android mobile operating system from Google, this book shows you how to use the latest open-source Android operating system and build mobile applications.",
        "status": "PUBLISH",
        "authors": ["W. Frank Ableson", "Charlie Collins", "Robi Sen"],
        "categories": ["Open Source", "Mobile"]
      },
      {
        "_id": 2,
        "title": "The Pragmatic Programmer",
        "isbn": "020161622X",
        "pageCount": 352,
        "publishedDate": {
          "$date": "1999-10-20T00:00:00.000-0700"
        },
        "thumbnailUrl": "https://cdn.kobo.com/book-images/3acf53fb-7060-4957-8444-70662c064368/180/1000/False/the-pragmatic-programmer-from-journeyman-to-master-1.jpg",
        "shortDescription": "Your journey to mastery begins with the timeless wisdom of The Pragmatic Programmer.",
        "longDescription": "The Pragmatic Programmer is a classic that belongs on every programmer's bookshelf. Written by Dave Thomas and Andy Hunt, two experienced programmers and authors, this book covers a wide range of topics relevant to software development, from code organization to debugging techniques.",
        "status": "PUBLISH",
        "authors": ["Dave Thomas", "Andy Hunt"],
        "categories": ["Programming", "Software Development"]
      },
      {
        "_id": 3,
        "title": "A Handbook of Agile Software Craftsmanship",
        "isbn": "978-0132350884",
        "pageCount": 464,
        "publishedDate": {
          "$date": "2008-08-11T00:00:00.000-0700"
        },
        "thumbnailUrl": "https://cdn.kobo.com/book-images/39a7bd34-2e75-4172-a64f-c3ed7c367ee9/180/1000/False/clean-code-a-handbook-of-agile-software-craftsmanship-1.jpg",
        "shortDescription": "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees.",
        "longDescription": "Clean Code is divided into three parts. The first describes the principles, patterns, and practices of writing clean code. The second part consists of several case studies of increasing complexity. Each case study is an exercise in cleaning up code—of transforming a codebase that has some problems into one that is sound and efficient. The third part is the payoff: a single chapter containing a list of heuristics and “smells” gathered while creating the case studies. The result is a knowledge base that describes the way we think when we write, read, and clean code.",
        "status": "PUBLISH",
        "authors": ["Robert C. Martin"],
        "categories": ["Programming", "Software Development"]
      },
      {
        "_id": 4,
        "title": "Elements of Reusable Object-Oriented Software",
        "isbn": "978-0201633610",
        "pageCount": 416,
        "publishedDate": {
          "$date": "1994-11-10T00:00:00.000-0800"
        },
        "thumbnailUrl": "https://cdn.kobo.com/book-images/7405420c-5d6a-452e-9980-9bd2e2dee582/180/1000/False/design-patterns-elements-of-reusable-object-oriented-software-1.jpg",
        "shortDescription": "Capturing a wealth of experience about the design of object-oriented software, four top-notch designers present a catalog of simple and succinct solutions to commonly occurring design problems.",
        "longDescription": "Design Patterns is a modern classic in the literature of object-oriented development, offering timeless and elegant solutions to common problems in software design. It describes patterns for managing object creation, composing objects into larger structures, and coordinating control flow between objects.",
        "status": "PUBLISH",
        "authors": ["Erich Gamma", "Richard Helm", "Ralph Johnson", "John Vlissides"],
        "categories": ["Programming", "Software Development"]
      },
      {
        "_id": 5,
        "title": "The Hitchhiker's Guide to the Galaxy",
        "isbn": "978-0345391803",
        "pageCount": 224,
        "publishedDate": {
          "$date": "1979-10-12T00:00:00.000-0700"
        },
        "thumbnailUrl": "https://cdn.kobo.com/book-images/aa60f6f0-1a2e-4527-aed3-1c35ea607532/180/1000/False/the-ultimate-hitchhiker-s-guide-to-the-galaxy-1.jpg",
        "shortDescription": "Seconds before Earth is demolished to make way for a galactic freeway, Arthur Dent is plucked off the planet by his friend Ford Prefect.",
        "longDescription": "The Hitchhiker's Guide to the Galaxy is a comic science fiction series created by Douglas Adams. It follows the misadventures of Arthur Dent, an unwitting human who is saved from Earth's destruction just before it happens. Arthur's rescuer, Ford Prefect, turns out to be an alien researcher for the titular guidebook. The series is known for its humor, absurdity, and satirical commentary on various aspects of society.",
        "status": "PUBLISH",
        "authors": ["Douglas Adams"],
        "categories": ["Science Fiction", "Humor"]
      },
      {
        "_id": 6,
        "title": "A Brief History of Humankind",
        "isbn": "978-0062316097",
        "pageCount": 464,
        "publishedDate": {
          "$date": "2014-02-10T00:00:00.000-0800"
        },
        "thumbnailUrl": "https://cdn.kobo.com/book-images/20432d98-5dba-4d65-ba81-ade961eaf887/180/1000/False/sapiens-a-brief-history-of-humankind-by-yuval-noah-harari-trivia-on-books.jpg",
        "shortDescription": "Discover the story of our species, from the emergence of Homo sapiens in Africa to the political and technological revolutions of the 21st century.",
        "longDescription": "Sapiens: A Brief History of Humankind is a popular science book by Yuval Noah Harari. It explores the history of the human species from the emergence of Homo sapiens in Africa to the present day. The book covers the Cognitive Revolution, the Agricultural Revolution, the unification of humankind, the Scientific Revolution, and more.",
        "status": "PUBLISH",
        "authors": ["Yuval Noah Harari"],
        "categories": ["History", "Science"]
      },
      {
        "_id": 7,
        "title": "The Great Gatsby",
        "isbn": "978-0743273565",
        "pageCount": 180,
        "publishedDate": {
          "$date": "1925-04-10T00:00:00.000-0700"
        },
        "thumbnailUrl": "https://cdn.kobo.com/book-images/fb96eabf-4930-4a3a-b025-eaf2e57d18cb/180/1000/False/the-great-gatsby-194.jpg",
        "shortDescription": "Experience the decadence and disillusionment of the Jazz Age through the eyes of Jay Gatsby.",
        "longDescription": "The Great Gatsby is a novel by F. Scott Fitzgerald that explores themes of decadence, idealism, and excess in the Jazz Age of the 1920s. It is considered one of the greatest American novels and is a classic work of modernist literature. The story is narrated by Nick Carraway, who becomes entangled in the lives of his mysterious neighbor Jay Gatsby and the beautiful Daisy Buchanan.",
        "status": "PUBLISH",
        "authors": ["F. Scott Fitzgerald"],
        "categories": ["Fiction", "Classics"]
      },
      {
        "_id": 8,
        "title": "To Kill a Mockingbird",
        "isbn": "978-0061120084",
        "pageCount": 336,
        "publishedDate": {
          "$date": "1960-07-11T00:00:00.000-0700"
        },
        "thumbnailUrl": "https://cdn.kobo.com/book-images/4e1af857-e0e8-45fa-8922-e4bff584beca/180/1000/False/to-kill-a-mockingbird-4.jpg",
        "shortDescription": "Harper Lee's classic novel explores racial injustice and moral growth in the American South during the 1930s.",
        "longDescription": "To Kill a Mockingbird is a novel by Harper Lee that addresses issues of racial injustice and moral growth in the American South during the 1930s. The story is told through the eyes of Scout Finch, a young girl whose father, Atticus Finch, is a lawyer defending an innocent Black man accused of raping a white woman.",
        "status": "PUBLISH",
        "authors": ["Harper Lee"],
        "categories": ["Fiction", "Classics"]
      },
      {
        "_id": 9,
        "title": "The Alchemist",
        "isbn": "978-0061120084",
        "pageCount": 208,
        "publishedDate": {
          "$date": "1988-01-01T00:00:00.000-0800"
        },
        "thumbnailUrl": "https://cdn.kobo.com/book-images/5967e7fb-edc8-403b-9989-f8aab7b3ed89/180/1000/False/the-alchemist-38.jpg",
        "shortDescription": "Follow Santiago's journey as he seeks his personal legend and discovers the true meaning of life.",
        "longDescription": "The Alchemist is a novel by Brazilian author Paulo Coelho. It tells the story of Santiago, a shepherd boy, who embarks on a journey to find a treasure in the Egyptian pyramids. Along the way, he learns important life lessons about destiny, dreams, and the pursuit of one's personal legend.",
        "status": "PUBLISH",
        "authors": ["Paulo Coelho"],
        "categories": ["Fiction", "Philosophy"]
      },
      {
        "_id": 10,
        "title": "The Martian",
        "isbn": "978-0553418026",
        "pageCount": 384,
        "publishedDate": {
          "$date": "2014-02-11T00:00:00.000-0800"
        },
        "thumbnailUrl": "https://cdn.kobo.com/book-images/eff705f6-4dc0-4589-a45e-e53c3ab87085/180/1000/False/the-martian-20.jpg",
        "shortDescription": "Stranded on Mars, astronaut Mark Watney must use his ingenuity to survive until rescue is possible.",
        "longDescription": "The Martian is a science fiction novel by Andy Weir. It follows the story of astronaut Mark Watney, who becomes stranded on Mars after a dust storm forces his crew to evacuate. With limited supplies, Watney must rely on his ingenuity and resourcefulness to survive and signal for rescue.",
        "status": "PUBLISH",
        "authors": ["Andy Weir"],
        "categories": ["Science Fiction"]
      }
    ]

     constructor(public dialog:MatDialog){}
    openDialog(){
     const dialogRef = this.dialog.open(NewBookComponent,{
      width: '800px',
     })
    }
}
