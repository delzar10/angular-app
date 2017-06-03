import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'voter',
    templateUrl: 'app/voter.template.html',
    styles: [`
        .voter {
            width: 20px;
            text-align: center;
            color: #999;
        }
        
        .vote-count {
            font-size: 1.2em;
        }

        .vote-button {
            cursos: pointer;
        }

        .highlighted {
            font-weight: bold;
            color: orange;
        }
    `]
})
export class VoterComponent {
    @Input()
    voteCount: number = 0;
    @Input()
    myVote: number = 0;

    @Output()
    vote = new EventEmitter();

    upVote() {
        if (this.myVote == 1)
            return;

        this.myVote++;

        this.vote.emit({ myVote: this.myVote });
    }

    downVote() {
        if (this.myVote == -1)
            return;

        this.myVote--;

        this.vote.emit({ myVote: this.myVote });
    }
}