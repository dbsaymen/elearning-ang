import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  role = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {

    if (this.router.url.trim().includes('student')) {
      this.role = 'Student';
    } else {
      this.role = 'Teacher';
    }
  }

}
