import { ScanOptions } from '../interfaces/ITScanOptions';
import { checkDetectors } from '../utils/functions/checkDetectors';

/**
 * Escanea las cookies proporcionadas y busca posibles problemas de seguridad.
 *
 * @param cookies - Un objeto que representa las cookies a escanear.
 * @param options - Opciones de escaneo.
 * @returns Un array de strings que contiene los problemas de seguridad encontrados.
 *
 * @remarks
 * Esta función escanea tanto las claves como los valores de las cookies proporcionadas.
 * Utiliza los detectores de seguridad configurados en las opciones para buscar posibles problemas.
 * Los problemas encontrados se agregan al array de issues y se devuelven al finalizar el escaneo.
 *
 * @author Andres Gutierrez Velez
 * @since 21/06/2024
 * @contact sr.willardkraft@gmail.com
 */
export function scanCookies(
  cookies: Record<string, string>,
  options: ScanOptions,
): string[] {
  const issues: string[] = [];

  Object.entries(cookies).forEach(([key, value]) => {
    checkDetectors(key, key, issues, options, true);
    checkDetectors(value, key, issues, options);
  });

  return issues;
}
