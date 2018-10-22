import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VendasService } from '../vendas/vendas.service';
import { MessageService } from 'primeng/api';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-venda-cadastro',
  templateUrl: './venda-cadastro.component.html',
  styleUrls: ['./venda-cadastro.component.css'],
  providers: [MessageService]
})
export class VendaCadastroComponent implements OnInit {

  clientes: any[];
  produtos: any[];
  venda: any;
  item: any;

  @Output() vendaSalva = new EventEmitter();

  constructor(private vendasService: VendasService, private messageService: MessageService) { }

  ngOnInit() {
    this.vendasService.listarClientes().subscribe(response => this.clientes = response);
    this.vendasService.listarProdutos().subscribe(response => this.produtos = response);
    this.novaVenda();
  }

  incluirItem() {
    this.item.total = (this.item.produto.valor * this.item.quantidade);

    this.venda.itens.push(this.item);

    this.messageService.add({ severity: 'info', detail: 'Item adicionado à venda' });

    this.item = {};

    this.calcularTotal();
  }

  calcularTotal() {
    const totalItens = this.venda.itens.map(i => i.produto.valor * i.quantidade)
      .reduce((total, v) => total + v, 0);
    this.venda.total = totalItens + (this.venda.frete ? this.venda.frete : 0);
  }

  novaVenda() {
    this.venda = { itens: [], total: 0.0, frete: 0.0 };
    this.item = {};
  }

  concluirVenda(frm: FormGroup) {
    this.vendasService.adicionar(this.venda).subscribe(response => {
      frm.reset();
      this.novaVenda();
      this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Venda concluida!' });
      this.vendaSalva.emit(response);
    });
  }

}
