import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Actualizar',
      url: '/actualizar',
      icon: 'people'
    },
    {
      title: 'Credito',
      url: '/credito',
      icon: 'reader'
    },
    {
      title: 'Cuenta',
      url: '/cuenta',
      icon: 'reorder-four'
    },
    {
      title: 'Cuotas',
      url: '/folder/Archived',
      icon: 'archive'
    },

    {
      title: 'Salir',
      url: '/login',
      icon: 'log-out'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router,
    private alertController:AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.router.navigateByUrl('welcome')
      this.splashScreen.hide();
    
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('page/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
