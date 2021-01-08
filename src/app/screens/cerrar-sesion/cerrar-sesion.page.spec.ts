import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CerrarSesionPage } from './cerrar-sesion.page';

describe('CerrarSesionPage', () => {
  let component: CerrarSesionPage;
  let fixture: ComponentFixture<CerrarSesionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CerrarSesionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CerrarSesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
