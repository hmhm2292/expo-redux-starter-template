export interface CounterState {
  value: number;
  loading: boolean;
  error: string | null;
}

export interface CounterResponse {
  value: number;
  timestamp: string;
}
