import { ColorProps } from "./ShowArchiveBtn";
import ShowArchiveBtn from "./ShowArchiveBtn";
import { Meta, Story } from "@storybook/react";
import { Provider } from "react-redux";
import store from "../../store/store";

const meta: Meta = {
  title: "ShowArchiveBtn",
  component: ShowArchiveBtn,
  argTypes: {
    btnText: {
      type: "string",
      defaultValue: "Archived"
    }
  },
  decorators: [
    (ShowArchiveBtn: Story) => (
      <Provider store={store}>
        <ShowArchiveBtn />
      </Provider>
    ),
  ],

}

export default meta;

export const Template: Story<ColorProps> = (args) => <ShowArchiveBtn {...args} />

export const Default = Template.bind({})

export const Secondary = Template.bind({})
Secondary.args = {
  btnText: "Unarchived",
}