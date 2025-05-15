# React Dashboard Application

A modern, responsive dashboard application built with React, featuring a clean UI, dark mode support, and real-time data visualization.

![Dashboard Preview](preview.png)

## 🌐 Live Demo

- **Dashboard**: [https://fascinating-pastelito-ed7225.netlify.app/](https://fascinating-pastelito-ed7225.netlify.app/)
- **Users Page**: [https://fascinating-pastelito-ed7225.netlify.app/users](https://fascinating-pastelito-ed7225.netlify.app/users)
- **Reports Page**: [https://fascinating-pastelito-ed7225.netlify.app/report](https://fascinating-pastelito-ed7225.netlify.app/report)

## 🚀 Features

- **Modern UI/UX**: Clean and intuitive interface built with Tailwind CSS
- **Dark Mode Support**: Seamless dark/light mode switching with persistent preferences
- **Responsive Design**: Fully responsive layout that works on all devices
- **Real-time Data**: Integration with Reqres API for user data
- **Interactive Components**: 
  - Dynamic tables with pagination
  - Search functionality
  - User metrics cards
  - Interactive charts
- **Performance Optimized**: Built with Vite for lightning-fast development and production builds

## 🏗️ Architecture

The application follows a modern React architecture with the following structure:

```
src/
├── components/         # Reusable UI components
│   ├── Navbar.jsx     # Top navigation bar
│   ├── Sidebar.jsx    # Side navigation menu
│   └── Dashboard.jsx  # Main dashboard component
├── pages/             # Page components
│   ├── Users.jsx      # Users management page
│   └── Reports.jsx    # Reports and analytics page
├── routes/            # Routing configuration
│   └── index.jsx      # Route definitions
└── App.jsx           # Root application component
```

### Key Technologies

- **React 18**: For building the user interface
- **React Router**: For client-side routing
- **Tailwind CSS**: For styling and responsive design
- **Vite**: For fast development and optimized builds
- **Reqres API**: For user data and authentication

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=https://reqres.in/api
```

## 📦 Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production

## 🎨 Features in Detail

### Dark Mode
- Persistent dark mode preference using localStorage
- Smooth transitions between modes
- Tailwind CSS dark mode integration

### Responsive Design
- Mobile-first approach
- Collapsible sidebar for mobile devices
- Responsive tables and cards
- Breakpoint-specific layouts

### Data Management
- Real-time data fetching from Reqres API
- Pagination for large datasets
- Search and filter functionality
- Error handling and loading states

## 🙏 Acknowledgments

- [Reqres API](https://reqres.in/) for providing the test API
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React Icons](https://react-icons.github.io/react-icons/) for the beautiful icons

---

Made with ❤️ by Raghavendra Chaubey
