import { Component } from '@angular/core';

@Component({
  selector: 'app-requested-books',
  templateUrl: './requested-books.component.html',
  styleUrl: './requested-books.component.css'
})
export class RequestedBooksComponent {

  Requestedbooks = [
    {
      title: 'Unity in Action',
      isbn: '161729232X',
      pageCount: 0,
      thumbnailUrl:
        'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hocking.jpg',
      status: 'MEAP',
      authors: ['Joseph Hocking'],
      categories: [],
      requestDate: '10 Oct 2022',
      requestedBy: 'Nokwanda',
    },
    {
      title: 'Learn Git in a Month of Lunches',
      isbn: '1617292419',
      pageCount: 0,
      thumbnailUrl:
        'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg',
      status: 'MEAP',
      authors: ['Rick Umali'],
      categories: [],
      requestDate: '10 Oct 2022',
      requestedBy: 'Tlangelani',
    },
    {
      title: 'Express.js in Action',
      isbn: '1617292427',
      pageCount: 0,
      thumbnailUrl:
        'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hahn.jpg',
      status: 'MEAP',
      authors: ['Evan M. Hahn'],
      categories: [],
      requestDate: '10 Oct 2022',
      requestedBy: 'Nokwadssdnda',
    },
    {
      title: 'Express.js in Action',
      isbn: '1617292427',
      pageCount: 0,
      thumbnailUrl:
        'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hahn.jpg',
      status: 'MEAP',
      authors: ['Evan M. Hahn'],
      categories: [],
      requestDate: '10 Oct 2022',
      requestedBy: 'Nokwadssdnda',
    },
    {
      title: 'Unity in Action',
      isbn: '161729232X',
      pageCount: 0,
      thumbnailUrl:
        'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hocking.jpg',
      status: 'MEAP',
      authors: ['Joseph Hocking'],
      categories: [],
      requestDate: '10 Oct 2022',
      requestedBy: 'Nokwanda',
    },
    {
      title: 'Learn Git in a Month of Lunches',
      isbn: '1617292419',
      pageCount: 0,
      thumbnailUrl:
        'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg',
      status: 'MEAP',
      authors: ['Rick Umali'],
      categories: [],
      requestDate: '10 Oct 2022',
      requestedBy: 'Tlangelani',
    },
  ]
}
