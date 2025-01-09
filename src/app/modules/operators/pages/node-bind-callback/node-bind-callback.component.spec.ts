import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeBindCallbackComponent } from './node-bind-callback.component';

describe('NodeBindCallbackComponent', () => {
  let component: NodeBindCallbackComponent;
  let fixture: ComponentFixture<NodeBindCallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NodeBindCallbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NodeBindCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
