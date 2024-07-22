import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "../src/app/components";

describe("Header", () => {
  it("should display the logo image", () => {
    render(<Header />);
    const logo = screen.getByAltText(/Xmarkets.AI logo/i);
    expect(logo).toBeInTheDocument();
  });

  it("should display the navigation links", () => {
    render(<Header />);
    const productLink = screen.getByRole("link", { name: /product/i });
    const docsLink = screen.getByRole("link", { name: /docs/i });
    const careerLink = screen.getByRole("link", { name: /career/i });
    const loginLink = screen.getByRole("link", { name: /login/i });

    expect(productLink).toBeInTheDocument();
    expect(docsLink).toBeInTheDocument();
    expect(careerLink).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
  });

  it('should display the "Follow Us on X" button', () => {
    render(<Header />);
    const followUsButton = screen.getByRole("button", {
      name: /follow us on x/i,
    });
    expect(followUsButton).toBeInTheDocument();
  });
});
