import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from 'app/models/book';
import { OldBook } from 'app/models/oldBook';
import { allBooks } from '../data';
import { LoggerService } from 'app/core/logger.service';
import { DataService } from 'app/core/data.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styles: []
})
export class EditBookComponent implements OnInit {

  selectedBook: Book;

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private loggerService: LoggerService) { }

  ngOnInit() {
    let bookID: number = parseInt(this.route.snapshot.params['id']);
    this.selectedBook = this.dataService.getBookById(bookID);
  }

  setMostPopular(): void {
    this.dataService.setMostPopularBook(this.selectedBook);
    this.loggerService.log(`new most popular book: ${this.selectedBook.title}`);
  }

  saveChanges(): void {
    // this.dataService.updateBook(this.selectedBook)
    //   .subscribe(
    //     (data: void) => console.log(`${this.selectedBook.title} updated successfully.`),
    //     (err: any) => console.log(err)
    //   );
  }
}
