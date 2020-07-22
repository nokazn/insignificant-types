export type Unpromisify<T> = T extends Promise<infer U> ? U : T;

export type KeyOfMap<T> = T extends Map<infer K, unknown> ? K : never;
export type ValueOfMap<T> = T extends Map<unknown, infer V> ? V : never;

export type ValueOfSet<T> = T extends Set<infer V> ? V : never;

export type LimitedArray<L extends number, T> = T[] & { length: L };
