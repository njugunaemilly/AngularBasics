import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-angular-api',
  templateUrl: './angular-api.component.html',
  styleUrls: ['./angular-api.component.css']
})
export class AngularApiComponent implements OnInit{
  users: any;
  url = "https://api.github.com/users";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get(this.url).subscribe({
      next: (res) => {
        console.log('success');
        console.log(res);
        this.users = res;
      },
      error: (error) => {
        console.log('error');
        console.log(error);
      },
      complete: () => {
        console.log('completed');
      },
    });
  }

  goToGithub(url: string | URL | undefined ) {
    window.open(url, '_blank');
  }
}

function subscribe(arg0: (res: any) => void, arg1: (error: any) => void, arg2: () => void) {
  throw new Error('Function not implemented.');
}

