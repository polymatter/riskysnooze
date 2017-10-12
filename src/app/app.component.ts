import { Component } from '@angular/core';
import { DatabaseService } from './database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  riskEntries: string[] = []

  constructor(private db : DatabaseService) {}

  updateRiskEntries() {
    this.db.getRiskEntries().subscribe(
      content => this.riskEntries = content.json(),
      error => console.log(error)
    );
  }
}
