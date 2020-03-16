
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import {AuthService} from './auth.service';
import {FireDBService} from "./fire-db.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = environment.title;
  constructor(public auth: AuthService, public db: FireDBService) {
  }
}
