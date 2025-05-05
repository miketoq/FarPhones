import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message, MessageService } from '../message.service';

@Component({
  selector: 'app-contact-us',
  imports: [FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent implements OnInit{

  messageService = inject(MessageService);

  message: Message =
  {
    id: '',
    name: '',
    email: '',
    message: ''
  }

  messages: Message[] = [];

  ngOnInit() 
  {
    this.messageService.getMessages().subscribe(data => this.messages = data);
  }

  addMessage()
  {
    this.messageService.addMessage(this.message);
    this.resetForm();
  }

  resetForm()
  {
    this.message = 
    {
      id: '',
      name: '',
      email: '',
      message: ''
    }
  }
}
