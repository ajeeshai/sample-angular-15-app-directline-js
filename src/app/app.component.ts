import { Component, OnInit } from '@angular/core';
import { DirectLine } from 'botframework-directlinejs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const directLine = new DirectLine({});
  }
  title = 'sample-app';
}
