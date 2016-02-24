/// <reference path="../node_modules/angular2/ts/typings/node/node.d.ts"/>
/// <reference path="../node_modules/angular2/typings/browser.d.ts"/>
import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";
import { NgFor } from "angular2/common";
import { ArticleComponent } from './article.component';
import { Article } from './article';

@Component(
    {
        selector: 'myapp',
        templateUrl: 'app/html/app.component.html',
        directives: [ArticleComponent],
    }
)

class RedditApp {
    articles:Article[];

    constructor() {
        this.articles = [
            new Article('Angular 2', 'http://angular.io', 3),
            new Article('Fullstack', 'http://fullstack.io', 2),
            new Article('Eramon', 'http://www.eramon.de', 1),
        ];
    }

    addArticle(title:HTMLInputElement, link:HTMLInputElement):void {
        console.log(`Adding article title: ${title.value} and link: ${link.value}`);
        this.articles.push(new Article(title.value, link.value, 0));
        title.value = ''; //clears input field
        link.value = ''; //clears input field
    }

    sortedArticles():Article[] {
        return this.articles.sort((a:Article, b:Article) => b.votes - a.votes);
    }
}
bootstrap(RedditApp);