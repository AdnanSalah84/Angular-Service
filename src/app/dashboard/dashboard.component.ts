import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, VERSION } from '@angular/core';
//import { Observable } from 'rxjs/Rx';
import { Title } from '@angular/platform-browser';

import { Book } from "app/models/book";
import { Reader } from "app/models/reader";
//import { DataService } from 'app/core/data.service';
import { BookTrackerError } from '../models/bookTrackerError';
import { LoggerService } from 'app/core/logger.service';
import { DataService } from 'app/core/data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  allBooks: Book[];
  allReaders: Reader[];
  mostPopularBook: Book;

  constructor(private dataService: DataService,
    private title: Title,
    private route: ActivatedRoute,
    private loggerService: LoggerService) {

      this.loggerService.log('Creating the dashboard!');
  }

  ngOnInit() {
    this.allBooks = this.dataService.getAllBooks();
    this.dataService.getAllReaders()
      .subscribe(
        data => this.allReaders = data,
        err => console.log(err),
        () => this.loggerService.log('All done getting readers!')
      );
    this.mostPopularBook = this.dataService.mostPopularBook;

    this.loggerService.log('Done with dashboard initialization')
  }

  deleteBook(bookID: number): void {
    console.warn(`Delete reader not yet implemented (readerID: ${bookID}).`);
    // this.dataService.deleteBook(bookID)
    //   .subscribe(
    //     (data: void) => {
    //       let index: number = this.allBooks.findIndex(book => book.bookID === bookID);
    //       this.allBooks.splice(index, 1);
    //     },
    //     (err: any) => console.log(err)
    //   );
  }

  deleteReader(readerID: number): void {
    console.warn(`Delete reader not yet implemented (readerID: ${readerID}).`);
  }

}
