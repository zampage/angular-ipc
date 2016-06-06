import { Component} from '@angular/core';

@Component({
	selector: 'app-banner',
	template: '<div><div><h1>{{title}}</h1><h3>{{subtitle}}</h3></div></div>',
	styleUrls: ['./app/layout/app-banner.style.css']
})

export class BannerComponent{
	title:string = "IPC 2016";
	subtitle:string = "international php conference"
}