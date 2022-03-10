import { Component, OnInit, Input } from '@angular/core';
import { KeyValue } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
})
export class EntryComponent implements OnInit {
  // Component Set up
  id: string = "";
  _title: string = "";
  @Input() set title (val: string){
    this.id = val.replace(/\s/g, "_");
    this._title = val;
  }
  @Input() language: string = ''; 


  // Mainly intended for the user to fill
  name: string = ' ';
  sentence: string = '';
  fruits: string[] = [];
  human_population: number = 0;
  e: number = 0;
  savings: number = 0;
  salary: number = 0;
  today: Date = new Date();
  employee: any = {
    id: 0,
    name: '',
    role: '',
    email: '',
    address: {
      street: '',
      number: 0
    },
    stacks: []
  };


  // Too long to setup, therefore provided
  currentTime = new Promise<string>((resolve) =>{
    setTimeout(() => (resolve(new Date().toString())), 5000);
  });
  secondsInPage = new Observable <string>(observer => {
    let startTime = new Date().getTime();
    setInterval(() => observer.next(((new Date().getTime() - startTime) / 1000 ).toString()), 1000);
  });
  sentence2: string = "You are so beautiful.";
  url: string = "https://www.youtube.com/embed/enB2QL9Ulus"

  constructor() { }

  ngOnInit(): void {
  }

  keyDescOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return a.key > b.key ? -1 : (b.key > a.key ? 1 : 0);
  }

}
