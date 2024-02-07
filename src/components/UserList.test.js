import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { UserList } from "./UserList";

describe("<UserList />", () => {
  it("renders correctly", () => {
    const { component } = render(<UserList />);
    expect(component).toMatchSnapshot();
  });

  it("toggles modal without changing state", async () => {
    render(<UserList />);
    userEvent.click(screen.queryByRole('button', { container: screen.getByText('Create User List', { selector: 'span' }) }));
    await waitFor(() => screen.findByText('Create User List', { selector: 'h2' }));
    fireEvent.keyDown(screen.getByText('Create User List', { selector: 'h2' }), { key: 'Escape', code: 'Escape' });
    expect(screen.queryByText('Create User List', { selector: 'h2' })).not.toBeInTheDocument();
  });

  it("renders with modal open by default", async () => {
    render(<UserList defaultOpen={true} />);
    expect(screen.getByText('Create User List', { selector: 'h2' })).toBeInTheDocument();
  });

  it("submits modal with player at 0,0 with 0x0 view and renders table correctly", async () => {
    render(<UserList defaultOpen={true} />);
    await screen.findByText('Create User List', { selector: 'h2' });
    fireEvent.change(screen.getByPlaceholderText('X'), { target: { value: '0' } });
    fireEvent.change(screen.getByPlaceholderText('Y'), { target: { value: '0' } });
    fireEvent.change(screen.getByPlaceholderText('Width'), { target: { value: '0' } });
    fireEvent.change(screen.getByPlaceholderText('Height'), { target: { value: '0' } });
    userEvent.click(screen.queryByRole('button', { container: screen.getByText('Submit', { selector: 'span' }) }));
    expect(screen.getByText('user2')).toBeInTheDocument();
  });
});
