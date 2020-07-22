import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreditoPage } from './credito.page';

describe('CreditoPage', () => {
  let component: CreditoPage;
  let fixture: ComponentFixture<CreditoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreditoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
