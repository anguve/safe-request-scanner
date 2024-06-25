import { scanUrl } from '@scan/scanUrl';
import { scanBody } from '@scan/scanBody';
import { scanHeaders } from '@scan/scanHeaders';
import { scanFormData } from '@scan/scanFormData';
import { scanCookies } from '@scan/scanCookies';
import { ScanOptions } from '@interfaces/ITScanOptions';
import { ScanRequestParams } from '@interfaces/ITScanRequestParams';

const DEFAULT_OPTIONS: ScanOptions = {
  keys: true,
  values: true,
  detectSentences: true,
  detectReservedWords: true,
};

const DEFAULT_SCAN_OPTIONS = {
  checkUrl: DEFAULT_OPTIONS,
  checkBody: DEFAULT_OPTIONS,
  checkHeaders: DEFAULT_OPTIONS,
  checkFormData: DEFAULT_OPTIONS,
  checkCookies: DEFAULT_OPTIONS,
};

/**
 * Escanea una solicitud HTTP en busca de posibles problemas de seguridad.
 *
 * @param params - Los parámetros de la solicitud a escanear.
 * @returns Un array de cadenas que representan los problemas de seguridad encontrados.
 *
 * @remarks
 * Esta función escanea una solicitud HTTP en busca de posibles problemas de seguridad en la URL, el cuerpo, los encabezados, los datos del formulario y las cookies.
 *
 * @param url - La URL de la solicitud.
 * @param body - El cuerpo de la solicitud.
 * @param headers - Los encabezados de la solicitud.
 * @param formData - Los datos del formulario de la solicitud.
 * @param cookies - Las cookies de la solicitud.
 * @param options - Las opciones de escaneo personalizadas.
 *
 * @returns Un array de cadenas que representan los problemas de seguridad encontrados.
 * @author Andres Gutierrez Velez
 * @since 21/06/2024
 * @contact sr.willardkraft@gmail.com
 */
export function scanRequest(params: ScanRequestParams): string[] {
  const {
    url = '',
    body = {},
    headers = {},
    formData = new FormData(),
    cookies = {},
    options = DEFAULT_SCAN_OPTIONS,
  } = params;

  const MERGED_OPTIONS = {
    checkUrl: { ...DEFAULT_OPTIONS, ...options.checkUrl },
    checkBody: { ...DEFAULT_OPTIONS, ...options.checkBody },
    checkHeaders: { ...DEFAULT_OPTIONS, ...options.checkHeaders },
    checkFormData: { ...DEFAULT_OPTIONS, ...options.checkFormData },
    checkCookies: { ...DEFAULT_OPTIONS, ...options.checkCookies },
  };

  let issues: string[] = [];

  if (url !== '') {
    const checkUrl = MERGED_OPTIONS.checkUrl;
    if (checkUrl.values) {
      issues = issues.concat(scanUrl(url, checkUrl));
    }
  }

  if (Object.keys(body).length > 0) {
    const checkBody = MERGED_OPTIONS.checkBody;
    issues = issues.concat(scanBody(body, checkBody));
  }

  if (Object.keys(headers).length > 0) {
    const checkHeaders = MERGED_OPTIONS.checkHeaders;
    issues = issues.concat(scanHeaders(headers, checkHeaders));
  }

  if (formData.entries().next().done === false) {
    const checkFormData = MERGED_OPTIONS.checkFormData;
    issues = issues.concat(scanFormData(formData, checkFormData));
  }

  if (Object.keys(cookies).length > 0) {
    const checkCookies = MERGED_OPTIONS.checkCookies;
    issues = issues.concat(scanCookies(cookies, checkCookies));
  }

  return issues;
}
