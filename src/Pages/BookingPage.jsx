import React, { useState } from 'react';

export default function BookingPage({ classes, onBookingSubmit }) {
  const [selectedClassId, setSelectedClassId] = useState(classes[0]?.id ?? '');
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    const chosen = classes.find((c) => c.id === Number(selectedClassId));

    const bookingData = {
      name,
      classId: selectedClassId,
      className: chosen?.name,
      classTime: `${chosen?.day} • ${chosen?.time}`,
      notes,
      createdAt: new Date().toISOString(),
    };

    if (onBookingSubmit) {
      onBookingSubmit(bookingData);
    }

    setSubmitted(bookingData);
    setName('');
    setNotes('');
  }

  return (
    <section className="card">
      <h2>Book a Class</h2>
      <p className="lead">
        Make a reservation for your next Corelab session and tell us what you want
        to focus on during class.
      </p>

      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="booking-name">Your name</label>
          <input
            id="booking-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="booking-class">Choose a class</label>
          <select
            id="booking-class"
            value={selectedClassId}
            onChange={(e) => setSelectedClassId(e.target.value)}
          >
            {classes.map((cls) => (
              <option key={cls.id} value={cls.id}>
                {cls.name} — {cls.day} {cls.time}
              </option>
            ))}
          </select>
          <p className="small muted">
            Classes fill up fast — pick the day and time that works best for you.
          </p>
        </div>

        <div className="form-row">
          <label htmlFor="booking-notes">
            Notes (goals, injuries, or anything else we should be aware of)
          </label>
          <textarea
            id="booking-notes"
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <button type="submit" className="primary-button">
          Book class
        </button>
      </form>

      {submitted && (
        <div className="confirmation">
          <p className="small">
            <strong>Booking is reserved for this session:</strong>
          </p>
          <p className="small">
            {submitted.name} — {submitted.className} ({submitted.classTime})
          </p>
          {submitted.notes && (
            <p className="small muted">Notes: {submitted.notes}</p>
          )}
        </div>
      )}
    </section>
  );
}
