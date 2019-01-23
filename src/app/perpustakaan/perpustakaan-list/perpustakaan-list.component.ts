import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Perpustakaan } from '../perpustakaan-model';

@Component({
  selector: 'app-perpustakaan-list',
  templateUrl: './perpustakaan-list.component.html',
  styleUrls: ['./perpustakaan-list.component.css']
})
export class PerpustakaanListComponent implements OnInit {
	
	@Input() perpustakaanParent: Perpustakaan[];
	@Output() dariChildKeParent: EventEmitter<Perpustakaan> = new EventEmitter();
	


  constructor() { }

  ngOnInit() {
  }
  
  showname(idx:number){
	this.dariChildKeParent.emit(this.perpustakaanParent[idx]);
  }

}
