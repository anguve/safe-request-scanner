const COMMAND_INJECTION_PATTERNS = [
  /\b(eval|exec|system|popen|passthru|shell_exec|proc_open)\b/i,
  /\b(sh|bash|perl|python|ruby|php|java|node|awk|find|xargs|wget|curl|netcat|nc|ftp|tftp|socat)\b/i,
  /\b(rm|mv|cp|chmod|chown|chgrp)\b/i,
  /\b(ps|top|kill|pkill|killall)\b/i,
  /\b(ifconfig|ip a|ip addr|ip link|ip route)\b/i,
  /\b(uname|id|whoami|hostname|dig|nslookup)\b/i,
];

/**
 * Detecta si hay una posible vulnerabilidad de inyección de comandos en una cadena dada.
 *
 * @param input - La cadena a analizar.
 * @returns `true` si se detecta una posible vulnerabilidad de inyección de comandos, de lo contrario `false`.
 *
 * @remarks
 * Esta función utiliza una serie de expresiones regulares para buscar patrones comunes de inyección de comandos en la cadena de entrada.
 * Los patrones incluyen operadores de shell, sustitución de comandos, comillas invertidas y funciones comunes de ejecución de comandos.
 *
 * @autor Andres Gutierrez Velez
 * @since 21/06/2024
 * @contact sr.willardkraft@gmail.com
 */
export function detectCommandInjection(input: string): boolean {
  return COMMAND_INJECTION_PATTERNS.some((pattern) => pattern.test(input));
}
