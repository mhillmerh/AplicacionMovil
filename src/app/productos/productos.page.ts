import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  profileId: string;
  character;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    
    this.profileId = this.activatedRoute.snapshot.paramMap.get('id')
    this.http.get('https://rickandmortyapi.com/api/character/' + this.profileId)
      .subscribe(res => this.character = res);
    
  }

}
