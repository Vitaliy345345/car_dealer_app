Your **Next.js 15 project architecture** looks well-structured. Based on your file structure, here’s an updated **README.md** to match your folder organization:

---

````md
# 🚗 Car Dealer App

A **Next.js 15** application for browsing and managing car dealership data.

## 📌 Features

- 🚀 Built with **Next.js 15** and **React 19**
- 🎨 **Tailwind CSS** for styling
- ✅ **ESLint & Prettier** for code quality
- 🔍 **Lucide React** for icons
- 🔄 **API Services** for fetching vehicle data

## 📦 Installation

1. **Clone the repository**:
   ```sh
   git clone git@github.com:Vitaliy345345/car_dealer_app.git
   cd car-dealer-app
   ```
````

2. **Install dependencies**:
   ```sh
   npm install
   ```
   _or_
   ```sh
   yarn install
   ```
   _or_
   ```sh
   pnpm install
   ```

## 🚀 Running the Project

### 🔧 Development Mode

```sh
npm run dev
```

- Runs the app in **development mode**
- Open `http://localhost:3000` in the browser

### 🏗️ Build for Production

```sh
npm run build
```

- Generates an **optimized production build**

### 🚀 Start Production Server

```sh
npm run start
```

- Runs the app in **production mode**
- Make sure to build the project first using `npm run build`

### 🔍 Linting & Formatting

Run **ESLint** to check for errors:

```sh
npm run lint
```

## 🛠️ Technologies Used

| Name         | Version |
| ------------ | ------- |
| Next.js      | 15.1.6  |
| React        | 19.0.0  |
| Tailwind CSS | 3.4.1   |
| TypeScript   | 5.x.x   |
| ESLint       | 9.20.0  |
| Prettier     | 3.4.2   |

## 📂 Project Structure

```
car-dealer-app/
│── .vscode/        # VSCode settings (if any)
│── .next/          # Next.js build output
│── app/            # Next.js 15 App Router
│   ├── result/[makeId]/[year]/ # Dynamic route for vehicle results
│   ├── layout.tsx  # Root layout component
│   ├── page.tsx    # Homepage or main entry page
│   ├── globals.css # Global styles
│── components/     # Reusable UI components
│── constants/      # Static constants and configuration
│── hooks/          # Custom React hooks
│── node_modules/   # Installed dependencies
│── public/         # Static assets
│── services/       # API calls and data fetching logic
│── types/          # TypeScript interfaces
│── utils/          # Utility functions
│── .env.local      # Environment variables (not tracked by Git)
│── .eslintrc.json  # ESLint configuration
│── .gitignore      # Ignored files for Git
│── .prettierrc.json# Prettier configuration
│── next.config.js  # Next.js configuration
│── package.json    # Project dependencies
│── postcss.config.js # Tailwind/PostCSS configuration
│── README.md       # Documentation (this file)
│── tailwind.config.ts # Tailwind CSS config
│── tsconfig.json   # TypeScript config
```

## 📜 Environment Variables

Create a `.env.local` file for API keys and environment variables:

```env
NEXT_PUBLIC_API_URL_BASE=https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car
NEXT_PUBLIC_API_URL_MAKE=https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId

```

## 🚀 Deployment

- You can deploy this project on **Vercel** with:
  ```sh
  vercel deploy
  ```
- Ensure your environment variables are set in **Vercel Dashboard**.

## 📜 License

This project is licensed under the **MIT License**.

---

### 👨‍💻 Author

Created by **[Vitalii Sereda]**  
[Vitaliy345345](https://github.com/Vitaliy345345)

---

🚀 **Happy Coding!**

```

```
