import { Sorter } from "./Sorter";

export class CharacterCollection extends Sorter{
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftHandIndex: number, rightHandIndex: number): boolean {
    return (
      this.data[leftHandIndex].toLowerCase() >
      this.data[rightHandIndex].toLowerCase()
    );
  }

  swap(leftHandIndex: number, rightHandIndex: number): void {
    const characters = this.data.split("");
    const leftHand = characters[leftHandIndex];
    characters[leftHandIndex] = characters[rightHandIndex];
    characters[rightHandIndex] = leftHand;
    this.data = characters.join("");
  }

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
