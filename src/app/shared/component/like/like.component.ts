import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
@Input() getLikedState! : boolean;
@Output() emmitLikedStatus : EventEmitter<boolean> = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }

  onLikeDisLike(){
    this.getLikedState = !this.getLikedState;
    this.emmitLikedStatus.emit(this.getLikedState)
  }

}
