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
import {
  createEvents,
  deleteEvents,
  updateEventStatus,
} from "@/app/fecth/events";

export interface Event {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  id: any;
  title: string;
  date: string;
  description: string;
  status?: string;
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
      status: string;
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
    title: "",
    description: "",
    status: "pending",
  });

  const [contentHeight, setContentHeight] = useState<number>(
    window.innerWidth < 500 ? 300 : 500
  );
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogOpenDelete, setDialogOpenDelete] = useState(false);
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
        title: newEvent.title,
        date: selectedDate,
        description: newEvent.description,
        status: newEvent.status,
        editable: true,
      };
      try {
      const data = await createEvents(user?.system_id || 0, newEventObj);

      if (data) {
        setEvents((prevEvents) => [...prevEvents, data]);
        console.log(data);

        setNewEvent({ title: "", description: "", id: 0, status: "pending" });
        alert("novo evento adicionado!!");
        setDialogOpen(false);
      }
        if (calendarRef.current) {
          const calendarApi = calendarRef.current.getApi();
          calendarApi.addEvent(newEventObj);
        }
      } catch (error) {
        console.error("Erro ao salvar evento no banco de dados:", error);
      }
    }
  };

  //criara uma função que abra um alertr de confirmação
  const handleDeleteEvent = () => {
    if (selectedEvent) {
      const eventId = selectedEvent.event.id;
      deleteEvents(selectedEvent.event.id);
      alert("Evento Deletado com Sucesso!!!");
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
      setDialogOpenDelete(false);
    }
  };
  const handleCloseDelete = () => {
    setDialogOpenDelete(false);
  };
  const handleDelete = () => {
    handleDeleteEvent();
    setDialogOpenDelete(false);
  };
  const handleOpenDelete = () => {
    setDialogOpenDelete(true);
  };

  const handleStatusChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedEvent) {
      const { value } = e.target;

      try {
        await updateEventStatus(selectedEvent.event.id, value);

        if (calendarRef.current) {
          const calendarApi = calendarRef.current.getApi();
          const event = calendarApi.getEventById(selectedEvent.event.id);
          if (event) {
            event.setExtendedProp("status", value);
            setEvents((prevEvents) =>
              prevEvents.map((event) =>
                event.id === selectedEvent.event.id
                  ? { ...event, status: value }
                  : event
              )
            );
          }
        }
      } catch (error) {
        console.error("Erro ao atualizar o status do evento:", error);
      }
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "blue";
      case "pending":
        return "#fffe40";
      case "cancelled":
        return "red";
      default:
        return "#fffe40";
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setNewEvent({ title: "", description: "", id: 0, status: "pending" });
    setSelectedDate(null);
    setSelectedEvent(null);
  };

  function renderEventContent(eventInfo: RenderEventContentProps) {
    const status = eventInfo.event.extendedProps.status;
    const color = getStatusColor(status);

    return (
      <div className="flex items-center">
        <div
          className="w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: color }}
        ></div>
        <b className="m-2">{eventInfo.event.title}</b>
      </div>
    );
  }

  return (
    <div className="container mt-9">
      <div className="w-full">
        <FullCalendar
          ref={calendarRef}
          locale={"pt-br"}
          dayMaxEventRows={true}
          contentHeight={contentHeight}
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          initialView="dayGridMonth"
          eventTextColor="#000"
          eventContent={renderEventContent}
          eventColor="#fff"
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
                  <strong>Título:</strong> {selectedEvent.event.title}
                </p>
                <div className="p-2 mt-2 bg-gray-100 rounded">
                  <div className="whitespace-pre-line pl-4 ml-2">
                    <strong>Descrição:</strong>
                    {selectedEvent.event.extendedProps.description
                      .split("\n")
                      .map((paragraph, index) => (
                        <p key={index} className="mb-2">
                          {paragraph}
                        </p>
                      ))}
                  </div>
                </div>
                <TextField
                  select
                  label="Status"
                  value={selectedEvent.event.extendedProps.status}
                  onChange={handleStatusChange}
                  fullWidth
                  SelectProps={{
                    native: true,
                  }}
                  style={{ marginTop: "1em" }}
                >
                  <option value="pending">Em Espera</option>
                  <option value="completed">Concluído</option>
                  <option value="cancelled">Cancelado</option>
                </TextField>
              </div>
            ) : (
              <>
                <TextField
                  className="mt-4"
                  label="Título"
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
                <TextField
                  select
                  label="Status"
                  name="status"
                  value={newEvent.status}
                  onChange={handleInputChange}
                  fullWidth
                  SelectProps={{
                    native: true,
                  }}
                  style={{ marginTop: "1em" }}
                >
                  <option value="pending">Em Espera</option>
                  <option value="completed">Concluído</option>
                  <option value="cancelled">Cancelado</option>
                </TextField>
              </>
            )}
          </DialogContent>
          <DialogActions>
            {selectedEvent ? (
              <div className="flex justify-between w-full">
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleOpenDelete}
                >
                  Excluir
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleCloseDialog}
                >
                  Fechar
                </Button>
              </div>
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
      <Dialog
        fullWidth={false}
        maxWidth="sm"
        open={dialogOpenDelete}
        onClose={handleCloseDelete}
      >
        <DialogTitle>Excluir Evento</DialogTitle>
        <DialogContent>
          <div className="p-2 mt-2 bg-gray-100 rounded">
            <p>Quer Apagar o Evento {selectedEvent?.event.title}</p>
          </div>
        </DialogContent>
        <div className="flex justify-around items-center flex-row mb-2">
          <Button variant="contained" color="error" onClick={handleDelete}>
            Excluir
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={handleCloseDelete}
            className="text-white bg-slate-700"
          >
            Cancelar
          </Button>
        </div>
      </Dialog>
    </div>
  );
}
