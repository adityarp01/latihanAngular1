import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, Input} from '@angular/core';
import { Perpustakaan } from '../perpustakaan-model';
import { PerpustakaansService } from '../perpustakaans.service';

@Component({
  selector: 'app-perpustakaan-add',
  templateUrl: './perpustakaan-add.component.html',
  styleUrls: ['./perpustakaan-add.component.css'],
  providers: [PerpustakaansService]
})
export class PerpustakaanAddComponent implements OnInit {
	
	//@ViewChild('inputQty')inputQty: ElementRef;
	@Output() perpustakaanAdded = new EventEmitter<Perpustakaan>();
	inputInfo: Perpustakaan =  new Perpustakaan();
	@Input() perpustakaanChild: Perpustakaan;
	@Input() perpustakaanEditParent: Perpustakaan;
	
  constructor(private perpustakaanServis: PerpustakaansService) { }

  ngOnInit() {
  }
  
  tambahBuku(inputnamaBuku: HTMLInputElement){
	//console.log(this.inputInfo);
	//console.log(inputnamaBuku.value);
	//console.log(this.qty.nativeElement.value);
	//this.perpustakaanAdded.emit(this.inputInfo);
	//this.inputInfo = new Perpustakaan();
	
	this.perpustakaanAdded.emit(this.perpustakaanServis.convertPerpustakaan(this.inputInfo));
	this.inputInfo = new Perpustakaan();
  }

}
