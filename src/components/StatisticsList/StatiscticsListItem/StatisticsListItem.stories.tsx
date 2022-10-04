import { Meta, Story } from "@storybook/react";
import { StatListItem, Props } from "./StatListItem";
import { Provider } from "react-redux";
import store from "../../../store/store";


export const meta: Meta = {
  title: "StatListItem",
  component: StatListItem,
  argTypes: {
    categoryName: {
      defaultValue: ["Task"],
    },
    counterArchived: {
      type: "number",
      defaultValue: 1,
    },
    counterActive: {
      type: "number",
      defaultValue: 1
    }
  }
}

export default meta;

export const Template: Story<Props> = (args) => <StatListItem {...args} />

export const Default = Template.bind({});

