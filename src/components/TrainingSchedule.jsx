
const sessions = [
  { day: 'MONDAY', time: '06:00 PM – 07:00 PM', level: 'BEGINNERS' },
  { day: 'TUESDAY', time: '06:00 PM – 07:00 PM', level: 'ALL LEVELS' },
  { day: 'WEDNESDAY', time: '06:00 PM – 07:00 PM', level: 'INTERMEDIATE' },
  { day: 'THURSDAY', time: '06:00 PM – 07:00 PM', level: 'ALL LEVELS' },
  { day: 'FRIDAY', time: '06:00 PM – 07:00 PM', level: 'ADVANCED' },
  { day: 'SATURDAY', time: '07:00 AM – 09:00 AM', level: 'SPECIAL TRAINING' }
];

function TrainingSchedule() {
  return (
    <section className="schedule-section" id="schedule">
      <div className="schedule-heading">
        <span className="section-label">PLAN YOUR TRAINING</span>
        <h2>DISCIPLINE HAS <span>A SCHEDULE.</span></h2>
      </div>

      <div className="schedule-list">
        {sessions.map((session, index) => (
          <div className="schedule-row" key={session.day}>
            <span className="schedule-number">
              0{index + 1}
            </span>

            <h3>{session.day}</h3>

            <span className="schedule-time">
              {session.time}
            </span>

            <span className="schedule-level">
              {session.level}
            </span>
          </div>
        ))}
      </div>

      <p className="schedule-note">
        * Demo timetable. Confirm actual academy timings before publishing.
      </p>
    </section>
  );
}

export default TrainingSchedule;
