import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlogorithmDetailComponent } from './algorithm-detail.component';

describe('AlogorithmDetailComponent', () => {
  let component: AlogorithmDetailComponent;
  let fixture: ComponentFixture<AlogorithmDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlogorithmDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlogorithmDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
