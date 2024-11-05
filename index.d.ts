// random-id-generator-with-prefix-suffix.d.ts
declare module "random-id-generator-with-prefix-suffix" {
  export function randomCodeId(
    length: number,
    prefix?: string,
    suffix?: string,
    type?: "utf8" | "hex"
  ): string;

  export function timestampedId(prefix?: string, suffix?: string): string;
}
