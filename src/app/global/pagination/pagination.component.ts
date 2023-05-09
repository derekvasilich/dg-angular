import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
    @Input() disabled: boolean = false;
    @Input() currentPage: number = 1;
    @Input() totalPages: number = 0;
    @Input() isLoading: boolean;
    @Output() pageChange = new EventEmitter<number>();
    pageKeys: number[] = [];

  constructor(
  ) { 
    this.calcPageKeys();
  }  

  pageClasses(key: number): String {
    let classes: String = this.currentPage === key ? 'active' : '';
    classes += key >= this.totalPages ? ' disabled' : ''
    return classes;
  }

  calcPageKeys() {
    let first: number = this.currentPage - 5;
    if (first < 0) {
        first = 0;
    }
    this.pageKeys = [...Array(10).keys()].map((i) => i + first);    
  }

  previous() {
    this.pageChange.emit(this.currentPage-1);
  }

  page(page: number) {
    this.pageChange.emit(page);
  }
  
  next() {
    this.pageChange.emit(this.currentPage+1);
  }

  ngOnInit(): void {
    this.calcPageKeys();
  }

  ngOnChanges(): void {
    this.calcPageKeys();
  }

}
