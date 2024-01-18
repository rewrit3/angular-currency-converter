import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
// import { map } from "rxjs/operators";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  title = "Currency Converter";

  amount = new FormControl("1.00");

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchCurrenciesAndCountries();
  }

  private fetchCurrenciesAndCountries() {
    this.http
      .get("https://restcountries.com/v3.1/all?fields=currencies")
      .subscribe((currencies) => {
        console.log(currencies);
      });
  }
}
