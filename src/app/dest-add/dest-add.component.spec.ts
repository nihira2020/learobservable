import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestAddComponent } from './dest-add.component';

describe('DestAddComponent', () => {
  let component: DestAddComponent;
  let fixture: ComponentFixture<DestAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
