import { Component, OnInit } from '@angular/core';
import { ClientiService } from '../_services/clienti.service';
import { Cliente } from '../_models/cliente';
import { Router } from '@angular/router';
@Component({
  template: `
      <div class="container">
      <table class="table bg-dark text-white">
        <thead>
          <tr>
            <th scope="col">ID cliente</th>
            <th scope="col">Ragione Sociale</th>
            <th scope="col">Partita IVA</th>
            <th scope="col">E-mail</th>
            <th>
              <button class="btn btn-success" (click)="cambiaPag()">
                Aggiungi Cliente
              </button>
            </th>
          </tr>
        </thead>
        <tbody *ngFor="let cliente of clienti">
          <tr>
            <th scope="row">{{ cliente.id }}</th>
            <td>{{ cliente.ragioneSociale }}</td>
            <td>{{ cliente.partitaIva }}</td>
            <td>{{ cliente.email }}</td>
            <button
              class="btn2 btn-primary btn-sm m-3"
              [routerLink]="['/dettaglicliente/', cliente.id]"
              routerLinkActive="router-link-active"
            >
              Dettagli cliente
            </button>
          </tr>
        </tbody>
      </table>
     <div class="container d-flex">
        <nav aria-label="Page navigation example justify-content-center">
          <ul class="pagination">
            <li class="page-item">
              <button class="page-link" (click)="caricaprevPag(this.p)">
                Previous
              </button>
            </li>
            <li class="page-item" *ngFor="let pagina of numPag; let p = index">
              <button class="page-link" (click)="caricaPag(p)">
                {{ p + 1 }}
              </button>
            </li>
            <li class="page-item">
              <button class="page-link" (click)="caricanextPag(this.p)">
                Next
              </button>
            </li>
          </ul>
        </nav>
     </div>
    </div>
  `,
  styles: [`
  .table{
    margin-top: 3rem !important;
  }
  .btn2{
    background-color: blue;
  }`],
})
export class InfoClientiPage implements OnInit {
  constructor(private clientiSrv: ClientiService, private router: Router) {}
  clienti!: any;
  numPag!: any;
  p: number = 0;
  k!: number;
  ngOnInit(): void {
    this.clientiSrv.getAll(this.p).subscribe((res) => {
      this.clienti = res.content;
      this.p = Number(res.pageable.pageNumber);
      console.log(res.pageable);
      const numeroPag = Array(res.totalPages);
      this.numPag = numeroPag;
    });
  }

  caricaPag(k: number) {
    this.clientiSrv.getAll(k).subscribe((res) => {
      this.clienti = res.content;
      this.p = k;
    });
  }

  caricaprevPag(k: number) {
    if (this.p == 0) {
      this.caricaPag(k);
      return;
    } else {
      --k;
      this.caricaPag(k);
      return;
    }
  }

  caricanextPag(k: number) {
    if (this.p == 4) {
      this.caricaPag(k);
      return;
    } else {
      ++k;
      this.caricaPag(k);
      return;
    }
  }
  cambiaPag() {
    this.router.navigate(['creacliente']);
  }
}
