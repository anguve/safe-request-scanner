import { ScanOptions } from '../interfaces/ITScanOptions';
import { checkDetectors } from '../utils/functions/checkDetectors';

/**
 * Escanea una URL dada en busca de problemas basados en las opciones proporcionadas.
 * @param url - La URL que se va a escanear.
 * @param options - Las opciones para el escaneo.
 * @returns Un array de cadenas que representan los problemas detectados.
 *
 * @autor Andres Gutierrez Velez
 * @fecha 21/06/2024
 * @correoDeContacto sr.willardkraft@gmail.com
 */
/**
 * Scans a given URL for issues based on the provided options.
 * @param url - The URL to be scanned.
 * @param options - The options for the scan.
 * @returns An array of strings representing the detected issues.
 */
export function scanUrl(url: string, options: ScanOptions): string[] {
  const issues: string[] = [];
  checkDetectors(url, 'URL', issues, options);
  return issues;
}
