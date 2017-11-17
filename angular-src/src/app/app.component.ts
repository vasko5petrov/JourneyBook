import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  constructor(private router: Router) {
    this.router.events.filter(e => e.constructor.name === 'RoutesRecognized')
      .pairwise().subscribe((e: any[]) => {
        localStorage.setItem('prev', e[0].urlAfterRedirects);
      });
  }
}
