import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ICalcComponent } from './i-calc.component';

describe('ICalcComponent', () => {
  let component: ICalcComponent;
  let fixture: ComponentFixture<ICalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ICalcComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ICalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
