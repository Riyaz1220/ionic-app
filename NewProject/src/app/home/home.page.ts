import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
// import { AboutusPage } from '../aboutus/aboutus.page';
// import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  items = [];

  ngOnInit() {
    for (let i = 1; i < 51; i++) {
      this.items.push();
    }
  }


  //   end

  username: string="";
  companyname: string="";
  gender: string="";
  date: string="";
  // public progress = 0;


  // constructor() {
  //   setInterval(() => {
  //     this.progress += 0.01;

  //     // Reset the progress bar when it reaches 100%
  //     // to continuously show the demo
  //     if (this.progress > 1) {
  //       setTimeout(() => {
  //         this.progress = 0;
  //       }, 1000);
  //     }
  //   }, 50);
  // };

  constructor(private loadingCtrl: LoadingController) {}

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Dismissing after 3 seconds...',
      duration: 3000,
    });

    loading.present();



    console.log("Login Button action");

    console.log(this.username);
    console.log(this.companyname);
    console.log(this.gender);
    console.log(this.date);

  }
  // constructor() {}

  login(){
    console.log("Login Button action");

    console.log(this.username);
    console.log(this.companyname);
    console.log(this.gender);

  }

  cancel(){
    console.log("cancel Button action");

    console.log(this.username);
    console.log(this.companyname);
    console.log(this.gender);

  
  }

  

}

