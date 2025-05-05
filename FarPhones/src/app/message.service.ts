import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, doc, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Message
{
  id: string,
  name: string,
  email: string,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private firestore = inject(Firestore);

  private messagesCollection = collection(this.firestore, 'messages');

  getMessages(): Observable<Message[]>
  {
    return collectionData(this.messagesCollection, ({idField: 'id'})) as Observable<Message[]>;
  }

  addMessage(newMessage: Message)
  {
    const messageRef = doc(this.messagesCollection);
    const newId = messageRef.id;
    newMessage.id = newId;
    setDoc(messageRef, newMessage);
  }

  constructor() { }
}
