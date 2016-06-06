import { Component } from '@angular/core';
import { Talk } from './model/talk.component';

@Component({
	selector: 'many-talks',
	templateUrl: './app/model/many-talks.template.html',
	styleUrls: ['./app/model/many-talks.style.css']
})

export class ManyTalks{

	allTalks:Task[] = [
		{
			'shortname':'Angular',
			'longname': 'Modern Web with Angular 2 - cleaner, simpler, sensible',
			'description': 'The sheer pace of Modern Web evolution has been demanding a sensible and stable framework for a long time now. The question is, which framework stands out? Which framework caters the need of continuous evolution? The answer: Angular 2.',
			'speaker':
				{
					'firstname':'Anas Raza',
					'lastname':'Firdousi'
				}
		},
		{
			'shortname':'Symfony',
			'longname': 'Symfony2 – von 0 auf 100 in wenigen Stunden',
			'description': 'Das Symfony-Framework ist erwachsen geworden und die Basis vieler Webseiten und Anwendungen. Das Framework bedient sich bewährter Methoden und Architekturen, auch von anderen Plattformen beziehungsweise Sprachen. Der Workshop behandelt im ersten Teil die wichtigsten Schlüsselkonzepte von Symfony: Installation, Architektur, Bundles, MVC, Twig-Templates. Im zweiten Teil werden fortgeschrittene Themen angeschnitten. Dazu gehören unter anderem Datenbankzugriffe mit Doctrine 2, Formulare, Dependency Injection, HTTP Caching. Die Einführung erfolgt anhand eines konkreten Beispiels und zeigt, wie in kurzer Zeit eine Webanwendung mit Symfony gebaut werden kann.',
			'speaker':
				{
					'firstname':'Timo',
					'lastname':'Habkern'
				}
		}
	];

	selected:Talk;

	selectTalk(talk:Talk){
		this.selected = talk;
	}

}