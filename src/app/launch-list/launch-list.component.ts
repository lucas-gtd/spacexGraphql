import { Component, OnInit } from '@angular/core';
import { GetLaunchListGQL } from '../services/spacexGraphql.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css'],
})
export class LaunchListComponent implements OnInit {
  constructor(private service: GetLaunchListGQL) {}

  launches$ = this.service
    .fetch({ limit: 5 })
    .pipe(map((res) => res.data.launches));

  ngOnInit(): void {}
}
