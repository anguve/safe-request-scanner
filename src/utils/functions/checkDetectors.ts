import {
  detectSQLInjection,
  isSQLSentence,
} from '@detectors/sqlInjectionDetector';
import { detectXSS } from '@detectors/xssDetector';
import { detectCommandInjection } from '@detectors/commandInjectionDetector';
import { detectLDAPInjection } from '@detectors/ldapInjectionDetector';
import { detectXPathInjection } from '@detectors/xpathInjectionDetector';
import { detectFileInclusion } from '@detectors/fileInclusionDetector';
import { ScanOptions } from '@interfaces/ITScanOptions';
import { ALERT_MESSAGES } from '@utils/constants/alertConstants';
import { detectXXEInjection } from '@detectors/detectXXEInjection';

/**
 * Comprueba diferentes detectores de seguridad en un valor dado y agrega los problemas detectados a una lista de problemas.
 * Los detectores incluyen la detección de sentencias SQL, inyección de SQL, XSS (Cross-Site Scripting) e inyección de scripts.
 *
 * @param value - El valor a comprobar.
 * @param key - La clave asociada al valor.
 * @param issues - La lista de problemas detectados.
 * @param options - Las opciones de escaneo.
 * @param isKey - Indica si el valor es una clave.
 * @returns void
 *
 * @remarks
 * Este método comprueba si el valor dado contiene sentencias SQL, inyección de SQL, XSS o inyección de scripts.
 * Si se detecta alguno de estos problemas, se agrega un mensaje de alerta a la lista de problemas.
 *
 * @example
 * checkDetectors("SELECT * FROM users", "query", issues, { detectSentences: true, detectReservedWords: true }, true);
 */
export function checkDetectors(
  value: string,
  key: string,
  issues: string[],
  options: ScanOptions,
  isKey: boolean = false,
): void {
  const stringValue = JSON.stringify(value);
  const stringKey = JSON.stringify(key);

  const { detectSentences, detectReservedWords } = options;
  const keyOrValue = isKey ? 'key' : stringKey;

  if (detectSentences && isSQLSentence(stringValue)) {
    issues.push(ALERT_MESSAGES.sqlSentenceDetected(keyOrValue, stringValue));
  }
  if (detectReservedWords && detectSQLInjection(stringValue)) {
    issues.push(ALERT_MESSAGES.sqlInjectionDetected(keyOrValue, stringValue));
  }
  if (detectXSS(stringValue)) {
    issues.push(ALERT_MESSAGES.xssDetected(keyOrValue, stringValue));
  }
  if (detectCommandInjection(stringValue)) {
    issues.push(
      ALERT_MESSAGES.commandInjectionDetected(keyOrValue, stringValue),
    );
  }
  if (detectLDAPInjection(stringValue)) {
    issues.push(ALERT_MESSAGES.ldapInjectionDetected(keyOrValue, stringValue));
  }
  if (detectXPathInjection(stringValue)) {
    issues.push(ALERT_MESSAGES.xpathInjectionDetected(keyOrValue, stringValue));
  }
  if (detectFileInclusion(stringValue)) {
    issues.push(ALERT_MESSAGES.fileInclusionDetected(keyOrValue, stringValue));
  }

  if (detectXXEInjection(stringValue)) {
    issues.push(ALERT_MESSAGES.XXDetected(keyOrValue, stringValue));
  }
}
