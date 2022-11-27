import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  passwd = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  login(): void {
    if (this.username === 'student') {
      this.router.navigateByUrl('/home/student');
    } else if (this.username === 'teacher') {
      this.router.navigateByUrl('/home/teacher');
    } else {
      alert('Username or password is incorrect' +
        '\n*Hint*' +
        '\nUsername: student  => Student space' +
        '\nUsername: teacher => Teacher space' +
        '\nPassword: 123');
    }
  }
}
