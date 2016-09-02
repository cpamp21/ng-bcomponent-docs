import {Component, ViewChild} from '@angular/core';
import {HighlightDirective} from '../../../directives/highlight';
import {ContentComponent} from '../../content.component';
import {HeadingBComponent, ButtonBComponent, LabelBComponent} from 'ng-bcomponents';

@Component({
    templateUrl: 'bcomponent.api.html',
    directives: [HighlightDirective, ContentComponent, HeadingBComponent, ButtonBComponent, LabelBComponent],
    inputs: []
})
export class BComponentApi {
    @ViewChild('lblFadeTo') lblFadeTo: LabelBComponent;
    public fadeTo = () => {
        this.lblFadeTo.fadeTo(400, 0.5);
    }
}