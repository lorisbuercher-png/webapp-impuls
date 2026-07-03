export type PersonStatus =
  | "Bewerber"
  | "Kandidat"
  | "Mitarbeiter"
  | "Ehemaliger Mitarbeiter";

export type AvailabilityStatus = "Verfügbar" | "Aktiv im Einsatz" | "Abgemeldet";

export type AssignmentStatus =
  | "Einsatz erstellt"
  | "Aktiv"
  | "Rapport erwartet"
  | "Rapport eingegangen"
  | "Rapport geprüft"
  | "Lohn freigegeben"
  | "Ausbezahlt"
  | "Abgeschlossen";

export type ReportStatus = "Fehlt" | "Eingegangen" | "In Prüfung" | "Freigegeben";
export type PayrollStatus = "In Prüfung" | "Rapport fehlt" | "Bereit zur Auszahlung" | "Ausbezahlt";
export type PermitStatus = "Gültig" | "Läuft bald ab" | "Abgelaufen" | "Fehlt";
export type CommunicationSource = "WhatsApp" | "E-Mail" | "Telefon" | "Intern";

export interface Person {
  id: string;
  personnelNumber?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  role?: string;
  location?: string;
  personStatus: PersonStatus;
  availabilityStatus?: AvailabilityStatus;
  createdAt: string;
  updatedAt: string;
}

export interface Client {
  id: string;
  name: string;
  contactName?: string;
  email?: string;
  phone?: string;
  active: boolean;
}

export interface Assignment {
  id: string;
  personId: string;
  clientId: string;
  consultantId?: string;
  title: string;
  workload: number;
  startDate: string;
  endDate?: string;
  status: AssignmentStatus;
}

export interface Report {
  id: string;
  personId: string;
  assignmentId: string;
  period: string;
  hours?: number;
  fileUrl?: string;
  status: ReportStatus;
  submittedAt?: string;
  reviewedAt?: string;
  reviewedBy?: string;
}

export interface PayrollRelease {
  id: string;
  personId: string;
  assignmentId: string;
  reportId?: string;
  period: string;
  netAmount?: number;
  status: PayrollStatus;
  releasedAt?: string;
  paidAt?: string;
}

export interface Permit {
  id: string;
  personId: string;
  type: string;
  validFrom?: string;
  validUntil?: string;
  fileUrl?: string;
  status: PermitStatus;
}

export interface DocumentRecord {
  id: string;
  personId: string;
  assignmentId?: string;
  name: string;
  category: "Vertrag" | "Bewilligung" | "Bewerbung" | "Rapport" | "Lohn" | "Sonstiges";
  fileUrl: string;
  createdAt: string;
}

export interface CommunicationEntry {
  id: string;
  personId?: string;
  assignmentId?: string;
  clientId?: string;
  source: CommunicationSource;
  subject?: string;
  body: string;
  createdBy: string;
  createdAt: string;
}

export interface TimelineEvent {
  id: string;
  personId: string;
  assignmentId?: string;
  type: string;
  title: string;
  detail?: string;
  createdAt: string;
}

export const assignmentFlow: AssignmentStatus[] = [
  "Einsatz erstellt",
  "Aktiv",
  "Rapport erwartet",
  "Rapport eingegangen",
  "Rapport geprüft",
  "Lohn freigegeben",
  "Ausbezahlt",
  "Abgeschlossen",
];

export function canReleasePayroll(reportStatus: ReportStatus) {
  return reportStatus === "Freigegeben";
}

export function getPermitStatus(validUntil?: string): PermitStatus {
  if (!validUntil) return "Fehlt";
  const remainingDays = Math.ceil((new Date(validUntil).getTime() - Date.now()) / 86_400_000);
  if (remainingDays < 0) return "Abgelaufen";
  if (remainingDays <= 30) return "Läuft bald ab";
  return "Gültig";
}
