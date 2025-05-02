# Excel Analytics Platform

A React-based frontend application for analyzing Excel data with user and admin authentication.

## Features

- User and admin authentication
- Dashboard with analytics overview
- Excel file upload and processing
- Admin panel for user management
- Responsive design with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
2. Install dependencies:

```bash
cd excel-analytics-platform
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Demo Credentials

- Admin: admin@example.com / admin123
- User: user@example.com / user123

## Project Structure

```
excel-analytics-platform/
├── public/
├── src/
│   ├── components/
│   │   ├── admin/         # Admin-specific components
│   │   ├── auth/          # Authentication components
│   │   ├── dashboard/     # Dashboard components
│   │   └── layout/        # Layout components (Header, Sidebar)
│   ├── App.js             # Main application component
│   ├── index.js           # Entry point
│   └── index.css          # Global styles with Tailwind
├── package.json
└── README.md
```

## Technologies Used

- React.js
- React Router
- Tailwind CSS
- Heroicons

## Future Enhancements

- Backend integration with API
- Excel file parsing and visualization
- User permissions management
- Data export functionality
- Advanced analytics features