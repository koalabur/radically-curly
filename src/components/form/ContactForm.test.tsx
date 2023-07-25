import { render, screen, fireEvent } from "@testing-library/react";
import { useForm } from "@formspree/react";
import Form from "@/components/form/ContactForm";

jest.mock("@formspree/react");

describe("Form", () => {
  test("Are correct fields rendered?", () => {
    const mockFormResponse = {
      succeeded: false,
      errors: [],
      submitting: false,
    };
    (useForm as jest.Mock).mockReturnValue([mockFormResponse, () => {}]);

    render(<Form />);

    const nameInput = screen.getByLabelText("Name") as HTMLInputElement;
    const emailInput = screen.getByLabelText("Email") as HTMLInputElement;
    const subjectSelect = screen.getByLabelText("Subject") as HTMLSelectElement;
    const messageTextarea = screen.getByLabelText(
      "Message"
    ) as HTMLTextAreaElement;
    const submitButton = screen.getByLabelText("submit") as HTMLButtonElement;

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(subjectSelect).toBeInTheDocument();
    expect(messageTextarea).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test("Will not submit if any of the fields are empty.", () => {
    const mockFormResponse = {
      succeeded: false,
      errors: [],
      submitting: false,
    };
    const mockSubmitForm = jest.fn();
    (useForm as jest.Mock).mockReturnValue([mockFormResponse, mockSubmitForm]);

    render(<Form />);

    const submitButton = screen.getByLabelText("submit") as HTMLButtonElement;

    fireEvent.click(submitButton);

    expect(mockSubmitForm).not.toHaveBeenCalled();
  });

  test("Will not submit if email is invalid.", () => {
    const mockFormResponse = {
      succeeded: false,
      errors: [],
      submitting: false,
    };
    const mockSubmitForm = jest.fn();
    (useForm as jest.Mock).mockReturnValue([mockFormResponse, mockSubmitForm]);

    render(<Form />);

    const emailInput = screen.getByLabelText("Email") as HTMLInputElement;
    const submitButton = screen.getByLabelText("submit") as HTMLButtonElement;

    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    fireEvent.click(submitButton);

    expect(mockSubmitForm).not.toHaveBeenCalled();
    expect(emailInput.value).toMatch(/^((?!@).)*$/);
  });
});
