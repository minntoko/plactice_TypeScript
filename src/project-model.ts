namespace App {
  // Project Type
  export enum ProjectStatus {
    Active,
    Finish
  }
  
  export class Project {
    constructor(
      public id: string,
      public title: string,
      public description: string,
      public manday: number,
      public status: ProjectStatus
    ) {
  
    }
  }
}