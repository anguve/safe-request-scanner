const XPATH_INJECTION_PATTERNS = [
  /' or '1'='1/i,
  /" or "1"="1/i,
  /' or 'a'='a/i,
  /" or "a"="a/i,
  /' or '(.+?)'='(.+?)'/i,
  /" or "(.+?)"="(.+?)"/i,
  /\bconcat\((.*?)\)/i,
  /' or count\((.*?)\) > 0/i,
  /" or count\((.*?)\) > 0/i,
  /' or contains\((.*?)\)/i,
  /" or contains\((.*?)\)/i,
  /' or starts-with\((.*?)\)/i,
  /" or starts-with\((.*?)\)/i,
  /' or ends-with\((.*?)\)/i,
  /" or ends-with\((.*?)\)/i,
  /\bsubstring\((.*?)\)/i,
  /\/\*/i,
  /\.\.\/\.\./i,
  /\/\.\.\//i,
  /\bor\b|\band\b/i,
  /\btext\(\)/i,
  /not\((.*?)\)/i,
  /\bnamespace\b/i,
];

/**
 * Detects if there is a potential XPath injection in a given input.
 *
 * @param input - The input to analyze.
 * @returns `true` if a potential XPath injection is detected, otherwise `false`.
 */
export function detectXPathInjection(input: any): boolean {
  return XPATH_INJECTION_PATTERNS.some((pattern) => pattern.test(input));
}
