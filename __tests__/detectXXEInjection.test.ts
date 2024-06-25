import { detectXXEInjection } from '../src/detectors/detectXXEInjection';

describe('detectXXEInjection', () => {
  it('should return true for SYSTEM entity', () => {
    const input = `<!DOCTYPE foo [ <!ENTITY xxe SYSTEM "file:///etc/passwd"> ]>`;
    expect(detectXXEInjection(input)).toBe(true);
  });

  it('should return true for PUBLIC entity', () => {
    const input = `<!ENTITY % xxe PUBLIC "http://example.com/external.dtd" "">`;
    expect(detectXXEInjection(input)).toBe(true);
  });

  it('should return false for safe XML', () => {
    const input = `<note><to>Tove</to><from>Jani</from></note>`;
    expect(detectXXEInjection(input)).toBe(false);
  });

  it('should return true for ENTITY with ANY element', () => {
    const input = `<!DOCTYPE foo [<!ELEMENT foo ANY><!ENTITY xxe SYSTEM "file:///etc/passwd">]><foo>&xxe;</foo>`;
    expect(detectXXEInjection(input)).toBe(true);
  });

  it('should return false for unrelated text', () => {
    const input = `This is just a string with no XML.`;
    expect(detectXXEInjection(input)).toBe(false);
  });
});
