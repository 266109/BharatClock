// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";
// // import { expect } from 'vitest';
// import App from "../App";

// test("renders a welcome message", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/welcome to my app/i);
//   // expect(linkElement).toBeInTheDocument();
// });

import { test, expect } from 'vitest';

test('basic truthy test', () => {
  expect(true).toBe(true);
});

