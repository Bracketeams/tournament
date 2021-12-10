// This is the tournament data model.
export class Tournament
{
  constructor(
    // tslint:disable-next-line: variable-name
    public _id?: number,
    public name?: string,
    public location?: string,
    public startDate ?: Date,
    public endDate ?: Date,
    public numberOfRounds ?: String,
    public winner ?: String
  ){}

  public toString(): string
  {
    return `
    Tournament
    -------------------------------
    name       : ${this.name}
    lcoation       : ${this.location}
    -------------------------------
    `;
  }
}
