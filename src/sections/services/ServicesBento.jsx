import Button from "../../components/Button";
import Icon from "../../components/Icon";
import Reveal from "../../components/Reveal";
import { useUI } from "../../components/UIContext";
import "./ServicesBento.css";

/* A full-service travel desk, presented as one connected operating system. */
const SERVICES = [
  {
    icon: "calendar",
    title: "Custom Itineraries",
    text: "A blank page and a travel designer. Your exact trip, built day by day, then priced, booked and run by us."
  },
  { icon: "plane", title: "Flight Bookings", text: "Smart routing, meal preferences and web check-in, handled for you." },
  { icon: "pin", title: "Hotels & Resorts", text: "Boutique homestays to overwater villas — every property vetted." },
  { icon: "globe", title: "Visa Assistance", text: "Checklists, appointments, forms and follow-ups for 40+ countries, Schengen included." },
  { icon: "heart", title: "Honeymoon Packages", text: "Slow mornings, private dinners and thoughtful surprises, planned around the two of you." },
  { icon: "users", title: "Group & MICE Tours", text: "Offsites, incentive trips, college batches and family reunions — for 10 to 500 people." },
  { icon: "shield", title: "Travel Insurance", text: "Medical, baggage and cancellation cover, backed by real claims support." },
  { icon: "wallet", title: "Forex & EMI", text: "Competitive exchange rates, forex cards and no-cost EMI on packages." },
  {
    icon: "headset",
    title: "24×7 On-trip Support",
    text: "A dedicated WhatsApp line while you travel. Delays, changes or emergencies — a human answers."
  }
];

export default function ServicesBento() {
  const { openEnquiry } = useUI();

  return (
    <section className="sv" aria-labelledby="services-title">
      <div className="container sv-shell">
        <div className="sv-head">
          <span className="eyebrow">What we do</span>
          <h2 id="services-title" className="display-2">Nine ways we carry the load</h2>
          <p className="sv-intro">Not a menu to choose from — take one, take all nine. Most travellers start with one and end up handing us the lot.</p>

          <Button icon="arrow" onClick={() => openEnquiry()}>Hand Us the Whole Trip</Button>
        </div>

        <div className="sv-list">
          {SERVICES.map((s) => (
            <Reveal
              as="article"
              key={s.title}
              className="sv-item"
              role="button"
              tabIndex={0}
              aria-label={`Enquire about ${s.title}`}
              onClick={() => openEnquiry(s.title)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openEnquiry(s.title);
                }
              }}
            >
              <span className="sv-ico"><Icon name={s.icon} /></span>

              <div className="sv-copy">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>

            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
