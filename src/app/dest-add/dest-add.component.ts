import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DestService } from '../service/dest.service';

@Component({
  selector: 'app-dest-add',
  templateUrl: './dest-add.component.html',
  styleUrls: ['./dest-add.component.css']
})
export class DestAddComponent implements OnInit {

  constructor(private service: DestService) { }
  empdata: any;
  ngOnInit(): void {
    this.service.GetbyCode('developer').toPromise().then(result => {
      this.empdata = result;
      this.designationform = new FormGroup({
        code: new FormControl(this.empdata.code),
        name: new FormControl(this.empdata.name)
      });
    }).catch(error => {

    }).finally(() => {

    });
  }
  SaveDes() {
    if (this.designationform.valid) {
      this.service.Save(this.designationform.value).subscribe(result => {

      });
    }
  }
  designationform = new FormGroup({
    code: new FormControl({ value: '', disabled: true }, Validators.required),
    name: new FormControl('', Validators.required)
  });

}
