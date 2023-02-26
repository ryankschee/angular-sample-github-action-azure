import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log('Hello from Angular!');
    this.http
      .get('https://spring-boot-azure-app-service.azurewebsites.net/hello')
      .subscribe(data => {
        console.log('Hello from Spring Boot: ' + data);
      });
  }
}
