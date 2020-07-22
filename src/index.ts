export type Unpromisify<T> = T extends Promise<infer U> ? U : T;

export type KeyOfMap<T, V = any> = T extends Map<infer K, V> ? K : never;
export type ValueOfMap<T, K = any> = T extends Map<K, infer V> ? V : never;

export type ValueOfSet<T> = T extends Set<infer V> ? V : never;

export type LimitedArray<L extends number, T> = T[] & { length: L };
