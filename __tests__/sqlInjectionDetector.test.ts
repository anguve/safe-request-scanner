import {
  isSQLSentence,
  detectSQLInjection,
} from '../src/detectors/sqlInjectionDetector';

describe('isSQLSentence', () => {
  it('should return true for SQL sentences', () => {
    expect(isSQLSentence('SELECT * FROM users')).toBe(true);
    expect(
      isSQLSentence('INSERT INTO table_name VALUES (value1, value2)'),
    ).toBe(true);
  });

  it('should return false for non-SQL sentences', () => {
    expect(isSQLSentence('Hello, world!')).toBe(false);
  });
});

describe('detectSQLInjection', () => {
  it('should return true for SQL injection patterns', () => {
    expect(
      detectSQLInjection('SELECT * FROM users WHERE username = "admin" --'),
    ).toBe(true);
  });

  it('should return false for safe input', () => {
    expect(detectSQLInjection('This is a safe string.')).toBe(false);
  });
});
