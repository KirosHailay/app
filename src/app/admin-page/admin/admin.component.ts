import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product} from '../../model';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  // products: Product[];
  constructor(private adminService: AdminService, private router: Router) {
    // if (this.adminService.getProducts()) { 
    //   this.router.navigate(['']);
     }

     ngOnInit(): void {
  //     this.adminService.getProducts()
  //     .pipe(first())
  //     .subscribe(data => {
  //       if(data){
  //         console.log("hello", data.result)
        }
        
  //       this.products = data.result;
  //     });
  // }

}
