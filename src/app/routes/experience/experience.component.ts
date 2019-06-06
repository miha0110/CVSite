import { Component, OnInit } from '@angular/core';

const MEDIX_CONTENT = [
  'Working directly with customers',
  'Full cycle application building, from design to production',
  'Developing application as part of a team',
  'Developing with and without provided design',
  'Fixing bugs and developing new features for existing apps',
  'Building basic Node.js server and adding new features to existing server'
];


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})


export class ExperienceComponent implements OnInit {

  medixContent = MEDIX_CONTENT;

  constructor() { }

  ngOnInit() {
  }

}
