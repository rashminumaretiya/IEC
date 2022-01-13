import { Component, OnInit } from '@angular/core';
import {
  Event,
  NavigationEnd,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isSignupOrLoginPage = true;

  public currentSelectedSidebarTab = 'alert';
  constructor(
    private router: Router
  ) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (
          event.urlAfterRedirects.includes('signup') ||
          event.urlAfterRedirects.includes('login')
        ) {
          this.isSignupOrLoginPage = true;
        } else {
          this.isSignupOrLoginPage = false;
        }
      }
    });
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentSelectedSidebarTab = event.url.replace( "" , "");
      }
    });

  }
  public goToPage(endPoint: any) {
    this.currentSelectedSidebarTab = endPoint;
    this.router.navigate(['alert', endPoint])
  }
  public goLogin() {
    this.router.navigate(['login'])
  }
  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
  }

  public scroll = (event: any): void => {
    if (window.scrollY >= 80) {
      const headerTag = document.getElementById('header');
      headerTag?.classList.add('fixed');
    } else {
      const headerTag = document.getElementById('header');
      headerTag?.classList.remove('fixed');
    }
  };

  /**
   * sidebarToggleClicked
   */
  public sidebarToggleClicked() {
    const headerTag = document.getElementById('navbarSupportedContent');
    const sidebarToggleTag = document.getElementById('sidebarToggle');
    const body = document.getElementById('body');

    if (!headerTag?.classList.contains('show')) {
      headerTag?.classList.add('show');
      sidebarToggleTag?.classList.add('open');
      body?.classList.add('open');
    } else {
      headerTag?.classList.remove('show');
      sidebarToggleTag?.classList.remove('open');
      body?.classList.remove('open');
    }
  }
}
