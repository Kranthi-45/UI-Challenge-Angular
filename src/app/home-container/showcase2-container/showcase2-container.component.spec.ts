import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Showcase2ContainerComponent } from './showcase2-container.component';

describe('Showcase2ContainerComponent', () => {
  let component: Showcase2ContainerComponent;
  let fixture: ComponentFixture<Showcase2ContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Showcase2ContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Showcase2ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
