export interface Itask {
  id: number;
  value: string;
  state: "pending" | "completed" | "delete";
}
