import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}
  title = 'FrontEnd';
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Nhà Hàng',
        icon: 'pi pi-fw pi-home',
        command: () => this.router.navigate(['/restaurant']),
      },
      {
        label: 'Quyền',
        icon: 'pi pi-fw pi-user-edit',
        command: () => this.router.navigate(['/role']),
      },
      {
        label: 'Tình Trạng',
        icon: 'pi pi-fw pi-flag',
      },
      {
        label: 'Khu Vực',
        icon: 'pi pi-fw pi-share-alt',
      },
      {
        label: 'Đơn vị',
        icon: 'pi pi-fw pi-share-alt',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Bookmark',
                icon: 'pi pi-fw pi-bookmark',
              },
              {
                label: 'Video',
                icon: 'pi pi-fw pi-video',
              },
            ],
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash',
          },
          {
            separator: true,
          },
          {
            label: 'Export',
            icon: 'pi pi-fw pi-external-link',
          },
        ],
      },
      {
        label: 'Thể loại',
        icon: 'pi pi-fw pi-list',
      },
      {
        label: 'Nhân sự',
        icon: 'pi pi-fw pi-user',
      },
      {
        label: 'Bàn ăn',
        icon: 'pi pi-fw pi-table',
      },
      {
        label: 'Thức ăn',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Bookmark',
                icon: 'pi pi-fw pi-bookmark',
              },
              {
                label: 'Video',
                icon: 'pi pi-fw pi-video',
              },
            ],
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash',
          },
          {
            separator: true,
          },
          {
            label: 'Export',
            icon: 'pi pi-fw pi-external-link',
          },
        ],
      },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-power-off',
      },
    ];
  }
}
