import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  pagina: number;
  cursos: any[];

  subscription: Subscription;

  constructor(
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();

    this.subscription = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  proximaPagina() {
    this.router.navigate(['/cursos'],
    { queryParams: { 'pagina': ++this.pagina }});
  }
}
