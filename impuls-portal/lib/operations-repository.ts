import type {
  Assignment,
  CommunicationEntry,
  PayrollRelease,
  Permit,
  Person,
  Report,
} from "./operations";

export interface OperationsRepository {
  listPeople(): Promise<Person[]>;
  getPerson(id: string): Promise<Person | null>;
  listAssignments(): Promise<Assignment[]>;
  listReports(): Promise<Report[]>;
  updateReportStatus(id: string, status: Report["status"]): Promise<Report>;
  listPayrollReleases(): Promise<PayrollRelease[]>;
  updatePayrollStatus(id: string, status: PayrollRelease["status"]): Promise<PayrollRelease>;
  listPermits(): Promise<Permit[]>;
  listCommunication(personId?: string, assignmentId?: string): Promise<CommunicationEntry[]>;
}

const now = "2026-07-03T10:00:00.000Z";

const people: Person[] = [
  { id: "p-1", personnelNumber: "IO-10284", firstName: "Max", lastName: "Muster", email: "max.muster@email.ch", phone: "+41 79 555 18 24", role: "Produktionsmitarbeiter", location: "Zürich", personStatus: "Mitarbeiter", availabilityStatus: "Aktiv im Einsatz", createdAt: now, updatedAt: now },
  { id: "p-2", personnelNumber: "IO-10285", firstName: "Anna", lastName: "Müller", email: "anna.mueller@email.ch", role: "Logistikerin", location: "Basel", personStatus: "Mitarbeiter", availabilityStatus: "Aktiv im Einsatz", createdAt: now, updatedAt: now },
  { id: "p-3", firstName: "Luca", lastName: "Rossi", email: "luca.rossi@email.ch", role: "Pflegeassistent", location: "Bern", personStatus: "Kandidat", availabilityStatus: "Verfügbar", createdAt: now, updatedAt: now },
];

const assignments: Assignment[] = [
  { id: "a-1", personId: "p-1", clientId: "c-1", consultantId: "u-1", title: "Produktion Frühschicht", workload: 100, startDate: "2026-06-01", endDate: "2026-08-31", status: "Rapport eingegangen" },
  { id: "a-2", personId: "p-2", clientId: "c-2", consultantId: "u-1", title: "Logistik Wareneingang", workload: 100, startDate: "2026-06-15", status: "Rapport erwartet" },
];

let reports: Report[] = [
  { id: "r-1", personId: "p-1", assignmentId: "a-1", period: "KW 27", hours: 42.5, status: "Eingegangen", submittedAt: now },
  { id: "r-2", personId: "p-2", assignmentId: "a-2", period: "KW 27", status: "Fehlt" },
];

let payroll: PayrollRelease[] = [
  { id: "l-1", personId: "p-1", assignmentId: "a-1", reportId: "r-1", period: "2026-07", netAmount: 5184.4, status: "In Prüfung" },
  { id: "l-2", personId: "p-2", assignmentId: "a-2", period: "2026-07", status: "Rapport fehlt" },
];

const permits: Permit[] = [
  { id: "b-1", personId: "p-1", type: "B-Bewilligung", validUntil: "2027-03-31", status: "Gültig" },
  { id: "b-2", personId: "p-2", type: "C-Bewilligung", validUntil: "2026-07-15", status: "Läuft bald ab" },
];

const communication: CommunicationEntry[] = [
  { id: "k-1", personId: "p-1", assignmentId: "a-1", clientId: "c-1", source: "WhatsApp", body: "Rapport für KW 27 gesendet.", createdBy: "u-1", createdAt: now },
  { id: "k-2", personId: "p-2", assignmentId: "a-2", source: "Telefon", body: "Rückfrage zur Bewilligung besprochen.", createdBy: "u-1", createdAt: now },
];

export class MockOperationsRepository implements OperationsRepository {
  async listPeople() { return structuredClone(people); }
  async getPerson(id: string) { return structuredClone(people.find((person) => person.id === id) ?? null); }
  async listAssignments() { return structuredClone(assignments); }
  async listReports() { return structuredClone(reports); }
  async updateReportStatus(id: string, status: Report["status"]) {
    reports = reports.map((report) => report.id === id ? { ...report, status } : report);
    const updated = reports.find((report) => report.id === id);
    if (!updated) throw new Error("Rapport nicht gefunden");
    return structuredClone(updated);
  }
  async listPayrollReleases() { return structuredClone(payroll); }
  async updatePayrollStatus(id: string, status: PayrollRelease["status"]) {
    payroll = payroll.map((item) => item.id === id ? { ...item, status } : item);
    const updated = payroll.find((item) => item.id === id);
    if (!updated) throw new Error("Lohnfreigabe nicht gefunden");
    return structuredClone(updated);
  }
  async listPermits() { return structuredClone(permits); }
  async listCommunication(personId?: string, assignmentId?: string) {
    return structuredClone(communication.filter((entry) => (!personId || entry.personId === personId) && (!assignmentId || entry.assignmentId === assignmentId)));
  }
}

export const operationsRepository: OperationsRepository = new MockOperationsRepository();
