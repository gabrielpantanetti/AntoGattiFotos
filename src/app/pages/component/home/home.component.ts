import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';

import { ImagenesService, Imagenes } from 'src/app/services/Imagenes.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

declare function InitSwiperAndFacebook();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  SliderCollectionsImages: Imagenes;

  constructor(private _imgService: ImagenesService
    , private elementRef: ElementRef
    , private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

    this.GetImageForFolder("Slider", "jpg");    
  }
  

  GetImageForFolder(folder: string, ext: string): any {

    this._imgService.getImagenesForFolder({ folder$: folder, ext$: ext }).subscribe(data => {
      this.SliderCollectionsImages = data

      //console.log(this.SliderCollectionsImages);
    },error => console.log(error));


    //return this._imgService.getImagenesForFolder("","");
  }

  InicarJavaScript(value) {
    if(value==true){
      InitSwiperAndFacebook();

      //console.log("InicarJavaScript",value);
    }
  }
}
