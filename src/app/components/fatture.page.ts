import { Component, OnInit, Input } from '@angular/core';
import { FatturaService} from '../_services/fatture.service';
import { Router } from '@angular/router';

@Component({
  template: `
    <div class="container">
      <table class="table text-white bg-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Data</th>
            <th scope="col">Numero</th>
            <th scope="col">Anno</th>
            <th scope="col">Importo</th>
            <th scope="col">Stato</th>
            <th scope="col">Cliente</th>
          </tr>
        </thead>
        <tbody *ngFor="let fattura of fatture; let i = index">
          <tr>
            <th scope="row">{{ fattura.id }}</th>
            <td>{{ fattura.data | date }}</td>
            <td>{{ fattura.numero }}</td>
            <td>{{ fattura.cliente.ragioneSociale }}</td>
            <td>{{ fattura.anno }}</td>
            <td>{{ fattura.importo }}€</td>
            <td>{{ fattura.stato.nome }}</td>
            <td>
              <a
                [routerLink]="['/dettaglifattura/', fattura.id]"
                routerLinkActive="router-link-active"
                class="btn btn-primary btn-sm m-2"
                >Dettagli Fattura</a
              >
            </td>
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
            <!-- <li class="page-item" *ngFor="let pagina of numPag; let p = index">
              <button class="page-link" (click)="caricaPag(p)">
                {{ p +1 }}
              </button>
            </li> -->
            <li class="page-item">
              <button class="page-link" (click)="caricanextPag(this.p)">
                Next
              </button>
            </li>
          </ul>
        </nav>
     </div>
    </div>
`
,styles: [`

      .table {
        margin-top: 5rem !important;
      }
    `
  ],
})
export class FatturePage implements OnInit {
  constructor(private fatturaSrv: FatturaService, private router: Router) {}
  fatture: any;
  numPag!: any;
  p: number = 0;
  k!: number;
  ngOnInit(): void {
    this.fatturaSrv.getByPage(this.p).subscribe((res) => {
      this.fatture = res.content;
      this.p = Number(res.pageable.pageNumber);
      console.log(res.pageable);
      const numeroPag = Array(res.totalPages);
      this.numPag = numeroPag;
    });
  }
  caricaPag(k: number) {
    this.fatturaSrv.getByPage(k).subscribe((res) => {
      this.fatture = res.content;
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
    if (this.p == 250) {
      this.caricaPag(k);
      return;
    } else {
      ++k;
      this.caricaPag(k);
      return;
    }
  }
  @Input() item = '';
}
