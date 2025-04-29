import React, { useState } from 'react';
import { TextField, Typography, Box } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

// 🔹 Updated schedule
const hospitalSchedule = {
  "2025-01": [1, 14],   // Jan 1–14
  "2025-02": [1, 4],    // Feb 1–4
  "2025-03": [2, 10],   // Mar 2–10
  "2025-04": [5, 20],    //april 5-20
};

function getOpenDates(schedule) {
  const openDates = new Set();

  for (const key in schedule) {
    const [start, end] = schedule[key];

    for (let day = start; day <= end; day++) {
      const date = dayjs(`${key}-${String(day).padStart(2, '0')}`);
      openDates.add(date.format("YYYY-MM-DD")); // ✅ Correct format
    }
  }

  return openDates;
}

const openDates = getOpenDates(hospitalSchedule);

export default function HospitalScheduleChecker() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [result, setResult] = useState("");

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);

    if (newDate) {
      const formatted = newDate.format("YYYY-MM-DD"); // ✅ Correct format
      const isOpen = openDates.has(formatted);
      setResult(isOpen ? "Hospital is OPEN on this date." : "Hospital is CLOSED on this date.");
    } else {
      setResult("");
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ maxWidth: 400, mt: 5, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Hospital Schedule Checker
        </Typography>

        <DatePicker
          label="Select a Date"
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={(params) => <TextField fullWidth {...params} />}
        />

        {result && (
          <Typography variant="subtitle1" sx={{ mt: 2, color: result.includes("OPEN") ? "green" : "red" }}>
            {result}
          </Typography>
        )}
      </Box>
    </LocalizationProvider>
  );
}