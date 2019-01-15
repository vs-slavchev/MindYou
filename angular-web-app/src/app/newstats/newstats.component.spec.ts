import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewstatsComponent } from './newstats.component';

describe('NewstatsComponent', () => {
  let component: NewstatsComponent;
  let fixture: ComponentFixture<NewstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
