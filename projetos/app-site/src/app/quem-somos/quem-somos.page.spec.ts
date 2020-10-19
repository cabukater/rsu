import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuemSomosPage } from './quem-somos.page';

describe('QuemSomosPage', () => {
  let component: QuemSomosPage;
  let fixture: ComponentFixture<QuemSomosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuemSomosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuemSomosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
