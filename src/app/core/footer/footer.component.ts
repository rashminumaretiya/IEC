import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public features = [
    {
      featuresLink: '',
      featuresName: 'Offer'
    },
    {
      featuresLink: '',
      featuresName: 'EMI'
    },
    {
      featuresLink: '',
      featuresName: 'Tokenization'
    },
  ]
  public products = [
    {
      productLink: '',
      productName: 'Payments Link'
    },
    {
      productLink: '',
      productName: 'Payments Gateway'
    },
    {
      productLink: '',
      productName: 'Subscription'
    },
  ]

  public resources = [
    {
      resourcesLink: '',
      resourcesName: 'API Reference'
    },
    {
      resourcesLink: '',
      resourcesName: 'Integration'
    },
  ]
  public helps = [
    {
      helpLink: '',
      helpName: 'FAQs',
    },
    {
      helpLink: '',
      helpName: 'Help Center',
    },
  ]

  public copyrights = [
    {
      copyrightsLink: '',
      copyrightsName: 'Terms & Policies'
    },
    {
      copyrightsLink: '',
      copyrightsName: 'Privacy policy'
    },
    {
      copyrightsLink: '',
      copyrightsName: 'Cookies Settings'
    },
    {
      copyrightsLink: '',
      copyrightsName: 'Certificates'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
