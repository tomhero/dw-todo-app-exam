import { sleep } from './time';

describe('sleep()', () => {
  let spySetTimeout: jest.SpyInstance;

  beforeEach(() => {
    spySetTimeout = jest.spyOn(window, 'setTimeout');
  });

  it('should not wait for 0 sec', () => {
    sleep(0);
    expect(spySetTimeout).not.toHaveBeenCalled();
  });

  it('should wait for 1 sec correctly', () => {
    sleep(1);
    expect(spySetTimeout).toHaveBeenCalledTimes(1);
    expect(spySetTimeout).lastCalledWith(expect.any(Function), 1000);
  });

  it('should wait for 4 sec correctly', () => {
    sleep(10);
    expect(spySetTimeout).toHaveBeenCalledTimes(1);
    expect(spySetTimeout).lastCalledWith(expect.any(Function), 10000);
  });

  it('should not wait for -1 sec', () => {
    sleep(-1);
    expect(spySetTimeout).not.toHaveBeenCalled();
  });

  it('should handle case of NaN correctly', () => {
    sleep(NaN);
    expect(spySetTimeout).not.toHaveBeenCalled();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
