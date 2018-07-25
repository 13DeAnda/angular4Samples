import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class MessageService {

  @Output() change: EventEmitter<string> = new EventEmitter();

  public sendMessage(newMessage) {
    this.change.emit(newMessage);
  }

}