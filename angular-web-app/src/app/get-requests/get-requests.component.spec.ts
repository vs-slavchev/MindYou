import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRequestsComponent } from './get-requests.component';

describe('GetRequestsComponent', () => {
  let component: GetRequestsComponent;
  let fixture: ComponentFixture<GetRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
