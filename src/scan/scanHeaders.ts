import { checkDetectors } from '@utils/functions/checkDetectors';
import { ScanOptions } from '@interfaces/ITScanOptions';

/**
 * Escanea los encabezados de una solicitud HTTP y busca posibles problemas de seguridad.
 *
 * @param headers - Los encabezados de la solicitud HTTP.
 * @param options - Opciones de escaneo.
 * @returns Un array de cadenas que representan los problemas encontrados en los encabezados.
 *
 * @remarks
 * Esta función recorre los encabezados de la solicitud HTTP y realiza un escaneo de seguridad en las claves y/o valores de los encabezados, según las opciones proporcionadas.
 * @author Andres Gutierrez Velez
 * @since 21/06/2024
 * @contact sr.willardkraft@gmail.com
 */
export function scanHeaders(
  headers: Record<string, string>,
  options: ScanOptions,
): string[] {
  const issues: string[] = [];
  const { keys, values } = options;

  Object.entries(headers).forEach(([key, value]) => {
    if (keys) {
      checkDetectors(key, key, issues, options, true);
    }

    if (values) {
      checkDetectors(value, key, issues, options);
    }
  });

  return issues;
}
