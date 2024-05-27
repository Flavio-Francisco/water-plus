"use client";
import React from "react";
import { EventInput } from "@/utils/models/Events";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface Event {
  events: EventInput[] | null | undefined;
  getEvents: (events: EventInput[] | null | undefined) => void;
  signOutEvents: () => void;
  clearCacheEvents: () => void;
  updateEvents: (events: EventInput[]) => void;
}

interface EventContextType {
  children: ReactNode;
}

const eventInput = createContext({} as Event);

export const useEventInput = () => useContext(eventInput);

export const EventsProvider: React.FC<EventContextType> = ({ children }) => {
  const [events, setEvents] = useState<EventInput[] | null | undefined>(null);

  async function restoreEventsFromCache() {
    const cachedUserData = localStorage.getItem("EventInput");
    if (cachedUserData) {
      setEvents(JSON.parse(cachedUserData));
    }
  }

  function signOutEvents() {
    setEvents(null);

    localStorage.setItem("EventInput", JSON.stringify(null));
  }

  function getEvents(events: EventInput[] | null | undefined) {
    setEvents(events);
    localStorage.setItem("EventInput", JSON.stringify(events));
  }
  function clearCacheEvents() {
    setEvents(null);
    localStorage.setItem("EventInput", JSON.stringify(null));
  }
  function updateEvents(events: EventInput[]) {
    setEvents(events);
    localStorage.setItem("EventInput", JSON.stringify(events));
  }
  useEffect(() => {
    restoreEventsFromCache();
  }, []); // Executa apenas na montagem inicial

  useEffect(() => {
    console.log("EventInput", events);
  }, [events]);

  return (
    <eventInput.Provider
      value={{
        events,
        signOutEvents,
        updateEvents,
        clearCacheEvents,
        getEvents,
      }}
    >
      {children}
    </eventInput.Provider>
  );
};
