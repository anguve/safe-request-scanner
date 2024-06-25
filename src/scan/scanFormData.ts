import { checkDetectors } from '@utils/functions/checkDetectors';
import { ScanOptions } from '@interfaces/ITScanOptions';

/**
 * Escanea los datos de un objeto FormData en busca de posibles problemas de seguridad.
 *
 * @param formData - El objeto FormData que se va a escanear.
 * @param options - Opciones de escaneo.
 * @returns Un array de strings que contiene los problemas encontrados durante el escaneo.
 *
 * @remarks
 * Esta función recorre los datos de un objeto FormData y realiza un escaneo en busca de posibles problemas de seguridad.
 * Los problemas encontrados se agregan a un array y se devuelven al finalizar el escaneo.
 * @author Andres Gutierrez Velez
 * @since 21/06/2024
 * @contact sr.willardkraft@gmail.com
 */
export function scanFormData(
  formData: FormData,
  options: ScanOptions,
): string[] {
  const issues: string[] = [];
  const { keys, values } = options;

  formData.forEach((value, key) => {
    const valueString = value.toString();

    if (keys) {
      checkDetectors(key, key, issues, options, true);
    }

    if (values) {
      checkDetectors(valueString, key, issues, options);
    }
  });

  return issues;
}
