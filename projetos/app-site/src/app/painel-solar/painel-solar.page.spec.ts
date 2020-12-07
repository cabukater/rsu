import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PainelSolarPage } from './painel-solar.page';

describe('PainelSolarPage', () => {
  let component: PainelSolarPage;
  let fixture: ComponentFixture<PainelSolarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelSolarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PainelSolarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
