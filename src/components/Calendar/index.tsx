"use client";
import React, { useState, useEffect, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useUserContext } from "@/context/userContext";
import { createEvents, deleteEvents } from "@/app/fecth/events";

export interface Event {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  id: any;
  title: string;
  date: string;
  description: string;
  editable: boolean;
}

interface RenderEventContentProps {
  timeText: string;
  event: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    id: any;
    title: string;
    extendedProps: {
      description: string;
    };
  };
}

interface CalendarProps {
  events: Event[];
}

export default function Calendar({ events: initialEvents }: CalendarProps) {
  const { user } = useUserContext();
  const calendarRef = useRef<FullCalendar | null>(null);
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [newEvent, setNewEvent] = useState({
    id: 0,
    title: user?.name,
    description: "",
  });

  const [contentHeight, setContentHeight] = useState<number>(
    window.innerWidth < 500 ? 300 : 500
  );
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] =
    useState<RenderEventContentProps | null>(null);

  const handleResize = () => {
    setContentHeight(window.innerWidth < 500 ? 300 : 500);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDateClick = (arg: DateClickArg) => {
    setSelectedDate(arg.dateStr);
    setSelectedEvent(null);
    setDialogOpen(true);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEventClick = (info: any) => {
    setSelectedEvent(info);
    setDialogOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddEvent = async () => {
    if (newEvent.title && selectedDate) {
      const newEventObj: Event = {
        id: newEvent.id,
        title: `${user?.name}`,
        date: selectedDate,
        description: newEvent.description,
        editable: true,
      };
      try {
        // Chamada para salvar o novo evento no banco de dados
        await createEvents(user?.system_id || 0, newEventObj);

        setEvents((prevEvents) => [...prevEvents, newEventObj]);
        setNewEvent({ title: user?.name, description: "", id: 0 });
        setDialogOpen(false);
        if (calendarRef.current) {
          const calendarApi = calendarRef.current.getApi();
          calendarApi.addEvent(newEventObj);
        }
      } catch (error) {
        console.error("Erro ao salvar evento no banco de dados:", error);
      }
    }
  };

  const handleDeleteEvent = () => {
    if (selectedEvent) {
      const eventId = selectedEvent.event.id;
      deleteEvents(selectedEvent.event.id);
      setEvents((prevEvents) =>
        prevEvents.filter((event) => event.id !== eventId)
      );
      if (calendarRef.current) {
        const calendarApi = calendarRef.current.getApi();
        const event = calendarApi.getEventById(eventId);
        if (event) {
          event.remove();
        }
      }
      setDialogOpen(false);
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setNewEvent({ title: user?.name, description: "", id: 0 });
    setSelectedDate(null);
    setSelectedEvent(null);
  };

  return (
    <div className="container  mt-9">
      <div className="w-full">
        <FullCalendar
          ref={calendarRef}
          locale={"pt-br"}
          dayMaxEventRows={true}
          contentHeight={contentHeight}
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          initialView="dayGridMonth"
          eventContent={renderEventContent}
          buttonText={{
            today: "Hoje",
            month: "Mês",
            week: "Semana",
            day: "Dia",
          }}
          headerToolbar={{
            right:
              window.innerWidth < 500
                ? "today prev,next"
                : "dayGridMonth today prev,next",
            center: window.innerWidth < 500 ? "dayGridMonth" : "title",
            left: window.innerWidth < 500 ? "" : "timeGridWeek timeGridDay",
          }}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          slotMinTime="07:00"
          slotMaxTime="20:00"
          expandRows={true}
          navLinks={true}
          editable={true}
          selectable={true}
          nowIndicator={true}
          dayMaxEvents={true}
          events={events}
          views={{
            timeGrid: {
              dayMaxEventRows: 6,
            },
          }}
        />
        <Dialog open={dialogOpen} onClose={handleCloseDialog}>
          <DialogTitle>
            {selectedEvent ? "Detalhes do Evento" : "Adicionar Evento"}
          </DialogTitle>
          <DialogContent>
            {selectedEvent ? (
              <div className="mt-3">
                <p className="mb-2">
                  <strong>Autor:</strong> {selectedEvent.event.title}
                </p>
                <div className="p-2 mt-2 bg-gray-100 rounded">
                  <div className="whitespace-pre-line pl-4 ml-2">
                    <strong>Descrição:</strong>
                    {selectedEvent.event.extendedProps.description
                      .split("\n")
                      .map((paragraph, index) => (
                        <p key={index} className="mb-2 ">
                          {paragraph}
                        </p>
                      ))}
                  </div>
                </div>
              </div>
            ) : (
              <>
                <TextField
                  className="mt-4"
                  label="Autor"
                  name="title"
                  value={newEvent.title}
                  onChange={handleInputChange}
                  fullWidth
                  required
                />
                <TextField
                  label="Descrição do Evento"
                  name="description"
                  value={newEvent.description}
                  onChange={handleInputChange}
                  fullWidth
                  multiline
                  rows={3}
                  required
                  style={{ marginTop: "1em" }}
                />
              </>
            )}
          </DialogContent>
          <DialogActions>
            {selectedEvent ? (
              <>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleDeleteEvent}
                >
                  Excluir Evento
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleCloseDialog}
                >
                  Fechar
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddEvent}
                >
                  Adicionar Evento
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleCloseDialog}
                >
                  Cancelar
                </Button>
              </>
            )}
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

function renderEventContent(eventInfo: RenderEventContentProps) {
  return (
    <div className="flex">
      <b className="m-2">{eventInfo.event.title}</b>
    </div>
  );
}
