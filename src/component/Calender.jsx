import { Badge, Button, Calendar } from "antd";
import React, { useEffect, useState } from "react";
import FormPopup from "./FormPopup";
import dayjs from "dayjs";

const Calender = () => {
  const [date, setDate] = useState(new Date());
  const [formData, setFormData] = useState();
  const [showForm, setShowForm] = useState(false);

  const formPopup = (date) => {
    setDate(date?.format("YYYY-MM-DD"));
    setShowForm(true);
  };
  const eventData = (value) => {
    if (formData) {
      setFormData([...formData, value]);
    } else {
      setFormData([value]);
    }
  };
  console.log(formData);
  const dateCellRender = (value) => {
    if(formData) {
      return formData?.map((element) => {
        if (element.StartDate.date() === value.date()) {
          return <span>{element.username}</span>
        }
      })
    }
  };
  const cellRender = (curr, info) => {
    if (info.type === "date") {
      return dateCellRender(curr);
    }
  };
  return (
    <div>
      {showForm && (
        <FormPopup
          showForm={showForm}
          setShowForm={setShowForm}
          date={date}
          eventData={eventData}
        />
      )}
      <Calendar onSelect={formPopup} cellRender={cellRender} />
    </div>
  );
};

export default Calender;
