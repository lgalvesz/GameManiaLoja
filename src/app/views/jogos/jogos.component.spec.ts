import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JosoComponent } from './jogos.component';

describe('JosoComponent', () => {
  let component: JosoComponent;
  let fixture: ComponentFixture<JosoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JosoComponent]
    });
    fixture = TestBed.createComponent(JosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
