import { Header, Props } from "./Header";
import { Meta, Story } from "@storybook/react";
import ShowArchiveBtn from "../ShowArchiveBtn/ShowArchiveBtn";
import { ActiveArchive } from "../StatisticsList/StatisticsList";
import { Provider } from "react-redux";
import store from "../../store/store";
const headerItems = ['Name', 'Created', 'Category', "Content", 'Dates'];
const meta: Meta = {
  title: 'Header',
  component: Header,
  argTypes: {
    isStatisticsHeader: {
      type: "boolean",
      defaultValue: false,
    },
  },
  args: {
    listItem: (
      <>
        {headerItems.map((l, index) => (
          <li className="max-w-[110px] w-full text-base font-normal text-white" key={`header__list-item-${index}`}>{l}</li>
        ))}
      </>
    ),
    btns: (
      <>
        <ShowArchiveBtn btnText={"Archived"} />
      </>
    )
  },
  decorators: [
    (Header: Story) => (
      <Provider store={store}>
        <Header />
      </Provider>
    ),
  ],
}

export default meta;

const Template: Story<Props> = (args) => <Header {...args} />

export const NotesHeader = Template.bind({})

export const StatisticHeader = Template.bind({})

StatisticHeader.args = {
  isStatisticsHeader: true,
  listItem: (
    <ActiveArchive />
  ),
}