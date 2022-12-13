import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ServiceDbService } from '../services/service-db.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  rdvForm = new FormGroup({
    practicien: new FormControl(''),
    date: new FormControl('')
  });
  constructor(private servicedb: ServiceDbService ) {
     
  }

  submit(){
    console.log(this.rdvForm.value)
    // this.servicedb.addRdv("2","2","4","235645")
  }
 
  
}
