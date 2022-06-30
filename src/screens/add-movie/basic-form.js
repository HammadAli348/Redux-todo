// import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button, DatePicker, Form, Input, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import { addMovie } from "../../redux/actions";
import browserRoute from "../../constants/path";
import { useEffect } from "react";

const BasicDetails = ({ intialData }) => {
  const [form] = Form.useForm();

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const onFinish = (values) => {
    dispatch(addMovie(values));
    navigate(browserRoute.SHOW_MOVIE);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  useEffect(() => {
    console.log("init data", intialData);
    form.setFieldsValue({ movie_type: "abc" });
  }, [intialData, form]);

  return (
    <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Form.Item
        label="Movie Name"
        name="movie_name"
        rules={[
          {
            required: true,
            message: "Please input your movie!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Movie Type"
        name="movie_type"
        rules={[
          {
            required: true,
            message: "Please input your movie type!",
          },
        ]}
      >
        <Select>
          <Select.Option value="demo">Funny</Select.Option>
          <Select.Option value="horror">Horror</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Release Date"
        name="release_date"
        rules={[
          {
            required: true,
            message: "Please input your release!",
          },
        ]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="Producer"
        name="producer"
        rules={[
          {
            required: true,
            message: "Please input your producer name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Director"
        name="director"
        rules={[
          {
            required: true,
            message: "Please input director name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Amount"
        name="amount"
        rules={[
          {
            required: true,
            message: "Please input your amount!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Posters"
        name="posters"
        rules={[
          {
            required: true,
            message: "Please input your posters!",
          },
        ]}
        getValueFromEvent={normFile}
      >
        <Upload
          beforeUpload={() => {
            return false;
          }}
        >
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BasicDetails;
