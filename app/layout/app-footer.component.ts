import { Component} from '@angular/core';

@Component({
	selector: 'app-footer',
	template: '<div><p>{{copyright}}</p></div>',
	styleUrls: ['./app/layout/app-footer.style.css']
})

export class FooterComponent{
	copyright:string = '© by Markus Chiarot';
}