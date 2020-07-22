/**
 * Promise types
 */
export type Unpromisify<T> = T extends Promise<infer U> ? U : T;

/**
 * Map types
 */
export type KeyOfMap<T, V = any> = T extends Map<infer K, V> ? K : never;
export type ValueOfMap<T, K = any> = T extends Map<K, infer V> ? V : never;

/**
 * Set types
 */
export type ValueOfSet<T> = T extends Set<infer V> ? V : never;

/**
 * Array types
 */
export type LimitedArray<L extends number, T = any> = T[] & { length: L };

// From https://stackoverflow.com/a/50375286/7381355
export type UnionToIntersection<T> = (T extends any ? (k: T) => void : never) extends ((k: infer I) => void) ? I : never;

/**
 * Object types
 */
export type ValueOf<T extends { [k: string]: any }> = T[keyof T];

export type UnionOfEachObject<T extends { [k: string]: any }> = ValueOf<{
  [P in keyof T]: { [Q in P]: T[Q] }
}>;

export type UnionValueOf<
  T extends { [k: string]: any },
  K extends keyof T,
> = UnionOfEachObject<T>[K] extends never ? never : T[K]

export type EachKeyOf<T extends { [k: string]: any }> = keyof UnionToIntersection<T>
