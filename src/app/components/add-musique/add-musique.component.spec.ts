import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMusiqueComponent } from './add-musique.component';

describe('AddMusiqueComponent', () => {
  let component: AddMusiqueComponent;
  let fixture: ComponentFixture<AddMusiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMusiqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMusiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
