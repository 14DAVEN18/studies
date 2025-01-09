import { TestBed } from '@angular/core/testing';

import { NodeBindCallbackService } from './node-bind-callback.service';

describe('NodeBindCallbackService', () => {
  let service: NodeBindCallbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeBindCallbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
