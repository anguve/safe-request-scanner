export const ALERT_MESSAGES = {
  sqlSentenceDetected: (key: string, value: string) =>
    `SQL Sentence detected in ${key}: "${value}".`,
  sqlInjectionDetected: (key: string, value: string) =>
    `SQL Injection detected in ${key}: "${value}".`,
  xssDetected: (key: string, value: string) =>
    `XSS detected in ${key}: "${value}".`,
  commandInjectionDetected: (key: string, value: string) =>
    `Command Injection detected in ${key}: "${value}".`,
  ldapInjectionDetected: (key: string, value: string) =>
    `LDAP Injection detected in ${key}: "${value}".`,
  xpathInjectionDetected: (key: string, value: string) =>
    `XPath Injection detected in ${key}: "${value}".`,
  fileInclusionDetected: (key: string, value: string) =>
    `File Inclusion detected in ${key}: "${value}".`,
  XXDetected: (key: string, value: string) =>
    `Potential XXE Injection detected in ${key}: "${value}".`,
};
