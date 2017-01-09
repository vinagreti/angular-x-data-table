import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'angular-x-data-table',
    styleUrls: ['angular-x-data-table.component.css'],
    templateUrl: 'angular-x-data-table.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class AngularXDataTableComponent {

    message = "Click Me ...";

    onClick() {
        this.message = "Hello World!";
        console.log(this.message);
    }

}
