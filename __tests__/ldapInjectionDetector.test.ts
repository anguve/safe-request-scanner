import { detectLDAPInjection } from '../src/detectors/ldapInjectionDetector';

describe('detectLDAPInjection', () => {
  it('should return true for LDAP injection patterns', () => {
    expect(detectLDAPInjection('ldap://example.com')).toBe(true);
    expect(detectLDAPInjection('admin')).toBe(true);
    expect(detectLDAPInjection('OU=Users,DC=example,DC=com')).toBe(true);
  });

  it('should return false for safe input', () => {
    expect(detectLDAPInjection('This is a safe string.')).toBe(false);
  });
});
