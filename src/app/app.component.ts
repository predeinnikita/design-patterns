import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'design-patterns';

  private router: Router = inject(Router);

  public async navigateTo(path: string): Promise<void> {
    await this.router.navigate([path]);
  }
}
