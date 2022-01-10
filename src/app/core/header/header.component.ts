import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
  }

  public scroll = (event: any): void => {
    if (window.scrollY >= 80) {
      const headerTag = document.getElementById('header');
      headerTag?.classList.add("fixed");
    } else {
      const headerTag = document.getElementById('header');
      headerTag?.classList.remove("fixed");
    }
  };

  /**
   * sidebarToggleClicked
   */
  public sidebarToggleClicked() {
    const headerTag = document.getElementById('navbarSupportedContent');
    const sidebarToggleTag = document.getElementById('sidebarToggle');

    if (!headerTag?.classList.contains('show')) {
      headerTag?.classList.add("show");
      sidebarToggleTag?.classList.add("open");
    } else {
      headerTag?.classList.remove("show");
      sidebarToggleTag?.classList.remove("open");
    }
  }
}
