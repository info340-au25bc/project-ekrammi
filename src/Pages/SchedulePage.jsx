export default function SchedulePage({ classes }) {
  return (
    <section className="card">
      <div className="section-header">
        <h2>Class Schedule</h2>
        <p className="muted small">
          This shows a few sample classes from our React data.
        </p>
      </div>

      <ul className="class-grid">
        {classes.map((cls) => (
          <li key={cls.id} className="class-card">
            <h3>{cls.name}</h3>
            <p>{cls.level}</p>
            <p>
              {cls.day} · {cls.time}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
