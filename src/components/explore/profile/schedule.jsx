"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getWeek, format } from "date-fns";

const ScheduleView = ({ children }) => {
  const [startOfWeek, setStartOfWeek] = useState(getStartOfWeek(new Date()));
  const [showCalendar, setShowCalendar] = useState(false);

  // Function to get the Monday of the current week
  function getStartOfWeek(date) {
    const day = date.getDay();
    const diff = day === 0 ? -6 : 1 - day;
    return new Date(date.setDate(date.getDate() + diff));
  }

  // Function to generate days for the current workweek (Monday to Friday)
  const getWeekDays = (startDate) => {
    const days = [];
    for (let i = 0; i < 5; i++) {
      const day = new Date(startDate);
      day.setDate(startDate.getDate() + i);
      days.push(day);
    }
    return days;
  };

  // Function to handle date selection from calendar
  const handleDateChange = (date) => {
    setShowCalendar(false);
    setStartOfWeek(getStartOfWeek(date));
  };

  const weekDays = getWeekDays(startOfWeek);

  // Format the display text for the button
  const displayText = `${format(startOfWeek, "MMMM yyyy")} . Week ${getWeek(
    startOfWeek
  )}`;

  return (
    <div style={{ fontFamily: "Arial" }}>
      <div className="flex items-center justify-between">
        <div style={{ position: "relative", display: "inline-block" }}>
          {/* Button to toggle calendar */}
          <button
            onClick={() => setShowCalendar(!showCalendar)}
            style={{
              padding: "10px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            className="border border-[#FF6F61] border-opacity-65 bg-[#FFD2CE] bg-opacity-30"
          >
            <p className="text-[13px]">{displayText}</p>
          </button>

          {/* Absolute Calendar */}
          {showCalendar && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: "0",
                zIndex: 1000,
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                borderRadius: "8px",
                marginTop: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <DatePicker
                selected={startOfWeek}
                onChange={handleDateChange}
                inline
              />
            </div>
          )}
        </div>
        <div>{children}</div>
      </div>

      {/* Weekdays display */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
        className="lg:px-[24px]"
      >
        {weekDays.map((day, index) => (
          <div
            key={index}
            style={{
              textAlign: "center",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              width: "18%",
              backgroundColor:
                day.toDateString() === new Date().toDateString()
                  ? "#e0f7fa"
                  : "#fff",
            }}
          >
            <div>{day.toLocaleString("en-US", { weekday: "short" })}</div>
            <div>{day.getDate()}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleView;
