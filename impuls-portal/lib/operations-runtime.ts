import { MockOperationsRepository } from "./operations-repository";
import type { OperationsRepository } from "./operations-repository";
import { supabase } from "./supabase";
import { SupabaseOperationsRepository } from "./supabase-operations-repository";

export type OperationsDataSource = "mock" | "supabase";

export const operationsDataSource: OperationsDataSource =
  process.env.NEXT_PUBLIC_OPERATIONS_DATA_SOURCE === "supabase"
    ? "supabase"
    : "mock";

export const operationsRepository: OperationsRepository =
  operationsDataSource === "supabase"
    ? new SupabaseOperationsRepository(supabase)
    : new MockOperationsRepository();
