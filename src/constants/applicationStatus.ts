import type { ApplicationStatus } from '../types/application'

export const APPLICATION_STATUS_LABELS: Record<ApplicationStatus, string> = {
  planned: 'Suunnitteilla',
  applied: 'Haettu',
  'awaiting-response': 'Odottaa vastausta',
  interview: 'Haastattelu',
  rejected: 'Hylätty',
  closed: 'Päättynyt',
}
