import React from "react";
import Auth from "@/components/Auth";
import Provider from "@/components/Providers";
import { UserProvider } from "@/context/userContext";
import { EventsProvider } from "@/context/eventContext";
import { AuthProvider } from "@/components/Providers/nextProviser";

export default function LogimPage() {
  return (
    <AuthProvider>
      <Provider>
        <UserProvider>
          <EventsProvider>
            <Auth />
          </EventsProvider>
        </UserProvider>
      </Provider>
    </AuthProvider>
  );
}
