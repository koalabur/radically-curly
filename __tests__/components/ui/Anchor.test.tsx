import { render, screen } from "@testing-library/react";
import Anchor from "@/components/ui/Anchor";

const text = "Link btn text renders";
const url = "https://www.google.com/";

const AnchorBtn = (): JSX.Element => {
  return <Anchor text={text} url={url} />;
};

test("Anchor component renders with TEXT.", () => {
  render(<AnchorBtn />);
  screen.getByText(text);
});

test("Anchor component renders with LINK.", () => {
  render(<AnchorBtn />);
  expect(
    (screen.getByText(text).closest("a") as HTMLAnchorElement)?.href
  ).toEqual(url);
});
