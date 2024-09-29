# Name Insider

## Project Overview

**NameInsider** is a Next.js application that predicts identity characteristics such as the most common **gender** and **nationality** based on a person's name. The project was built using **Next.js**, **TypeScript**, and **Tailwind CSS**, and focuses on exploring these technologies while offering a practical user experience.

## Demo

A demo is included, showcasing the main functionality of the **NameInsider** app. The demo highlights how users can input their name, view the predicted identity details (gender, most common nationality, occurencies).

![name_insider](https://github.com/user-attachments/assets/94e09e34-a1fa-4280-9ab9-45f73f1c2bf1)

## Features

- **Identity Prediction**: Users can input a name and get predictions for gender and nationality.
- **Real-time Data Fetching**: The app makes use of external APIs to fetch identity data in real-time.
- **User-Friendly Interface**: Clean, responsive design for a seamless experience.
- **Error Handling**: Displays clear error messages if the input field is left empty.

## Technologies Used

- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- **API Integration**: Genderize.io and Nationalize.io for fetching identity predictions.

## What I Did in This Project

- Set up a Next.js application using `create-next-app`.
- Understood the folder structure and routing system of Next.js.
- Implemented both static and dynamic routes.
- Used **Next.js Navigation** for smooth transitions between pages.
- Worked with **Client and Server Components** in Next.js and transformed components into client components where necessary.
- Fetched data asynchronously in **Server Components**.
- Applied **TypeScript** throughout the project, including:
  - Defining **strongly-typed interfaces** for props and route parameters (e.g., the `Params` interface for typed route params).
  - Using **TypeScript’s type inference** to ensure accurate typing for API responses.
  - Handling **async API calls** with TypeScript's `Promise` types.
  - Ensuring **type safety** by safely accessing optional properties in API responses (e.g., `gender?.gender` and `country?.country[0].country_id`).
- Wrote CSS using **Tailwind CSS** for rapid, responsive UI development.
