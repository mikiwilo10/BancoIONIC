import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetallecreditoPage } from './detallecredito.page';

describe('DetallecreditoPage', () => {
  let component: DetallecreditoPage;
  let fixture: ComponentFixture<DetallecreditoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallecreditoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetallecreditoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
