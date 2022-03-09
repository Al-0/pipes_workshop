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
  name: string = 'Alfonso Valenciana';
  sentence: string = 'Mi mAMá mE mImA';
  fruits: string[] = ['pear', 'grape', 'pineapple', 'strawberry', 'cucumber'];
  human_population: number = 7932079431;
  e: number = Math.E;
  savings: number = .25766;
  salary: number = 24090.54;
  today: Date = new Date();
  employee: any = {
    id: 32,
    name: 'Alfonso Valenciana',
    role: 'Apprentice',
    email: 'alfonso.valenciana@encora.com',
    address: {
      street: 'Desierto de Libia',
      number: 84
    },
    stacks: ['Angular', 'React', 'Python']
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
