import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular6PrimeNG';

  apiurl = "https://hn.algolia.com/api/v1/search_by_date?tags=story";
  display: boolean = false;
  users: any[];
  selectedTableRow: any[];
  constructor(private http: HttpClient) {
    this.getDetails();      // calling the method when app loading
    setInterval(() => {     // re-call every 10 sec
      this.getDetails()
    }, 10000)
  }
  getDetails() {      // communicating the server 
    this.http.get(this.apiurl).subscribe(res => this.users = res['hits']);
  }
  select_tableRow(event) { // Upon selecting a row in the table
    this.selectedTableRow = event;
    this.display = true;
  }
}
