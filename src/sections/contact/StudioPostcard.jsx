import { SITE } from "../../data/site";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import Reveal from "../../components/Reveal";
import SectionHead from "../../components/SectionHead";
import "./StudioPostcard.css";

/* WHERE WE ACTUALLY ARE.
 *
 * No embedded map. A map iframe here was decoration that cost a third-party
 * frame and still could not do the one thing a visitor wants — route them
 * from where they are standing. So the address is set as type, the hours sit
 * beside it with today's row called out, and the single primary action opens
 * Google Maps directions instead. The strip along the foot carries what the
 * map pin used to imply: the station, the parking, the walk-in policy. */

/* days: JS getDay() indices the row covers, so today can be marked. */
const HOURS = [
  { label: "Mon – Fri", value: "9:30 AM – 7:30 PM", days: [1, 2, 3, 4, 5] },
  { label: "Saturday", value: "10:00 AM – 6:00 PM", days: [6] },
  { label: "Sunday", value: "On-trip support only", days: [0] }
];

const NOTES = [
  ["Nearest station", "Bandra (W) — 10 minutes by rickshaw"],
  ["Parking", "Paid lot in the same building"],
  ["Walk-ins", "Welcome — call ahead and the coffee is ready"]
];

export default function StudioPostcard() {
  const today = new Date().getDay();

  return (
    <section className="section">
      <div className="container">
        <SectionHead
          layout="center"
          eyebrow="The Studio"
          title="Come Up, We'll Draw It Together"
          text="Two minutes off Linking Road in Bandra West. Bring the dates and a rough idea — you'll leave with the route on paper."
        />

        <Reveal className="pv-card">
          <div className="pv-main">
            <div className="pv-where">
              <span className="pv-eyebrow"><Icon name="pin" /> Bandra West · Mumbai</span>
              <h3>Wingspan Studio</h3>
              <address className="pv-address">{SITE.address}</address>
              <div className="pv-actions">
                <Button
                  href={SITE.directionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon="arrow"
                >
                  Get Directions
                </Button>
                <Button href={SITE.phoneHref} variant="outline" icon="phone">
                  {SITE.phone}
                </Button>
              </div>
            </div>

            <div className="pv-hours">
              <span className="pv-hours-title">Opening Hours</span>
              <ul>
                {HOURS.map((h) => {
                  const isToday = h.days.includes(today);
                  return (
                    <li key={h.label} className={isToday ? "is-today" : undefined}>
                      <span>
                        {h.label}
                        {isToday && <em>Today</em>}
                      </span>
                      <b>{h.value}</b>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <ul className="pv-notes">
            {NOTES.map(([k, v]) => (
              <li key={k}>
                <b>{k}</b>
                {v}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
