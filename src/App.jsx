import { useState } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import HomePage from './Pages/HomePage.jsx';
import SchedulePage from './Pages/SchedulePage.jsx';
import BookingPage from './Pages/BookingPage.jsx';
import DashboardPage from './Pages/DashboardPage.jsx';
import AboutPage from './components/AboutPage.jsx';

// this is the sample class data for schedule and booking.
const CLASS_DATA = [
  { id: 1, name: 'Morning Core',     level: 'Beginner',     day: 'Mon', time: '8:00 AM' },
  { id: 2, name: 'Lunch Power',      level: 'Intermediate', day: 'Wed', time: '1:00 PM' },
  { id: 3, name: 'Evening Burn',     level: 'Advanced',     day: 'Fri', time: '6:00 PM' },
  { id: 4, name: 'Stretch & Restore',level: 'Beginner',     day: 'Sun', time: '4:00 PM' },
];

export default function App() {
  const [lastBooking, setLastBooking] = useState(null);

  function handleBookingSubmit(bookingData) {
    setLastBooking(bookingData);
  }

  return (
    <div className="app-root">
      {/* Header */}
      <header className="site-header">
        <div className="site-header-inner">
          {/* clicking title goes “home” */}
          <h1>
            <NavLink to="/" className="brand-link">
              Corelab Pilates
            </NavLink>
          </h1>
          <p className="tagline">
            Discover your core. Develop your strength. Move with confidence.
          </p>
        </div>
      </header>

      {/* Main nav */}
      <nav className="main-nav">
        <div className="main-nav-inner">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/schedule"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            Schedule
          </NavLink>

          <NavLink
            to="/booking"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            Book a Class
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            About Studio
          </NavLink>
        </div>
      </nav>

      {/* Page content */}
      <main className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/schedule"
            element={<SchedulePage classes={CLASS_DATA} />}
          />

          <Route
            path="/booking"
            element={
              <BookingPage
                classes={CLASS_DATA}
                onBookingSubmit={handleBookingSubmit}
              />
            }
          />

          <Route
            path="/dashboard"
            element={<DashboardPage lastBooking={lastBooking} />}
          />

          <Route path="/about" element={<AboutPage />} />

          {/* catch-all bad URLs → send to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <small>Draft 2 • Corelab Pilates project • INFO 340</small>
      </footer>
    </div>
  );
}
