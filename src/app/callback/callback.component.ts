import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  @Input()
  parentCallbackFn?: Function;

  constructor() { }

  ngOnInit(): void {
  }

  callParentCallback(): void {
    this.parentCallbackFn?.();
  }

}
