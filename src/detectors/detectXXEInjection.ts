const XXE_INJECTION_PATTERNS = [
  /<!ENTITY\s+.*\s+SYSTEM\s+["'].*["']\s*>/i,
  /<!DOCTYPE\s+.*\s+\[.*<!ENTITY\s+.*\s+SYSTEM\s+["'].*["']\s*>.*\]>/i,
  /<!ENTITY\s+.*\s+PUBLIC\s+["'].*["']\s+["'].*["']\s*>/i,
  /<!DOCTYPE\s+.*\s+\[.*<!ENTITY\s+.*\s+PUBLIC\s+["'].*["']\s+["'].*["']\s*>.*\]>/i,
  /<!ELEMENT\s+.*\s+ANY\s+>/i,
  /<!ENTITY\s+%.*;>/i,
  /<!ENTITY\s+%.*SYSTEM.*;>/i,
  /<!ENTITY\s+%.*PUBLIC.*;>/i,
];

/**
 * Detects if there is a potential XXE injection in a given input.
 *
 * @param input - The input to analyze.
 * @returns `true` if a potential XXE injection is detected, otherwise `false`.
 */
export function detectXXEInjection(input: string): boolean {
  return XXE_INJECTION_PATTERNS.some((pattern) => pattern.test(input));
}
