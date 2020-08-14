import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from '../translate.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit, OnDestroy {
  sub: Subscription;
  word;
  constructor(public translateService: TranslateService, public activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.word = this.translateService.findById(id)
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
