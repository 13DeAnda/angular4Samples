import { Component, OnInit } from '@angular/core';
import { MessageService } from './../../services/message/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent{
  textToSend: string = '';

  constructor(private messageService: MessageService) { }

  sendMessage() {
    this.messageService.sendMessage(this.textToSend);
  }
}
