import { Component } from 'angular2/core';
import { Article } from './article';

@Component({
    selector: 'article',
    host: {
        class: 'row'
    },
    templateUrl: 'app/html/article.component.html',
    inputs: ['article'],
})

export class ArticleComponent {
    article: Article;

    voteUp() {
        this.article.voteUp();
        return false;
    }

    voteDown() {
        this.article.voteDown()
        return false;
    }
}