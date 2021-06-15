import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css'],
})
export class PostList {
    // posts = [
    //     {
    //         title: 'title1',
    //         content: 'body1'
    //     },
    //     {
    //         title: 'title2',
    //         content: 'body2'
    //     },
    //     {
    //         title: 'title3',
    //         content: 'body3'
    //     },
    // ];
    @Input() posts:any = [];
}