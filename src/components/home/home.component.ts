import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero/hero.service';
import { Hero } from '../../types/hero.type';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  heroList: Hero[] = [];
  constructor(private heroService: HeroService) {}
  ngOnInit(): void {
    this.heroService.getHeroes().subscribe({
      next: (res) => {
        this.heroList = res;
      },
    });
  }
}
