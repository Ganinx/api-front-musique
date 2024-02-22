import {SafeUrl} from "@angular/platform-browser";

export class Music {

  id?:number
  name?:string
  singer?:string
  url?:SafeUrl|string
  cover?:string
  style?:string


  constructor(id?: number, name?: string, singer?: string, url?: string, cover?: string, style?:string) {
    this.id = id;
    this.name = name;
    this.singer = singer;
    this.url = url;
    this.cover = cover;
    this.style = style
  }
}
