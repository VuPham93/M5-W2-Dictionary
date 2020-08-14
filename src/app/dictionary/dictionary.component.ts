import { Component, OnInit } from '@angular/core';
import {TranslateService} from '../translate.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  translatedWord;
  input: string;

  constructor(public translateService: TranslateService) { }

  ngOnInit(): void {

  }

  translate() {
    debugger
    let result = this.translateService.find(this.input);
    if (result != null) {
      this.translatedWord = result.vie;
    } else
      this.translatedWord = "not found"
  }

  reset() {
    this.translatedWord = ''
  }
}
