import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute, RouteConfigLoadEnd, Router } from '@angular/router';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'admin-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponents implements OnInit {
 product: Product;
  private id: string;
  constructor(private adminService: AdminService, private route: ActivatedRoute, private router: Router) {
    route.params.subscribe(params =>
      { 
        this.id = params['id'];
      })
    }
       
  ngOnInit(): void {
    this.adminService.viewProductDetail(this.id).pipe(first()).subscribe(data => {
      if(data.status === 200) {
          this.product = data.result;
      }
      else{
        console.log("Error");
      }
    })

  }

  approveProduct(product: Product): void{
    this.adminService.approveProduct(product._id)
    .subscribe(
      data => {
        this.adminService.subject.next(product);
      console.log(data.result);
      })
    this.router.navigate(['admin/list-products']);
  };

}
