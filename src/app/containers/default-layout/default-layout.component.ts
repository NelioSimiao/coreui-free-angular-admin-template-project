import { Component } from '@angular/core';
import { navItems } from '../../_nav';
import { AuthService } from '../../views/login/auth.service';
import { take, map, exhaustMap, first } from 'rxjs/operators';
import { User } from '../../views/login/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  user: User;

  constructor(private authService: AuthService) { }


  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  ngOnInit(): void {
    this.authService.user.pipe(take(1)).subscribe(user => {
      this.user = user;
    });

  }


}
