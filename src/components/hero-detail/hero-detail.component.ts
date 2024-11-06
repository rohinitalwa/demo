import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero/hero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../types/hero.type';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css',
})
export class HeroDetailComponent implements OnInit {
  hero!: Hero;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.heroService.getHero(id).subscribe({
        next: (res) => {
          this.hero = res;
        },
      });
    }
  }
}
