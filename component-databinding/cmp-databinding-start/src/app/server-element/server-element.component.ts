import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  DoCheck,
  ViewEncapsulation,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges is Called');
  }

  ngOnInit(): void {
    console.log('ngOnInit is Called');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck is Called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit is Called');
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked is Called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit is Called');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked is Called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy is Called');
  }
}
