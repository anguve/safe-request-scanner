import { ScanOptions } from './ITScanOptions';

export interface ScanRequestParams {
  url?: string;
  body?: {};
  headers?: Record<string, string>;
  formData?: FormData;
  cookies?: Record<string, string>;
  options?: {
    checkUrl?: Partial<ScanOptions>;
    checkBody?: Partial<ScanOptions>;
    checkHeaders?: Partial<ScanOptions>;
    checkFormData?: Partial<ScanOptions>;
    checkCookies?: Partial<ScanOptions>;
  };
}
