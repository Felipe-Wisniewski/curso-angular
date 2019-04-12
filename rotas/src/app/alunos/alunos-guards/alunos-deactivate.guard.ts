import { Injectable } from "@angular/core";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { IFormCanDeactivate } from '../../guards/iform-candeactivate';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {

  canDeactivate(
    component: IFormCanDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ) : Observable<boolean> | Promise<boolean> | boolean {

    console.log('AlunosDeactivateGuard guarda de desativacao');

    //retornando false, vc nao consegui mudar a rota, bom para verificar se vc realmente deseja sair da página
    return component.podeDesativar ? component.podeDesativar() : true;
  }
}
