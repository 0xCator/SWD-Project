export class initiation {
    title?: string;
    startDate?:Date;
    endDate?:Date;
    objective?:string;
    manager?:string;
    budget?:number;
    scope?:string;
    constructor (title?:string,startDate?:Date,endDate?:Date,objective?:string,
        manager?:string,budget?:number,scope?:string){
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.objective = objective;
        this.manager = manager;
        this.budget = budget;
        this.scope = scope;
    }
}
export class srsClass {
    introduction?: string;
    purpose?: string;
    audience?: string;
    description?: string;
    SRS?: string;
    useImage?: string;
  
    constructor(introduction?: string,purpose?: string,audience?: string,description?: string,
        SRS?: string,useImage?: string) {
      this.introduction = introduction;
      this.purpose = purpose;
      this.audience = audience;
      this.description = description;
      this.SRS = SRS;
      this.useImage = useImage;
    }
  }
  export class design {
    fileName?: string[];
    imagePath?: string[];
  
    constructor(fileName?: string[], imagePath?: string[]) {
      this.fileName = fileName;
      this.imagePath = imagePath;
    }
  }
  export interface Image {
    id: number;
    url: string;
  }