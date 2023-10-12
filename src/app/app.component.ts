import { Component } from '@angular/core';
import { Ireel } from './shared/models/interface';
import { reels } from './shared/consts/reeldata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reusablelikecomponent';
  reelsArray : Array<Ireel> = [
  {
    title : "Instagram Reel",
    likeCount : 1234,
    isLike : true,
    id :1
  },
  {
    title : "Youtube Shorts",
    likeCount : 4563,
    isLike : false,
    id :2
  },
  {
    title : "Tiktok Videos",
    likeCount : 7896,
    isLike : false,
    id :3
  },
  {
    title : "Snap Videos",
    likeCount : 3698,
    isLike : true,
    id :4
  }
]
  

  onLikeStateUpdate(state : boolean, id : number){
    console.log(state, id);
    this.reelsArray.forEach(reel => {
      if(reel.id === id){
        reel.isLike = state
        if(state){
          reel.likeCount++
        }else{
          reel.likeCount--
        }
      }
    })
  }
}
