import {Component, OnInit} from '@angular/core';
import {Podcast} from '../../models/podcast';
import {PodcastService} from '../../services/podcast.service';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class PodcastsComponent implements OnInit {
  // podcasts: any = (data as any).default;
  podcasts: Podcast[] = [];
  keyword = 'Web Design';

  constructor(public ps: PodcastService) {
  }

  ngOnInit(): void {
    // Get JSON data from service
    this.ps.getPodcasts().subscribe(data => {
      // Store data in local variable podcasts
      this.podcasts = data;
      // console.log(data);
    });
  }
}
