import { detectXPathInjection } from '../src/detectors/xpathInjectionDetector';

describe('detectXPathInjection', () => {
  it('should return true for common XPath injection patterns', () => {
    expect(detectXPathInjection("' or '1'='1")).toBe(true);
    expect(detectXPathInjection('" or "1"="1')).toBe(true);
    expect(detectXPathInjection("concat('a', 'b')")).toBe(true);
  });

  it('should return false for safe input', () => {
    expect(detectXPathInjection('Hello, world!')).toBe(false);
  });
});
