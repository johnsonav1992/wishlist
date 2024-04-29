import { Subject } from "rxjs";

export class EventService {
    private subject = new Subject();

    emit(eventName: string, payload: unknown) {
        this.subject.next({ eventName, payload });
    }

    listen(eventName: string, callback: (eventPayload: any) => void) {
        this.subject.asObservable().subscribe((nextEventObj: unknown) => {
            if (
                nextEventObj
                && typeof nextEventObj === 'object'
                && 'eventName' in nextEventObj 
                && 'payload' in nextEventObj 
                && eventName === nextEventObj.eventName
            ) {
                callback(nextEventObj.payload);
            }
        })
    }
}