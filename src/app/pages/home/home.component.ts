import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  events = [
    {
      "title": "Google Cloud DevFest 2022 Islamabad",
      "eventBanner": "assets/img/1671122319662.jpg",
      "buttonText": "GDG Cloud Islamabad"
    },
    {
      "title": "DevFest Peshawar 2022",
      "eventBanner": "assets/img/1671111755994.jpg",
      "buttonText": "GDG Peshawar"
    },
    {
      "title": "DevFest Karachi 2022",
      "eventBanner": "assets/img/1671104901373.jpg",
      "buttonText": "GDG Kolachi"
    },

  ]
  events2 = [{
    "title": "Devfest'22 - Google Developer Groups Flagship Event",
    "eventBanner": "assets/img/1671104901373.jpg",
    "buttonText": "GDG Islamabad"
  },
  {
    "title": "DevFest Lahore 2022",
    "eventBanner": "assets/img/1671121994260.jpg",
    "buttonText": "GDG Lahore"
  },
  {
    "title": "Personal Branding for Developers",
    "eventBanner": "assets/img/1671121694928.jpg",
    "buttonText": "GDG Peshawar"
  },


  ]
  event3 = [{

    "title": "WTM x GDG CLOUD: International Women's Day #ProgressNotPerfection",
    "eventBanner": "assets/img/1643613425943.png",
    "buttonText": "GDG Cloud Islamabad"
  },
  {
    "title": "Swift Pakistan Meetup X",
    "eventBanner": "assets/img/1645682982160.jpg",
    "buttonText": "Swift Pakistan"
  },
  {
    "title": "AWS Community Faisalabad Meetup",
    "eventBanner": "assets/img/1645683685831.jpg",
    "buttonText": "AWS Community Pakistan"
  },
]
  event4 = [{
    "title": "AWS Community Faisalabad Meetup",
    "eventBanner": "assets/img/1645683685831.jpg",
    "buttonText": "AWS Community Pakistan"
  },]

}
