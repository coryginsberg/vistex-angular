import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarsComponent } from './webinars.component';

describe('WebinarsComponent', () => {
  let component: WebinarsComponent;
  let fixture: ComponentFixture<WebinarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebinarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebinarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
