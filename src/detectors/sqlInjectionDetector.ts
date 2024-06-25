const RESERVED_WORDS = [
  'SELECT',
  'UPDATE',
  'DELETE',
  'INSERT',
  'DROP',
  'UNION',
  'AND',
  'OR',
  'WHERE',
  'FROM',
  'JOIN',
  'TABLE',
  'INTO',
  'VALUES',
  'SET',
  'CREATE',
  'ALTER',
  'INDEX',
  'VIEW',
  'TRIGGER',
  'PROCEDURE',
  'FUNCTION',
  'DATABASE',
  'COLUMN',
  'KEY',
  'PRIMARY',
  'FOREIGN',
  'REFERENCES',
  'GROUP',
  'ORDER',
  'BY',
  'HAVING',
  'LIMIT',
  'OFFSET',
  'EXEC',
  'DECLARE',
  'CAST',
  'CONVERT',
];

const SQL_PATTERNS = [
  /\bSELECT\b\s+.*\s+\bFROM\b/i,
  /\bINSERT\b\s+INTO\b/i,
  /\bUPDATE\b\s+.*\s+\bSET\b/i,
  /\bDELETE\b\s+.*\s+\bFROM\b/i,
  /\bCREATE\b\s+TABLE\b/i,
  /\bDROP\b\s+TABLE\b/i,
  /\bALTER\b\s+TABLE\b/i,
  /\bUNION\b\s+.*\s+\bSELECT\b/i,
  /\bJOIN\b\s+.*\s+\bON\b/i,
  /\bCREATE\b\s+DATABASE\b/i,
  /\bCREATE\b\s+VIEW\b/i,
  /\bCREATE\b\s+INDEX\b/i,
  /\bCREATE\b\s+TRIGGER\b/i,
  /\bCREATE\b\s+PROCEDURE\b/i,
  /\bCREATE\b\s+FUNCTION\b/i,
  /\bALTER\b\s+DATABASE\b/i,
  /\bALTER\b\s+VIEW\b/i,
  /\bALTER\b\s+INDEX\b/i,
  /\bALTER\b\s+TRIGGER\b/i,
  /\bALTER\b\s+PROCEDURE\b/i,
  /\bALTER\b\s+FUNCTION\b/i,
  /\bDROP\b\s+DATABASE\b/i,
  /\bDROP\b\s+VIEW\b/i,
  /\bDROP\b\s+INDEX\b/i,
  /\bDROP\b\s+TRIGGER\b/i,
  /\bDROP\b\s+PROCEDURE\b/i,
  /\bDROP\b\s+FUNCTION\b/i,
  /\b--\b/i,
  /(\bEXEC\b|\bDECLARE\b|\bCAST\b|\bCONVERT\b)/i,
];

/**
 * Verifica si una cadena dada contiene una sentencia SQL potencialmente peligrosa.
 *
 * @param input - La cadena a verificar.
 * @returns `true` si se detecta una sentencia SQL potencialmente peligrosa, de lo contrario `false`.
 *
 * @autor Andres Gutierrez Velez
 * @since 21/06/2024
 * @contact sr.willardkraft@gmail.com
 */

export function isSQLSentence(input: string): boolean {
  const upperInput = input.toUpperCase().trim();
  const words = upperInput.split(/\s+/);
  const reservedWordCount = words.filter((word) =>
    RESERVED_WORDS.includes(word),
  ).length;

  if (reservedWordCount > 1) {
    return true;
  }

  return SQL_PATTERNS.some((pattern) => pattern.test(upperInput));
}

/**
 * Detecta si hay una posible inyección SQL en una cadena dada.
 *
 * @param input - La cadena a analizar.
 * @returns `true` si se detecta una posible inyección SQL, de lo contrario `false`.
 *
 * @remarks
 * Esta función utiliza una expresión regular para buscar patrones comunes de inyección SQL en la cadena de entrada.
 * Los patrones incluyen palabras clave SQL como SELECT, UPDATE, DELETE, INSERT, DROP, UNION, AND, OR, así como números de dos o más dígitos y el patrón '; --'.
 *
 * @autor Andres Gutierrez Velez
 * @since 21/06/2024
 * @contact sr.willardkraft@gmail.com
 */

export function detectSQLInjection(input: string): boolean {
  const sqlInjectionPattern =
    /\b(SELECT|UPDATE|DELETE|INSERT|DROP|UNION|EXEC|DECLARE|CAST|CONVERT|--|['"];\s*--)\b/i;
  return sqlInjectionPattern.test(input);
}
