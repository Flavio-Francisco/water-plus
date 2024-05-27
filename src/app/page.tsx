import React from "react";
import Auth from "@/components/Auth";
import Provider from "@/components/Providers";
import { UserProvider } from "@/context/userContext";
import { DataFullProvider } from "@/context/userDataFull";
import { EventsProvider } from "@/context/eventContext";

export default function LogimPage() {
  return (
    <Provider>
      <DataFullProvider>
        <UserProvider>
          <EventsProvider>
            <Auth />
          </EventsProvider>
        </UserProvider>
      </DataFullProvider>
    </Provider>
  );
}
