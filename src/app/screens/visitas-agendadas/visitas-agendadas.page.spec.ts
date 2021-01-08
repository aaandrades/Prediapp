import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisitasAgendadasPage } from './visitas-agendadas.page';

describe('VisitasAgendadasPage', () => {
  let component: VisitasAgendadasPage;
  let fixture: ComponentFixture<VisitasAgendadasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitasAgendadasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisitasAgendadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
