
export class Music {

  id?:number
  name?:string
  singer?:string
  url?:string
  cover?:string


  constructor(id: number, name: string, singer: string, url: string, cover: string) {
    this.id = id;
    this.name = name;
    this.singer = singer;
    this.url = url;
    this.cover = cover;
  }
}
