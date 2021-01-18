export class Podcast {
  title!: string;
  image!: string;
  publisher!: string;
  keyword!: string;
  totalEpisodes!: number;
  description!: string;
  podcasts!: [];

  constructor(podResponse: any) {
    this.title = podResponse.title;
    this.image = podResponse.image;
    this.publisher = podResponse.publisher;
    this.keyword = podResponse.keyword;
    this.description = podResponse.description;
    this.podcasts = podResponse.podcasts;
    this.totalEpisodes = podResponse.totalEpisodes;
  }
}
