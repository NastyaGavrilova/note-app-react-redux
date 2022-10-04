import { Meta, Story } from "@storybook/react";
import { Provider } from "react-redux";
import store from "../../store/store";
import NoteItem, { NoteItemProps } from "./NoteItem";

export const meta: Meta = {
  title: "NoteItem",
  component: NoteItem,
  argTypes: {
    dates: {
      defaultValue: [""]
    },
    index: {
      type: "number",
      defaultValue: 0,
    },
    disabledBtn: {
      type: "boolean",
      defaultValue: false
    },
    note: {
      defaultValue: {
        id: "1",
        name: "Shopping List",
        created: "April 20, 2021",
        category: "Task",
        content: "Tomatoes, bread",
        archived: false,
      }
    },
    click: {
      action: "note Archived"
    },
    clickDelete: {
      action: "note Deleted"
    },
    clickEdit: {
      action: "open Modal window to Edit Note"
    }
  },
  decorators: [
    (NoteItem: Story) => (
      <Provider store={store}>
        <NoteItem />
      </Provider>
    )
  ]
}
export default meta;

export const Template: Story<NoteItemProps> = (args) => <NoteItem {...args} />

export const ActiveNote = Template.bind({})





