import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAfppQ0DkKa0ogU9EERyBupSdwklxV0RwU",
  authDomain: "farphones-3f7ef.firebaseapp.com",
  projectId: "farphones-3f7ef",
  storageBucket: "farphones-3f7ef.firebasestorage.app",
  messagingSenderId: "770431055300",
  appId: "1:770431055300:web:e5242ff14af0b1ebac2091",
  measurementId: "G-4KYTSDTQFB"
};

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ]
};
