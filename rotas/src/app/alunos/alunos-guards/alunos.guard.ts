import { Observable } from 'rxjs';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AlunosGuard implements CanActivateChild {

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<boolean> | Promise<boolean> | boolean {

        console.log('AlunosGuard: guarda de rota filha')
        // console.log(route);
        // console.log(state);

        if (state.url.includes('editar')) {
          console.log('AlunosGuard /editar')
            // alert('você não tem permissão de edição!');
            // return Observable.of(false);
        }

        return true;
    }

}
