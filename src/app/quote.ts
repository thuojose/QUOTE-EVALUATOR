export class Quote {
      upVote:number;
      downVote:number;
      public showDetails: boolean;
      constructor(public _id: number,public quote: string,public author: string,public name: string,public completeDate: Date){
        this.showDetails=false;
        this .upVote =0;
        this .downVote =0;
    }
}
