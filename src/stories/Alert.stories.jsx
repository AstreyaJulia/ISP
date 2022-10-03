import React from "react";
import Alert from "../components/Alert/index";

export default {
  title: "Feedback/Alert",
  parameters: {
    docs: {
      description: {
        component: `
Сообщение. 

3 типа: 
* "error", 
* "warning", 
* "success"
`
      }
    }
  },
  component: Alert,
  argTypes: {
    type: { control: "radio" }
  }
};

const Template = (args) => <Alert {...args} />;

export const AlertError = Template.bind({});
export const AlertWarning = Template.bind({});
export const AlertSuccess = Template.bind({});

AlertError.args = {
  title: "There were 2 errors with your submission",
  alertType: "error",
  children: <ul role="list" className="list-disc pl-5 space-y-1">
    <li>Your password must be at least 8 characters</li>
    <li>Your password must include at least one pro wrestling finishing move</li>
  </ul>
};

AlertWarning.args = {
  title: "Attention needed",
  alertType: "warning",
  children: <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo
    totam eius aperiam dolorum.
  </p>
};

AlertSuccess.args = {
  title: "Order completed",
  alertType: "success",
  children: <div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
    <div className="mt-4">
      <div className="-mx-2 -my-1.5 flex">
        <button
          type="button"
          className="bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
        >
          View status
        </button>
        <button
          type="button"
          className="ml-3 bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
        >
          Dismiss
        </button>
      </div>
    </div>
  </div>
};