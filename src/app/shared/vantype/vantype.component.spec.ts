import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VantypeComponent } from './vantype.component';

describe('VantypeComponent', () => {
  let component: VantypeComponent;
  let fixture: ComponentFixture<VantypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VantypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VantypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
