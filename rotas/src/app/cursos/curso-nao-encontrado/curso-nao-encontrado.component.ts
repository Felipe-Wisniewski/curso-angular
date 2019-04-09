import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-nao-encontrado',
  templateUrl: './curso-nao-encontrado.component.html',
  styleUrls: ['./curso-nao-encontrado.component.css']
})
export class CursoNaoEncontradoComponent implements OnInit {

  id: number;

  subscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
      } 
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
