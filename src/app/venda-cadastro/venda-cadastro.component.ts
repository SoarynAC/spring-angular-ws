import { Component, OnInit } from '@angular/core';
import { VendasService } from '../vendas/vendas.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-venda-cadastro',
  templateUrl: './venda-cadastro.component.html',
  styleUrls: ['./venda-cadastro.component.css'],
  providers: [ MessageService ]
})
export class VendaCadastroComponent implements OnInit {

  clientes: any[];
  produtos: any[];
  venda = {itens: []};
  item: any = {};

  constructor(private vendasService: VendasService, private messageService: MessageService) { }

  ngOnInit() {
    this.vendasService.listarClientes().subscribe(response => this.clientes = response);
    this.vendasService.listarProdutos().subscribe(response => this.produtos = response);
  }

  incluirItem() {
    this.item.total = (this.item.produto.valor * this.item.quantidade);

    this.venda.itens.push(this.item);

    this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Item adicionado à venda'});

    this.item = {};
  }

}
