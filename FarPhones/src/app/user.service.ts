import { Injectable, inject } from '@angular/core';
import { collection, Firestore, collectionData, doc, setDoc, updateDoc, deleteDoc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface User
{
  id: string,
  fullName: string,
  email: string,
  phoneNumber: string,
  role: string,
  address: string,
  clicks: number,
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private firestore = inject(Firestore);

  private userCollection = collection(this.firestore, 'users');

  getUsers(): Observable<User[]>
  {
    return collectionData(this.userCollection, ({idField: 'id'})) as Observable<User[]>
  }

  addUser(newUser: User)
  {
    const userRef = doc(this.userCollection);
    const newId = userRef.id;
    newUser.id = newId;
    setDoc(userRef, newUser);
  }

  updateUser(editUser: User)
  {
    const userRef = doc(this.firestore, `users/${editUser.id}`);
    updateDoc(userRef, { ... editUser})
  }

  deleteUser(delUser: User)
  {
    const userRef = doc(this.firestore, `users/${delUser.id}`);
    deleteDoc(userRef);
  }

  getUserById(id: String): Observable<User>
  {
    const userDocRef = doc(this.firestore, `users/${id}`);
    return docData(userDocRef, { idField: 'id'}) as Observable<User>;
  }

  constructor() { }
}
