import {Component, OnInit} from "@angular/core";
import {MenuItem} from "primeng/api";

@Component({selector: 'app-account', templateUrl: 'account.component.html'})
export class AccountComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Sua Conta',
        icon: 'pi pi-fw pi-file',
      },
      {
        label: 'Seus Cartões',
        icon: 'pi pi-fw pi-pencil',
      },
      {
        label: 'Investimentos',
        icon: 'pi pi-fw pi-user',
      },
      {
        label: 'Seguros',
        icon: 'pi pi-fw pi-calendar',
      },
      {
        label: 'Ajuda',
        icon: 'pi pi-fw pi-power-off'
      }
    ];
  }
}
