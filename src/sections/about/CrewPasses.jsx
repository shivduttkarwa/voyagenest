import { FALLBACK_IMG } from "../../data/packages";
import asset from "../../asset";
import Reveal from "../../components/Reveal";
import SectionHead from "../../components/SectionHead";
import "./CrewPasses.css";

/* The team as crew passes with machine-readable strips. */
const portrait = (name) => asset(`images/team/${name}.webp`);

const TEAM = [
  {
    name: "Arvind Saldanha", role: "Founder & Chief Explorer", img: portrait("arvind-saldanha-crew"),
    fields: [["On the road since", "2014"], ["Known for", "Replying at 2 a.m."]],
    mrz: ["P<VNEST<<<ARVIND<SALDANHA<<<<<<<<<<<<<<<<<<<", "FOUNDER<<SINCE2014<<MUMBAI<<<<<<<<<<<<<<<01"]
  },
  {
    name: "Nithya Subramaniam", role: "Head of Itineraries", img: portrait("nithya-subramaniam"),
    fields: [["On the road since", "2016"], ["Known for", "Napkin sketches that become routes"]],
    mrz: ["P<VNEST<<<NITHYA<SUBRAMANIAM<<<<<<<<<<<<<<<", "ITINERARIES<<SINCE2016<<<<<<<<<<<<<<<<<<<02"]
  },
  {
    name: "Dhruv Bhasin", role: "Visas & Documentation", img: portrait("dhruv-bhasin"),
    fields: [["On the road since", "2017"], ["Known for", "Schengen files, first attempt"]],
    mrz: ["P<VNEST<<<DHRUV<BHASIN<<<<<<<<<<<<<<<<<<<<<<", "VISAS<<SINCE2017<<FIRSTATTEMPT<<<<<<<<<<<03"]
  },
  {
    name: "Safiya Merchant", role: "On-trip Support Lead", img: portrait("safiya-merchant"),
    fields: [["On the road since", "2019"], ["Known for", "Fixing missed flights before breakfast"]],
    mrz: ["P<VNEST<<<SAFIYA<MERCHANT<<<<<<<<<<<<<<<<<<", "SUPPORT<<SINCE2019<<TIMEZONE<YOURS<<<<<<<04"]
  }
];

const onImgError = (e) => { e.currentTarget.onerror = null; e.currentTarget.src = FALLBACK_IMG; };

export default function CrewPasses() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          layout="center"
          eyebrow="Issuing Authority"
          title="The Four Signatures Behind Every Stamp"
          text="No call centres, no ticket queues. Every trip on this site is drafted, stamped and signed by one of these four."
        />
        <div className="ab-crew">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={(i % 2) * 0.1}>
              <article className="ab-id">
                <div className="ab-id-strip">
                  <span>Wingspan · Crew Pass</span>
                  <span>Type P</span>
                </div>
                <div className="ab-id-main">
                  <div className="ab-id-photo">
                    <img src={m.img} alt={m.name} loading="lazy" decoding="async" onError={onImgError} />
                  </div>
                  <dl>
                    <div className="ab-id-wide">
                      <dt>Name</dt>
                      <dd className="ab-id-name">{m.name}</dd>
                    </div>
                    <div className="ab-id-wide">
                      <dt>Role</dt>
                      <dd>{m.role}</dd>
                    </div>
                    {m.fields.map(([k, v]) => (
                      <div key={k} className={v.length > 16 ? "ab-id-wide" : undefined}>
                        <dt>{k}</dt>
                        <dd>{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="ab-mrz" aria-hidden="true">
                  <span>{m.mrz[0]}</span>
                  <span>{m.mrz[1]}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
