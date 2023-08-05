import { render, screen } from "@testing-library/react";
import Header from "@/components/header/StandardHeader";

const text =
  "Cras in metus pulvinar, pulvinar ipsum at, auctor mauris. Donec mattis iaculis ipsum, ullamcorper scelerisque ante hendrerit ut. Nullam efficitur mattis tempor. Phasellus erat magna, elementum nec dolor vitae, finibus tristique lectus. Phasellus luctus erat quis lacus cursus, eget cursus ex aliquet. Duis at enim et ex mollis";

const HeaderComponent = (): JSX.Element => {
  return <Header text={text} />;
};

test("Header renders with applied TEXT.", () => {
  render(<HeaderComponent />);
  screen.getByText(text);
});
