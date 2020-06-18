import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { first } from 'rxjs/operators';
import { Product} from '../../../model';

@Component({
  selector: 'admin-unapproved-products`',
  templateUrl: './unapproved-products.component.html',
  styleUrls: ['./unapproved-products.component.css']
})
export class UnapprovedProductsComponent implements OnInit {
  products: Product[];

  constructor(private adminService: AdminService) {
    
   }
   ngOnInit(): void {
    this.getUnapprovedProds();
    this.adminService.subject.subscribe( data=> {
      if(data!=null){
        this.getUnapprovedProds();
      }
    });

}
getUnapprovedProds(){
  this.adminService.getProducts()
  .pipe(first())
  .subscribe(data => {
    if(data){
      console.log("hello", data.result)
    }
    this.products = data.result;
  });
}
approveProduct(product: Product): void{
  this.adminService.approveProduct(product._id)
  .subscribe(data => {
    this.products = this.products.filter(prod => prod !== product);
  })
};


}
 