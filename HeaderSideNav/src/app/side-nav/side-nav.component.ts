import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  @Input() sideNavStatus: boolean = false;

  list = [
    {
      number: '1',
      name: 'Home',
      icon: 'bi bi-house'
    },
    {
      number: '2',
      name: 'Analytics',
      icon: 'bi bi-graph-up-arrow'
    },
    {
      number: '3',
      name: 'Products',
      icon: 'bi bi-box'
    },
    {
      number: '4',
      name: 'Order',
      icon: 'bi bi-cart-check-fill'
    },
    {
      number: '5',
      name: 'Settings',
      icon: 'bi bi-gear-fill'
    },
    {
      number: '6',
      name: 'About',
      icon: 'bi bi-file-earmark-person'
    },
    {
      number: '7',
      name: 'Contact',
      icon: 'bi bi-person-lines-fill'
    }
  ]

}
