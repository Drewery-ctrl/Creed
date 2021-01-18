import {Pipe, PipeTransform} from '@angular/core';
import {Podcast} from '../models/podcast';

@Pipe({
  name: 'keywordFilter',
  pure: false,
})
export class KeywordFilterPipe implements PipeTransform {

  transform(podcasts: any[], filter: any): any {
    if (!podcasts || !filter) {
      return podcasts;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    // @ts-ignore
    return podcasts.filter(item => item.keyword.indexOf(filter.keyword) !== -1);
  }

}
