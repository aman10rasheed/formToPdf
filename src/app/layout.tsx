"use client"
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser
} from '@clerk/nextjs';
import { useRouter } from 'next/router';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
