import type { SupabaseClient } from "@supabase/supabase-js";
import type {
  Assignment,
  CommunicationEntry,
  PayrollRelease,
  Permit,
  Person,
  Report,
} from "./operations";
import type { OperationsRepository } from "./operations-repository";

/**
 * Prepared Supabase adapter for IMPULS ONE.
 *
 * This adapter is intentionally not activated yet. The UI continues to use
 * MockOperationsRepository until the table design and access policies have
 * been reviewed and approved.
 */
export class SupabaseOperationsRepository implements OperationsRepository {
  constructor(private readonly client: SupabaseClient) {}

  async listPeople(): Promise<Person[]> {
    const { data, error } = await this.client.from("people").select("*").order("lastName");
    if (error) throw error;
    return (data ?? []) as Person[];
  }

  async getPerson(id: string): Promise<Person | null> {
    const { data, error } = await this.client.from("people").select("*").eq("id", id).maybeSingle();
    if (error) throw error;
    return data as Person | null;
  }

  async listAssignments(): Promise<Assignment[]> {
    const { data, error } = await this.client.from("assignments").select("*").order("startDate", { ascending: false });
    if (error) throw error;
    return (data ?? []) as Assignment[];
  }

  async listReports(): Promise<Report[]> {
    const { data, error } = await this.client.from("reports").select("*").order("period", { ascending: false });
    if (error) throw error;
    return (data ?? []) as Report[];
  }

  async updateReportStatus(id: string, status: Report["status"]): Promise<Report> {
    const { data, error } = await this.client
      .from("reports")
      .update({ status, reviewedAt: status === "Freigegeben" ? new Date().toISOString() : null })
      .eq("id", id)
      .select("*")
      .single();
    if (error) throw error;
    return data as Report;
  }

  async listPayrollReleases(): Promise<PayrollRelease[]> {
    const { data, error } = await this.client.from("payroll_releases").select("*").order("period", { ascending: false });
    if (error) throw error;
    return (data ?? []) as PayrollRelease[];
  }

  async updatePayrollStatus(id: string, status: PayrollRelease["status"]): Promise<PayrollRelease> {
    const timestamp = new Date().toISOString();
    const { data, error } = await this.client
      .from("payroll_releases")
      .update({ status, releasedAt: status === "Bereit zur Auszahlung" ? timestamp : null, paidAt: status === "Ausbezahlt" ? timestamp : null })
      .eq("id", id)
      .select("*")
      .single();
    if (error) throw error;
    return data as PayrollRelease;
  }

  async listPermits(): Promise<Permit[]> {
    const { data, error } = await this.client.from("permits").select("*").order("validUntil", { ascending: true });
    if (error) throw error;
    return (data ?? []) as Permit[];
  }

  async listCommunication(personId?: string, assignmentId?: string): Promise<CommunicationEntry[]> {
    let query = this.client.from("communication_entries").select("*").order("createdAt", { ascending: false });
    if (personId) query = query.eq("personId", personId);
    if (assignmentId) query = query.eq("assignmentId", assignmentId);
    const { data, error } = await query;
    if (error) throw error;
    return (data ?? []) as CommunicationEntry[];
  }
}

export const SUPABASE_OPERATIONS_TABLES = [
  "people",
  "assignments",
  "reports",
  "payroll_releases",
  "permits",
  "communication_entries",
] as const;
