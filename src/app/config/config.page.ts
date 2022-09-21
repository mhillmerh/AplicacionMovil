import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  private config = [
    {
      id: '1',
      title: "Eiffel Tower",
      imageURL:
        "https://www.toureiffel.paris/themes/custom/tour_eiffel/img/picto_myGoogleBusiness_1.jpg",
      comments: ["Awesome place", "wonderful experience"]
    },
    {
      id: "2",
      title: "Statue of Liberty",
      imageURL:
        "https://inteng-storage.s3.amazonaws.com/img/iea/ypwqn1mmON/sizes/statue-of-liberty_resize_md.jpg",
      comments: ["Awesome place", "wonderful experience"]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
