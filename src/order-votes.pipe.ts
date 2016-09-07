import {Pipe} from "@angular/core";

@Pipe({
    name: "orderVotes",
    pure: false
})
export class OrderVotesPipe {
    transform(questions: Array<any>, args: string): Array<any> {
        if (questions) {
            questions.sort((a: any, b: any) => {
                let order = a.state == b.state? 0: (a.state == 'active'? -1: 1);
                order = order != 0? order: b.votes - a.votes;
                order = order != 0? order: b.date.getTime() - a.date.getTime();
                return order;
            });
        }
        return questions;
    }
}