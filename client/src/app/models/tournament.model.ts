// This is the tournament data model.
export class Tournament
{
  constructor(
    // tslint:disable-next-line: variable-name
    public _id?: number,
    public title?: string,
    public entry?: string[],
  ){}

  public toString(): string
  {
    return `
    Book
    -------------------------------
    title       : ${this.title}
    entry       : ${this.entry}
    -------------------------------
    `;
  }
}
