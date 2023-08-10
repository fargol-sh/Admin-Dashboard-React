import { useState } from 'react';
import { formatDate } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { Box, List, ListItem, ListItemText, Typography, useTheme } from '@mui/material';
import Header from '../../components/Header';
import { tokens } from '../../theme';

const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // set of events that we put on our calender:
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDataClick = (selected) => {
        const title = prompt('Please enter a new title for your event');
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dataStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            });
        }
    };

    // we can build our own modal for production apps, 
    // but here we just want to keep this simple :)
    const handleEventClick = (selected) => {
        if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)) {
            selected.event.remove();
        }
    };

    return (
        <Box m="20px">
            <Header title="CALENDAR" subtitle="Full Calendar Interactive Page"/>
        
            <Box display="flex" justifyContent="space-between">
                {/* CALENDAR SIDEBAR */}
                <Box 
                    /* flex: grow shrink width */
                    flex="1 1 20%" 
                    backgroundColor={colors.primary[400]} 
                    p="15px"
                    borderRadius="4px"
                > 
                    <Typography variant="h5">Events</Typography>
                    <List>
                        {currentEvents.map((event) => (
                            <ListItem
                                key={event.id}
                                sx={{
                                    backgroundColor: colors.greenAccent[500],
                                    margin: "10px 0",
                                    borderRadius: "2px"
                                }}    
                            >
                               <ListItemText
                                    primary={event.title}
                                    secondary={
                                        <Typography>
                                            {formatDate(event.start, {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric"
                                            })}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>

                {/* CALENDAR */}
                <Box flex="1 1 100%" ml="15px">
                    <FullCalendar 
                        height="75vh"
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin
                        ]}
                        headerToolbar={{
                            // space between values in 'left' property, effects the position of elements.
                            left: "prev,next today",
                            center: "title", 
                            // space between values in 'right' property, effects the position of elements.
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                        }}
                        initialView='dayGridMonth'
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDataClick}
                        eventClick={handleEventClick}
                        eventsSet={(events) => setCurrentEvents(events)}
                        initialEvents={[
                            {id: "1234", title:"All-day event", date: "2023-08-14"},
                            {id: "4321", title:"Timed event", date: "2023-08-28"},                            
                        ]}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Calendar;