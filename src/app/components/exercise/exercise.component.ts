import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common'; 

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  // Exercise variables
  salute: string = "dear michelle";
  introduction: string = "It's been a while since we last spoke or saw one another";
  today: Date = new Date();
  age: number = 6.6;
  name: string = 'your good old friend'
  items: string[] = ['ball', 'kite', 'yearbook', 'diary', 'lamp'];
  translations: any = {'es': 'Asi es la vida', 'en': 'Such is life', 'fr': "C'est La Vie", 'other':'error'};
  emotion: string= 'ALL THIS TIME';
  usCapital: string = 'dc';
  partnerName: string = 'JAY';
  yearsMarried: number = 2.500001;
  money: number = 120000;
  hype: number = 1;
  url = new Promise<string>((resolve, reject) =>{
    fetch("https://api.thecatapi.com/v1/images/search")
      .then(response => {return response.json()})
      .then(data =>{
        if (!data[0].url){
          reject("API Error");
        } 
        resolve(data[0].url);
      })
  })

  format = 'mediumDate';
  locale = 'en';
  formattedDate = formatDate(this.today, this.format, this.locale);

  constructor() { }

  ngOnInit(): void {
  }

}
