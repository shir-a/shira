import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  public images : string[];
  public index: number;
  public urlImage: string;
  

  constructor() {
  this.index = 0;
    this.images = [
      "assets/p1.jpg",
      "assets/p2.jpg",
      "assets/p3.gif"
    ];
     
    this.urlImage = this.image;
    setInterval(() => {
      this.urlImage = this.image;
    }, 7000)

    
    
  }

   public get image(): string {
    this.index++;
    this.index %= this.images.length;
    return this.images[this.index];
  }

 

  ngOnInit() {
  }

}
