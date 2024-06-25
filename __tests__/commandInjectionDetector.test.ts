import { detectCommandInjection } from '../src/detectors/commandInjectionDetector';

describe('detectCommandInjection', () => {
  it('should return true for command injection patterns', () => {
    expect(detectCommandInjection('system("ls")')).toBe(true);
    expect(detectCommandInjection('exec("rm -rf /")')).toBe(true);
  });

  it('should return false for safe input', () => {
    expect(detectCommandInjection('This is a safe string.')).toBe(false);
  });
});
