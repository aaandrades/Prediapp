import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenerarVisitaPage } from './generar-visita.page';

describe('GenerarVisitaPage', () => {
  let component: GenerarVisitaPage;
  let fixture: ComponentFixture<GenerarVisitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarVisitaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenerarVisitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
