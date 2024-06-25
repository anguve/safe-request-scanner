const LDAP_INJECTION_PATTERNS = [
  /ldap:\/\/|ldaps:\/\//i,
  /\badmin\b/i,
  /\bOU=/i,
  /\bCN=/i,
  /\bDC=/i,
  /\bUID=/i,
];

/**
 * Detecta si hay una posible inyección LDAP en una cadena dada.
 *
 * @param input - La cadena a analizar.
 * @returns `true` si se detecta una posible inyección LDAP, de lo contrario `false`.
 *
 * @remarks
 * Esta función utiliza una serie de expresiones regulares para buscar patrones comunes de inyección LDAP en la cadena de entrada.
 * Los patrones incluyen operadores lógicos, atributos comunes de LDAP y caracteres especiales utilizados en consultas LDAP.
 *
 * @autor Andres Gutierrez Velez
 * @since 21/06/2024
 * @contact sr.willardkraft@gmail.com
 */
export function detectLDAPInjection(input: string): boolean {
  return LDAP_INJECTION_PATTERNS.some((pattern) => pattern.test(input));
}
