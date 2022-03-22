import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Restaurant } from '../models/restaurant.model';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styles: [
    `
      :host ::ng-deep .p-dialog .product-image {
        width: 150px;
        margin: 0 auto 2rem auto;
        display: block;
      }
    `,
  ],
  styleUrls: ['./restaurant.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class RestaurantComponent implements OnInit {
  constructor(
    private services: UserService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}
  public restaurants: Restaurant[] = [];

  public restaurantDialog = false;

  public newRestaurant: Restaurant = {
    id: 0,
    name: '',
    address: '',
    phone: '',
    description: '',
    created: new Date(),
    updated: new Date(),
    deleted: false,
  };

  public restaurant: Restaurant = Object.assign({}, this.newRestaurant);

  public submitted = true;

  public ngOnInit(): void {
    this.getAllRestaurant();
  }

  public getAllRestaurant() {
    this.services.getAllRestaurants().subscribe((data) => {
      this.restaurants = data;
      console.log('Restaurant: ', data);
    });
  }

  public editRestaurant(restaurant: Restaurant): void {
    console.log('edit restaurant: ', restaurant);
    this.restaurant = restaurant;
    this.restaurantDialog = true;
  }

  public deleteRestaurant(restaurant: Restaurant): void {
    console.log('delete restaurant: ', restaurant);
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.restaurants = this.restaurants.filter(val=>val.id !== restaurant.id);
        this.restaurant = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Products Deleted',
          life: 3000,
        });
      },
    });
  }

  public openNew(): void {
    console.log('openNew: ');
    this.restaurant = Object.assign({}, this.newRestaurant);
    this.restaurantDialog = true;
  }

  public hideDialog(cancel = true, success = true): void {
    console.log('hideDialog: ');
    this.restaurantDialog = false;
    this.submitted = false;
    // if (cancel) {
    //   this.messageService.add({
    //     severity: 'info',
    //     summary: 'Huỷ',
    //     detail: 'Không muốn thêm nữa!',
    //     life: 3000,
    //   });
    // } else if (success) {
    //   this.messageService.add({
    //     severity: 'succes',
    //     summary: 'Thành công',
    //     detail: 'Thêm mới nhà hàng thành công!',
    //     life: 3000,
    //   });
    // } else {
    //   this.messageService.add({
    //     severity: 'error',
    //     summary: 'Lỗi',
    //     detail: 'Thêm mới nhà bị lỗi!',
    //     life: 3000,
    //   });
    // }
  }

  public saveRestaurant(): void {
    this.submitted = true;
    console.log('saveRestaurant: ', this.restaurant);
    if (this.restaurant.id === 0) {
      this.services.postRestaurant(this.restaurant).subscribe(
        (data) => {
          console.log('return data = ', data);
          this.restaurants.push(data);
          this.hideDialog(false, true);
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Restaurant Created', life: 3000});
        },
        (error) => {
          console.log('error');
          this.hideDialog(false, false);
        }
      );
    } else {
      this.services.putRestaurant(this.restaurant).subscribe(
        (data) => {
          console.log('return data = ', data);
          this.hideDialog(false, true);
          this.getAllRestaurant();
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Restaurant Updated', life: 3000});
        },
        (error) => {
          console.log('error');
          this.hideDialog(false, false);
        }
      );
    }
  }
}
