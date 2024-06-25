const FILE_INCLUSION_PATTERNS = [
  /\binclude\b.*\bhttp:\/\//i,
  /\binclude\b.*\bftp:\/\//i,
  /\bphp:\/\/input\b/,
  /expect:\/\//,
  /phar:\/\//,
  /\bini_set\b/i,
  /\bopen_basedir\b/i,
  /\bload_file\b/i,
  /\binto\b\s+\boutfile\b/i,
  /\bfile:\/\/\b/,
  /\bphp:\/\/\b/,
  /<\?php/i,
  /expect:\/\//i,
  /phar:\/\//i,
  /\bfile_put_contents\b/i,
  /\bexec\b/i,
  /\bsystem\b/i,
  /\bshell_exec\b/i,
  /\bpopen\b/i,
  /\bproc_open\b/i,
];
/**
 * Detecta si hay una posible vulnerabilidad de inclusión de archivos en una cadena dada.
 *
 * @param input - La cadena a analizar.
 * @returns `true` si se detecta una posible vulnerabilidad de inclusión de archivos, de lo contrario `false`.
 *
 * @remarks
 * Esta función utiliza una serie de expresiones regulares para buscar patrones comunes de inclusión de archivos en la cadena de entrada.
 * Los patrones incluyen recorrido de directorios, inclusión de archivos remotos y acceso a archivos y directorios sensibles.
 *
 * @autor Andres Gutierrez Velez
 * @since 21/06/2024
 * @contact sr.willardkraft@gmail.com
 */
export function detectFileInclusion(input: string): boolean {
  return FILE_INCLUSION_PATTERNS.some((pattern) => pattern.test(input));
}
