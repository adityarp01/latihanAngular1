import { Component, OnInit } from '@angular/core';
import { Perpustakaan } from './perpustakaan-model';

@Component({
  selector: 'app-perpustakaan',
  templateUrl: './perpustakaan.component.html',
  styleUrls: ['./perpustakaan-component.css']
})
export class PerpustakaanComponent implements OnInit {
	
	perpustakaanList: Perpustakaan[] = [];
	perpustakaanEdit: Perpustakaan = new Perpustakaan();
  constructor() { }

  ngOnInit() {
  }
  onPerpustakaanAdded(perpustakaanInfo: Perpustakaan) {
  console.log(perpustakaanInfo);
	this.perpustakaanList.push(perpustakaanInfo);
  
  }
  
  onPerpustakaanEdit(perpustakaanInfo: Perpustakaan) {
	this.perpustakaanEdit = perpustakaanInfo;
	console.log(this.perpustakaanEdit);
  }

}
