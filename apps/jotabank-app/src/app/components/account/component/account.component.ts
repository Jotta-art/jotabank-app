import {Component, OnInit} from "@angular/core";
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";

@Component({selector: 'app-account', templateUrl: 'account.component.html', styleUrls: ['account.component.scss']})
export class AccountComponent implements OnInit {
  items: MenuItem[] = [];
  showAbaConta = true;
  showAbaCartoes = false;
  showPanelExtrato = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Sua Conta',
        icon: 'pi pi-fw pi-file',
        command: () => {
          this.showAbaConta = true;
          this.showAbaCartoes = false;
          this.showPanelExtrato = false;
        }
      },
      {
        label: 'Seus Cartões',
        icon: 'pi pi-fw pi-pencil',
        command: () => {
          this.showAbaCartoes = true;
          this.showAbaConta = false;
        }
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
      },
      {
        label: 'Log out',
        icon: 'pi pi-fw pi-power-off',
        command: () => {
          this.router.navigate(['/login']);
        }
      }
    ];
  }

  showExtrato() {
    this.showPanelExtrato = true;
    this.showAbaConta = false;
  }

  hideExtrato() {
    this.showAbaConta = true;
    this.showPanelExtrato = false;
  }
}
