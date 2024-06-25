import { detectFileInclusion } from '../src/detectors/fileInclusionDetector';

describe('detectFileInclusion', () => {
  it('should return true for file inclusion patterns', () => {
    expect(detectFileInclusion('include http://example.com')).toBe(true);
    expect(detectFileInclusion('php://input')).toBe(true);
    expect(detectFileInclusion('<?php echo "test"; ?>')).toBe(true);
  });

  it('should return false for safe input', () => {
    expect(detectFileInclusion('This is a safe string.')).toBe(false);
  });
});
