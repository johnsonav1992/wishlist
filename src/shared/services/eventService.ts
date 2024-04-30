import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

type Event<
    TEventName extends string = string
    , TPayload = unknown
> = {
    eventName: TEventName,
    payload: TPayload
}

type Events = {
    removeWish: (wishId: number ) => void
}

@Injectable({providedIn: 'root'})
export class EventService {
    private subject = new Subject<Event>();

    emit<TEventName extends keyof Events>(eventName: TEventName, payload: Parameters<Events[TEventName]>[0]) {
        this.subject.next({ eventName, payload });
    }

    listen<TEventKey extends keyof Events>(eventName: TEventKey, callback: Events[TEventKey]) {
        this.subject.asObservable().subscribe((nextEventObj: unknown) => {
            if (
                nextEventObj
                && typeof nextEventObj === 'object'
                && 'eventName' in nextEventObj 
                && 'payload' in nextEventObj 
                && eventName === nextEventObj.eventName
            ) {
                callback(nextEventObj.payload as never);
            }
        })
    }
}