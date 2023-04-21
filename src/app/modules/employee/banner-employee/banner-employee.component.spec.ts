import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerEmployeeComponent } from './banner-employee.component';

describe('BannerEmployeeComponent', () => {
  let component: BannerEmployeeComponent;
  let fixture: ComponentFixture<BannerEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
