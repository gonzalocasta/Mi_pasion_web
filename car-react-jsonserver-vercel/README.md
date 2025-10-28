# Car React JSON Server Vercel

This project is a car-related application built with React, utilizing json-server for a mock backend, and deployed on Vercel. Below is an overview of the project's structure and functionality.

## Project Structure

```
car-react-jsonserver-vercel
├── src
│   ├── main.tsx          # Entry point of the React application
│   ├── App.tsx           # Main application component with routing
│   ├── components         # Contains reusable components
│   │   ├── CarList.tsx    # Displays a list of cars
│   │   ├── CarCard.tsx    # Represents individual car details
│   │   └── CarForm.tsx    # Form for adding/editing cars
│   ├── pages              # Contains page components
│   │   ├── Home.tsx       # Main page displaying CarList
│   │   └── Admin.tsx      # Admin page for managing cars
│   ├── services           # API interaction logic
│   │   └── api.ts         # Functions for CRUD operations with json-server
│   ├── hooks              # Custom hooks
│   │   └── useCars.ts     # Hook for managing car state and API calls
│   ├── types              # TypeScript types
│   │   └── car.ts         # Defines the Car interface
│   └── styles             # Global styles
│       └── globals.css     # Global CSS styles
├── public
│   └── index.html         # Main HTML template
├── db.json                # Mock database for json-server
├── json-server            # Configuration for json-server
│   ├── routes.json        # Custom routes for json-server
│   └── server.js          # Server configuration for json-server
├── package.json           # NPM configuration file
├── tsconfig.json          # TypeScript configuration file
├── vite.config.ts         # Vite bundler configuration
├── vercel.json            # Vercel deployment configuration
├── .gitignore             # Git ignore file
└── README.md              # Project documentation
```

## Getting Started

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd car-react-jsonserver-vercel
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the json-server:**
   ```
   npm run server
   ```

4. **Run the React application:**
   ```
   npm run dev
   ```

5. **Deploy to Vercel:**
   Follow the instructions on Vercel to connect your GitHub repository and deploy the application.

## Features

- View a list of cars.
- Add, edit, and delete cars through an admin interface.
- Responsive design for mobile and desktop views.

## License

This project is licensed under the MIT License.