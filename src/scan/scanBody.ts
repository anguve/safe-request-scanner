import { checkDetectors } from '@utils/functions/checkDetectors';
import { ScanOptions } from '@interfaces/ITScanOptions';

/**
 * Escanea el cuerpo de una solicitud HTTP y busca posibles problemas de seguridad.
 *
 * @param body - El cuerpo de la solicitud HTTP.
 * @param options - Opciones de escaneo.
 * @returns Un array de cadenas que representan los problemas encontrados en el escaneo.
 *
 * @remarks
 * Esta función escanea el cuerpo de una solicitud HTTP en busca de posibles problemas de seguridad.
 * Puede escanear las claves y/o los valores del cuerpo, dependiendo de las opciones proporcionadas.
 * Los problemas encontrados se agregan a un array y se devuelven al final del escaneo.
 * @author Andres Gutierrez Velez
 * @since 21/06/2024
 * @contact sr.willardkraft@gmail.com
 */
export function scanBody(
  body: Record<string, string>,
  options: ScanOptions,
): string[] {
  const issues: string[] = [];
  const { keys, values } = options;

  if (keys) {
    Object.keys(body).forEach((key) => {
      checkDetectors(key, key, issues, options, true);
    });
  }

  if (values) {
    Object.entries(body).forEach(([key, value]) => {
      checkDetectors(value, key, issues, options);
    });
  }

  return issues;
}
