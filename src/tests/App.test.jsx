/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { expect } from "@wdio/globals";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import * as matchers from "@testing-library/jest-dom/matchers";

import App from "../components/Component";

expect.extend(matchers);

describe("React Component Testing", () => {
	it("Test theme button toggle", async () => {
		render(<App />);
		const buttonEl = screen.getByText(/Current theme/i);

		await $(buttonEl).click();
		expect(buttonEl).toContainHTML("dark");
	});
});
