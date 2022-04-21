export type Vip = {
  id: string;
  value: PossibleValue;
  price: number;
  createdAt: Date;
  updatedAt: Date;
};

export type PossibleValue = "prata" | "gold" | "diamond";

export class ValueVip {
  readonly value: PossibleValue;
  constructor(value: PossibleValue) {
    this.value = value;
  }
  isAllowed(position: PossibleValue): boolean {
    const levels: Record<PossibleValue, number> = {
      prata: 1,
      gold: 2,
      diamond: 3,
    };

    return levels[this.value] >= levels[position];
  }
}
