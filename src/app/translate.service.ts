import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  words = [
    {id: 1, eng: 'hello', vie: 'xin chào'},
    {id: 2, eng: 'book', vie: 'quyển sách'},
    {id: 3, eng: 'water', vie: 'nước'},
    {id: 4, eng: 'home', vie: 'nhà'},
    {id: 5, eng: 'dog', vie: 'con chó'},
  ];

  constructor() { }

  find(eng: string) {
    return this.words.find(word => word.eng === eng)
  }

  findAll() {
    return this.words;
  }

  findById(id) {
    return this.words.find(word => word.id == id)
  }
}
