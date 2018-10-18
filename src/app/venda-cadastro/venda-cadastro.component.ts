import { Component, OnInit } from '@angular/core';
import { VendasService } from '../vendas/vendas.service';

@Component({
  selector: 'app-venda-cadastro',
  templateUrl: './venda-cadastro.component.html',
  styleUrls: ['./venda-cadastro.component.css']
})
export class VendaCadastroComponent implements OnInit {

  clientes: any[];

  constructor(private vendasService: VendasService) { }

  ngOnInit() {
    this.vendasService.listarClientes().subscribe(response => this.clientes = response);
  }

}
