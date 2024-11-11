import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, MenuModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  items: MenuItem[] | undefined;

  constructor(private router: Router){
    
  }

  ngOnInit() {
    this.items = [
        {
            label: 'Navigate',
            items: [
                {
                    label: 'Dashboard',
                    icon: 'pi pi-palette',
                    command: () => {
                      this.router.navigate(['/dashboard']);
                  }
                },
                {
                  label: 'Datatable',
                  icon: 'pi pi-palette',
                  command: () => {
                    this.router.navigate(['/datatable']);
                  }
                },
                {
                  label: 'Characters',
                  icon: 'pi pi-palette',
                  command: () => {
                    this.router.navigate(['/characters']);
                  }
                }                
            ]
        }
    ];
  }
}
