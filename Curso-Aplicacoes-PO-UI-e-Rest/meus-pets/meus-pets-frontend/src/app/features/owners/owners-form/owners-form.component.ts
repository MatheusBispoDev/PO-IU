import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PoBreadcrumb, PoDialogService, PoNotificationService, PoPageEditLiterals } from '@po-ui/ng-components';
import { Subscription } from 'rxjs';
import { OwnerForm } from '../shared/interfaces/owner-form.model';
import { Owner } from '../shared/interfaces/owner.model';
import { OwnersService } from '../shared/services/owners.service';

@Component({
  selector: 'app-owners-form',
  templateUrl: './owners-form.component.html',
  styleUrls: ['./owners-form.component.css']
})
export class OwnersFormComponent implements OnInit {
  
  breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Tutores', link: '/owners' },
      { label: 'Novo Registro' }
    ]
  } 

  ownersForm!: FormGroup;

  isLoading: boolean = false;
  isDisabledButton : boolean = false;
  ownersSubscription!: Subscription;
  operation: string = 'post';
  title: string = "Novo Registro";
  customLiterals: PoPageEditLiterals = {
    saveNew: 'Salvar e Novo'
  };
  owner: Owner = {
    id: '',
    name: '',
    rg: '',
    cpf: '',
    email: '',
    tel1: '',
    tel2: ''
  };

  constructor(
    private router: Router,
    private ownersService: OwnersService,
    private poNotificationService: PoNotificationService,
    private activatedRoute: ActivatedRoute,
    private poDialogService: PoDialogService
    ) { }

  ngOnInit() {
    this.setOperation();
    this.setTitle();
    this.operation == 'post' ? this.createForm(this.owner) : this.getOwner();    
  }

  createForm(owner: Owner): void {    
    this.ownersForm = new FormGroup<OwnerForm>({
      id: new FormControl(owner.id, { nonNullable: true}),
      name: new FormControl(owner.name, { nonNullable: true}),
      rg: new FormControl(owner.rg, { nonNullable: true}),
      cpf: new FormControl(owner.cpf, { nonNullable: true}),
      email: new FormControl(owner.email, { nonNullable: true}),
      tel1: new FormControl(owner.tel1, { nonNullable: true}),
      tel2: new FormControl(owner.tel2, { nonNullable: true}),
    });
  }

  setOperation(): void {
    this.operation = this.activatedRoute.snapshot.params['id'] ? 'put' : 'post';    
  }

  setTitle(): void {
    if (this.operation == 'put'){
      this.title = 'Alterar registro'
      this.customLiterals.saveNew = 'Excluir';
    } else {
      this.title = "Novo registro"
    }
    
    this.breadcrumb.items[2].label = this.title;
  }

  cancel(): void {
    if (this.isDisabledButton == true)
    {
      this.ownersSubscription.unsubscribe();
    }
    this.router.navigate(['owners']);
  }

  save(isSaveAndNew: boolean): void {
    this.isLoading = true;
    this.isDisabledButton = true;

    this.operation == 'post' ? this.post(isSaveAndNew) : this.put(isSaveAndNew)
  }

  onSaveSucess(response: Owner, isSaveAndNew: boolean): void {
    this.isLoading = false;
    this.isDisabledButton = false;
    isSaveAndNew ? this.ownersForm.reset() : this.router.navigate(['owners']);
    this.poNotificationService.success(`Registro incluído com sucesso: ${response.id}`);
  }

  onSaveError(error: any): void {
    this.isLoading = false;
    this.isDisabledButton = false;
    this.poNotificationService.error('Falha ao salvar registro');
  }

  getOwner(): void {
    this.isLoading = true;
    this.ownersService.getById(this.activatedRoute.snapshot.params['id']).subscribe({
      next: (owner: Owner) => this.onGetSucess(owner),
      error: (error: any) => this.onGetError(error)
    });
  }

  onGetSucess(owner: Owner): void {
    this.isLoading = false;
    this.owner = owner;
    this.createForm(owner);
  }

  onGetError(error: any): void {
    this.isLoading = false;
    this.poNotificationService.error('Falha ao retornar registro');
  }

  post(isSaveAndNew: boolean): void {
    this.ownersSubscription = this.ownersService.post(this.ownersForm.value).subscribe({
      next: (response) => this.onSaveSucess(response, isSaveAndNew),
      error: (error) => this.onSaveError(error),
    });
  }

  put(isSaveAndNew: boolean): void {
    this.ownersSubscription = this.ownersService.put(this.ownersForm.value).subscribe({
      next: (response) => this.onSaveSucess(response, isSaveAndNew),
      error: (error) => this.onSaveError(error),
    });
  }

  saveOrDelete(): void {
    if (this.operation == 'post') {
      this.save(true);
    } else {
      this.confirmDelete();
    }
  }

  confirmDelete(): void {
    this.poDialogService.confirm({
      title: 'Excluir tutora',
      message: 'Tem certeza que deseja excluir??',
      confirm: this.delete.bind(this),
    });
  }

  delete(): void {
    this.isLoading = true;
    this.isDisabledButton = true;
    this.ownersService.delete(this.activatedRoute.snapshot.params['id']).subscribe({
      next: () => this.onDeleteSucess(),
      error: () => this.onDeleteError()
    });
  }

  onDeleteSucess(): void {
    this.router.navigate(['owners']);
    this.poNotificationService.success('Registro excluído com sucesso');
  }

  onDeleteError(): void {
    this.isLoading = false;
    this.isDisabledButton = false;
    this.poNotificationService.error('Falha ao excluir registro');
  }

}
