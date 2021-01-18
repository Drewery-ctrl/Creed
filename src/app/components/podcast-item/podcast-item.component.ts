import {Component, Input, OnInit} from '@angular/core';
import {Podcast} from '../../models/podcast';

@Component({
  selector: 'app-podcast-item',
  templateUrl: './podcast-item.component.html',
  styleUrls: ['./podcast-item.component.scss']
})
export class PodcastItemComponent implements OnInit {
  // Input item from parent podcast component
  @Input()
  pcList!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
