import React, { Component } from "react";
import Form from "react-jsonschema-form";

const schema = {
  "title": "A list of tasks",
  "type": "object",
  "required": [
    "title"
  ],
  "properties": {
    "title": {
      "type": "string",
      "title": "Task list title"
    },
    "tasks": {
      "type": "array",
      "title": "Tasks",
      "items": {
        "type": "object",
        "required": [
          "title"
        ],
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
            "description": "A sample title"
          },
          "details": {
            "type": "string",
            "title": "Task details",
            "description": "Enter the task details"
          },
          "done": {
            "type": "boolean",
            "title": "Done?",
            "default": false
          }
        }
      }
    }
  }
}

const uiSchema = {
  "tasks": {
    "items": {
      "details": {
        "ui:widget": "textarea"
      }
    }
  }
}

const formData = {
  "title": "My current tasks",
  "tasks": [
    {
      "title": "My first task",
      "details": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "done": true
    },
    {
      "title": "My second task",
      "details": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      "done": false
    }
  ]
}


const log = (type) => console.log.bind(console, type);
const onSubmit = ({formData}) => console.log("Data submitted: ",  formData);
const onError = (errors) => console.log("I have", errors.length, "errors to fix");

export class ProfileForm extends Component {

  render() {
    return (
      <Form schema={schema}
        formData={formData}
        uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={onSubmit}
        onError={onError} />
    )
  }
}

export default ProfileForm
