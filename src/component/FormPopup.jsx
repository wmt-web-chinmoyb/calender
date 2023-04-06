import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Modal } from "antd";
import { DatePicker, Space } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { Select } from "antd";

const FormPopup = ({ showForm, setShowForm, date ,eventData}) => {
  console.log(date, "form");
  const onFinish = (values) => {
    console.log("Success:", values);
    
    eventData(values)
    setShowForm(false)
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleOk = () => {
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };
  const dateFormatList = ["DD/MM/YYYY"];
  return (
    <div>
      <Modal
        title="Add new Event"
        open={showForm}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          initialValues={{ StartDate: dayjs(date), EndDate: dayjs(date) }}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input placeholder="Please enter title" />
          </Form.Item>

          <Form.Item label="Start Date" name="StartDate">
            <DatePicker format={dateFormatList} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item label="End Date" name="EndDate">
            <DatePicker format={dateFormatList} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            label="Prefered"
            name="selectItem"
            style={{ width: "100%" }}
          >
            <Select
              placeholder="Select a person"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                {
                  value: "red",
                  label: "red",
                },
                {
                  value: "orange",
                  label: "orange",
                },
                {
                  value: "green",
                  label: "green",
                },
                {
                  value: "sky",
                  label: "sky",
                },
              ]}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default FormPopup;
