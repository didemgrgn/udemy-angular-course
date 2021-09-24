### Button Prefix

Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1

```typescript
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text:string ="default"; //Bir string göndermezse default yazsın

  constructor() { }

  ngOnInit(): void {
  }
}

```

```html
<button igxButton="flat">{{text}}</button>
<button igxButton="raised">{{text}}</button>
<button igxButton="outlined">{{text}}</button>

```
