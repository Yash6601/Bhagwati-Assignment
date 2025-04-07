import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface HoverDatePickerProps {
  text: string;
}

const HoverDatePicker = (props: HoverDatePickerProps) => {
  const { text } = props;
  const [showPicker, setShowPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowPicker(true)}
      onMouseLeave={() => setShowPicker(false)}
    >
      <button className="px-4 py-2text-white rounded">{text}</button>
      {showPicker && (
        <div className="absolute top-6 z-50">
          <DatePicker selected={selectedDate} onChange={handleChange} inline />
        </div>
      )}
    </div>
  );
};

export default HoverDatePicker;
