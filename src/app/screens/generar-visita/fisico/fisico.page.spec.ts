import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FisicoPage } from './fisico.page';

describe('FisicoPage', () => {
  let component: FisicoPage;
  let fixture: ComponentFixture<FisicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FisicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FisicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
