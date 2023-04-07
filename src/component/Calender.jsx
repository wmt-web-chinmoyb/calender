import { Badge, Button, Calendar } from "antd";
import React, { useEffect, useState } from "react";
import FormPopup from "./FormPopup";
import dayjs from "dayjs";
import ColumnGroup from "antd/es/table/ColumnGroup";

const Calender = () => {
  const [date, setDate] = useState(new Date());
  const [formData, setFormData] = useState();
  const [showForm, setShowForm] = useState(false);

  const formPopup = (date) => {
    console.log(date)
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
    if (formData) {
      return formData?.map((element, i) => {
        if (element.StartDate.date() === value.date()) {
          return (
            <span
              style={{
                backgroundColor: `${element.selectItem}`,
                color: "white",
                padding: "2px",
                borderRadius: "2px",
                display: "block",
                marginTop: "2px",
              }}
              key={i}
            >
              {element.username}
            </span>
          );
        }
      });
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
          eventData={eventData}
        />
      )}
      <Calendar onSelect={formPopup} cellRender={cellRender} />
    </div>
  );
};

export default Calender;
