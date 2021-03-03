import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasComponent } from './noticias.component';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

describe('NoticiasComponent', () => {
  let component: NoticiasComponent;
  let fixture: ComponentFixture<NoticiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NoticiasComponent],
      providers:[InAppBrowser]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
