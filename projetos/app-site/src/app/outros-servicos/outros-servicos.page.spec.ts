import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OutrosServicosPage } from './outros-servicos.page';

describe('OutrosServicosPage', () => {
  let component: OutrosServicosPage;
  let fixture: ComponentFixture<OutrosServicosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutrosServicosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OutrosServicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
