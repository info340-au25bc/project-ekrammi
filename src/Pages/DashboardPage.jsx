export default function DashboardPage({ lastBooking }) {
  return (
    <section className="card">
      <h2>Your Dashboard</h2>
      <p className="lead">
        This page summarizes the latest bookings of your Corelab Pilates.
      </p>

      {!lastBooking ? (
        <p className="empty-message">
          There are currently no reservations for you. To begin, click "Book a Class."
        </p>
      ) : (
        <div className="booking-summary">
          <p>
            <strong>Class:</strong> {lastBooking.className}
            {lastBooking.classTime && ` (${lastBooking.classTime})`}
          </p>
          <p>
            <strong>Booked for:</strong> {lastBooking.name}
          </p>
          <p>
            <strong>Email:</strong> {lastBooking.email}
          </p>
          {lastBooking.notes && (
            <p>
              <strong>Notes:</strong> {lastBooking.notes}
            </p>
          )}
          <p className="small muted">
            Just the React state is used to hold this data.Firebase durability will be added in the final project.
          </p>
        </div>
      )}
    </section>
  );
}
