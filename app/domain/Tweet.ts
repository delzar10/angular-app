export class Tweet {
    author:   string;
    handle:   string; 
    comment:  string;
    imageUrl: string;

    index:      number = 0;
    totalLikes: number = 0;
    
    iLike: boolean;
    
    constructor(){
        this.index += 1;
        this.iLike = false;
        this.author  = 'Windward';
        this.handle  = '@windwardstudios';
        this.comment = 'hello from comment';
        this.imageUrl = `http://lorempixel.com/100/100/people?${this.index}`;
        this.totalLikes = this.index;
    }
}