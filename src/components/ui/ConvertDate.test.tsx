import { render, screen } from "@testing-library/react";
import ConvertDate from "@/components/ui/ConvertDate";

const ConvertDateComponent = (): JSX.Element => {
  return <ConvertDate date="2023-08-28T10:00:00.000-07:00" />;
};

test("ISO-8601 date is properly converted to pacific time.", () => {
  render(<ConvertDateComponent />);
  screen.getByText("August 28, 2023");
});
