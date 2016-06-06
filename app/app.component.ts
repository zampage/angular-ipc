import { Component} from '@angular/core';
import { BannerComponent } from "./layout/app-banner.component";
import { FooterComponent } from "./layout/app-footer.component";
import { ManyTalks } from "./model/many-talks.component";

@Component({
	selector: 'main-app',
	templateUrl: './app/main-app.template.html',
	directives: [BannerComponent, FooterComponent, ManyTalks]
})

export class AppComponent{

}

