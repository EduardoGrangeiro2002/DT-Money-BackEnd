export type TransactionProps = {
  id: string;
  balanceId: string;
  name: string;
  description: string;
  type: string;
  value: number;
  createdAt?: Date;
  updatedAt?: Date;
};

export type Type = "deposit" | "withdraw";

export class Transaction {
  private readonly id: string;
  private readonly name: string;
  private readonly balanceId: string;
  private readonly description: string;
  private readonly type: string;
  private readonly value: number;
  private readonly createdAt: Date;
  private readonly updatedAt: Date;

  constructor(props: TransactionProps) {
    this.id = props.id;
    this.name = props.name;
    this.balanceId = props.balanceId;
    this.description = props.description;
    this.type = props.type;
    this.value = props.value;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  getValue(): number {
    return this.value;
  }

  toDto(): Omit<TransactionProps, "createdAt" & "updatedAt"> {
    return {
      id: this.id,
      description: this.description,
      name: this.name,
      type: this.type,
      value: this.value,
      balanceId: this.balanceId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
