declare module '@openzeppelin/test-helpers' {
  export const constants: { ZERO_ADDRESS: string };

  export function expectRevert<T>(
    actual: Promise<T>,
    expected: string,
  ): Promise<void>;

  export function expectEvent(receipt: unknown, eventName: string): void;
}
