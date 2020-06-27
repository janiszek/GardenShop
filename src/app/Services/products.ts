export class Article {
    public id: number;
    public name: string;
    public price: number;
    public vat: number;
    public amount: number;

    constructor(id: number, name: string, price: number, vat: number, amount: number) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.vat = vat;
      this.amount = amount;
    }
  }
