export interface Image{
  imageTitle: string;
  imagePath: string;
}

export class Document{
  id!: number;
  docType!: string;
  title!: string;
  startDate!: string;
  endDate!: string;
  objective!: string;
  manager!: string;
  budget!: number;
  scope!: string;

  intro!: string;
  purpose!: string;
  intendedAudience!: string;
  description!: string;
  srs!: string;
  useCases!: string;

  image!: Image[];

}
