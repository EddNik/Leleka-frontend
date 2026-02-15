# Leleka Frontend

**Leleka** is a comprehensive pregnancy tracking application designed to support expectant mothers throughout their journey. This repository contains the frontend client, built with **Next.js (App Router)** and **TypeScript**, providing an interactive interface for tracking baby development, managing daily tasks, and journaling the pregnancy experience.

## 🛠 Tech Stack

The project utilizes a modern React ecosystem focused on performance and type safety:

* **Framework**: [Next.js](https://nextjs.org/) (App Router structure)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **State Management**: [Zustand](https://github.com/pmndrs/zustand) (Global store for Auth, Journey)
* **Server State / Data Fetching**: [TanStack Query (React Query)](https://tanstack.com/query/latest)
* **Styling**: [CSS Modules](https://github.com/css-modules/css-modules) with PostCSS & Global CSS variables
* **Form Handling**: [React Hook Form](https://react-hook-form.com/)
* **Validation**: [Yup](https://github.com/jquense/yup)
* **HTTP Client**: [Axios](https://axios-http.com/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Routing**: Next.js File-system based routing (App Directory)

## 🚀 Getting Started

### Prerequisites

* **Node.js**: v18.17 or higher
* **npm** or **yarn**
* **Backend**: A running instance of the Leleka Backend service.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-repo/leleka-frontend.git](https://github.com/your-repo/leleka-frontend.git)
    cd leleka-frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root directory by copying the example:
    ```bash
    cp .env.example .env
    ```
    Update the variables with your configuration (e.g., API Base URL):
    ```env
    NEXT_PUBLIC_API_URL=http://localhost:3000/api
    ```

4.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📂 Project Structure

The project follows the **Next.js App Router** architecture:
```
src/
├── app/
│   ├── (auth routes)/       # Public auth pages (Sign In, Sign Up)
│   ├── (privat routes)/     # Protected pages (Dashboard, Journey, Diary, Profile)
│   ├── api/                 # Next.js API Route Handlers (BFF/Proxy layer)
│   ├── const/               # App-wide constants (Query Keys, etc.)
│   └── globals.css          # Global styles and CSS variables
├── components/              # Reusable UI components
│   ├── AuthBar/             # Authentication status UI
│   ├── BurgerMenu/          # Mobile navigation
│   ├── BabyTodayCard/       # Dashboard widget for baby info
│   ├── Diary/               # Components for Diary (List, Cards, Forms)
│   ├── JourneyDetails/      # Weekly pregnancy info display
│   ├── TasksReminderCard/   # Task management widgets
│   └── ...                  # Other shared components (Modal, Button, Loader)
├── hooks/                   # Custom React Hooks (e.g., useTasks)
├── lib/                     # Core libraries and utilities
│   ├── api/                 # Axios setup (Client & Server instances)
│   ├── store/               # Zustand stores (authStore, journeyStore)
│   └── validation/          # Yup schemas and configuration
├── types/                   # TypeScript interfaces (User, Task, Diary, Week)
└── public/                  # Static assets (Images, Icons, Sprites)
```
## ✨ Key Features

* **🔐 Authentication & Onboarding**:
    * Secure Sign-up and Login flows.
    * Onboarding form to calculate current pregnancy week based on user input.
    * Persistent session management using Cookies and Zustand.

* **📊 Dashboard**:
    * **Baby Today**: Quick view of the baby's current size and weight.
    * **Week Selector**: Easy navigation between different weeks of pregnancy.
    * **Reminders**: Upcoming tasks and to-dos.

* **👶 Pregnancy Journey**:
    * Detailed weekly breakdown (`/journey/[week]`).
    * Information on Baby's Development and Mom's Changes.
    * Visual size comparisons (fruit/vegetable metaphors).

* **📖 Personal Diary**:
    * **Mood Tracking**: Log emotions and feelings.
    * **Entry Management**: Create, view, edit, and delete diary notes.
    * **Media**: Support for attaching images to entries.

* **✅ Task Management**:
    * System-generated tasks relevant to the pregnancy stage.
    * Custom user tasks.
    * Status tracking (Done/Not Done).

* **👤 User Profile**:
    * Profile management (`/profile`).
    * Avatar upload and update.
    * Account settings editing.

## 🧪 Scripts

* `npm run dev`: Starts the development server.
* `npm run build`: Builds the application for production.
* `npm start`: Runs the production build.
* `npm run lint`: Runs ESLint configuration.

## 📄 License

This project is licensed under the **ISC License**.
