import { CounterIncrease } from './store/addFavProduct.actions';
import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  productsList = [
    {"id":"1","createdAt":"2021-03-17T09:46:53.321Z","name":"Nikon COOLPIX B500 - 16 Megapixel, Compact Camera, Black","image":"https://cf2.s3.souqcdn.com/item/2016/03/12/10/26/19/09/item_XL_10261909_12928836.jpg","description":"Capture stunning photos and videos and share special memories with the Nikon COOLPIX B500 compact camera. This camera sports a stylish and compact design and has a sophisticated black body. This camera ensures that you constantly get high-quality images even in adverse lighting conditions, thanks to the 16MP low light CMOS sensor.","price":"82.00","reviews":4},
    {"id":"2","createdAt":"2021-03-17T15:31:33.312Z","name":"Havit IX-601 Wireless Bluetooth Headset - Black","image":"https://cf5.s3.souqcdn.com/item/2020/12/30/13/22/23/15/4/item_XL_132223154_d692603f4032d.jpg","description":"Brand: havit Type: Bluetooth headset Model number: ix-601 Hd stereo Extreme bass sound True tone sound Hd clear microphone Aux","price":"427.00","reviews":3.5},
    {"id":"3","createdAt":"2021-03-17T04:22:33.868Z","name":"Apple iPad Pro 2020 with Facetime - 12.9 Inch Display, WiFi, 1TB - Space Grey","image":"https://cf5.s3.souqcdn.com/item/2020/03/22/12/19/04/74/8/item_XL_121904748_7f9d10f781a19.jpg","description":"Enliven the creative side of your mind with the Apple iPad Pro Tablet. It lets you hone your photography skills and enables you to achieve the goals that you have set for yourself. The tablet is equipped with a 12MP wide camera and a 10MP ultra-wide that allow you to click wide-angle landscape shots in exceptional clarity. It instantly turns your moment into a beautiful memory so that","price":"950.00","reviews":5},
    {"id":"4","createdAt":"2021-03-16T22:46:49.037Z","name":"Samsung C27HG70 27-Inch HDR QLED Curved Gaming Monitor","image":"https://cf4.s3.souqcdn.com/item/2018/09/13/38/55/96/42/item_XL_38559642_150329575.jpg","description":"Brand: Samsung, Screen Size: 27 Inch, Monitor Type: Curved, Model Number: C27HG70QQM, Are batteries needed to power the product or is this product a battery: No, Is this a Dangerous Good or a Hazardous Material, Substance or Waste that is regulated for transportation, storage, and/or disposal? : No","price":"411.00","reviews":2},
    {"id":"5","createdAt":"2021-03-17T05:40:19.323Z","name":"JBL Charge 4 Portable Waterproof Bluetooth Speaker - Black","image":"https://cf5.s3.souqcdn.com/item/2018/12/20/42/64/15/20/item_XL_42641520_c8b2f8ae4537f.jpg","description":"The JBL JBLCHARGE4BLK Charge 4 Portable Waterproof Bluetooth Speaker has a rugged exterior that makes it the perfect pick for all your outdoor adventures. It is innovatively designed and comes in a stunning black finish. This JBL speaker incorporates high-end features to deliver top-of-the-line performance. It includes two JBL bass radiators that help it generate rich and powerful","price":"893.00","reviews":4.8},
    {"id":"6","createdAt":"2021-03-17T04:22:00.932Z","name":"Samsung 55 Inch 4K Ultra HD Smart LED TV with Built-in Receiver, Black","image":"https://cf1.s3.souqcdn.com/item/2020/09/03/13/17/55/15/8/item_XXL_131755158_acbc4644866a6.jpg","description":"The power to use easily See the stunning detail HDR-High-Dynamic Range levels up bright expression of your TV, so you can enjoy an immense spectrum of colors and visual details, even in dark scenes.","price":"976.00","reviews":3.6},
    {"id":"7","createdAt":"2021-03-17T04:45:33.720Z","name":"Apple MacBook Pro","image":"https://cf3.s3.souqcdn.com/item/2018/07/22/36/58/11/32/item_XL_36581132_143760083.jpg","description":"Apple MacBook Pro MR9R2 with Touch Bar and Touch ID Laptop -8th Gen-Intel Core i5,2.3Ghz, 13.3-Inch, 512GB SSD,8GB, Eng-KB, macOS, Space Gray, International Version","price":"880.00","reviews":4.7},
    {"id":"8","createdAt":"2021-03-17T06:41:29.594Z","name":"HP OfficeJet Pro 9023","image":"https://cf1.s3.souqcdn.com/item/2019/07/17/61/69/26/86/item_XL_61692686_3ebcc8655577a.jpg","description":"Up to 30,000 pages [7] Duty cycle is defined as the maximum number of pages per month of imaged output. This value provides a comparison of product robustness in relation to other HP Color InkJet devices.","price":"209.00","reviews":2},
    {"id":"9","createdAt":"2021-03-17T17:51:31.379Z","name":"Lenovo V15-IIL 82C500T5ED laptop","image":"https://cf1.s3.souqcdn.com/item/2020/12/02/13/21/47/07/4/item_XL_132147074_e625cfc156bb1.jpg","description":"Computer CPU Manufacturer : Intel,External Product ID : 195348343541,Processor Speed (GHz) : 1.2 GHz,Model Number : V15-IIL,Hard Disk Interface : Serial ATA,Processor Type : Core i3 (10th Generation)Hardware Platform : dos,Brand : Lenovo,Video Controller Manufacturer : NVIDIA","price":"813.00","reviews":3.7},
    {"id":"10","createdAt":"2021-03-17T01:17:31.389Z","name":"Apple iPhone 11 with FaceTime","image":"https://cf5.s3.souqcdn.com/item/2021/02/24/13/24/16/67/4/item_XL_132416674_ba4faa42aed21.jpg","description":"The Apple iPhone 11 is a new-age smartphone designed with A13 Bionic chip which features Neural Engine to a smooth and seamless performance. Enjoy your advanced gaming sessions or dive into your photographic pursuits without a hassle because this Apple phone does everything in the blink of an eye. The 12MP real, dual-camera setup, with its leading-edge features, allows you to capture your cherished moments.","price":"169.00","reviews":4.6}
  ];
  
  counter:any;
  constructor( /**private store : Store<{counter:any}> */) { }

  addToFavourite(){

  }
  ngOnInit(): void {
    //this.store.select('counter').subscribe((data) => (this.counter = data.counterValue));     
  }

}
