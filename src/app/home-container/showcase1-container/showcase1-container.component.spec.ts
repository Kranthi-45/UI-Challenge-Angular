import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Showcase1ContainerComponent } from './showcase1-container.component';

describe('Showcase1ContainerComponent', () => {
  let component: Showcase1ContainerComponent;
  let fixture: ComponentFixture<Showcase1ContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Showcase1ContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Showcase1ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
