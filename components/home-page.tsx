"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BedDouble,
  CalendarRange,
  Castle,
  ExternalLink,
  MapPinned,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { DayPlanner } from "@/components/day-planner";
import { Reveal } from "@/components/reveal";
import {
  bookingSteps,
  budgetBands,
  dayPlans,
  highlights,
  sourceGroups,
  stayOptions,
  tripStats,
} from "@/data/trip-content";

export function HomePage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="page-shell">
      <div className="page-aurora page-aurora--one" aria-hidden="true" />
      <div className="page-aurora page-aurora--two" aria-hidden="true" />
      <div className="page-grid" aria-hidden="true" />

      <header className="site-header">
        <a className="brand-mark" href="#top">
          <span className="brand-mark__dot" />
          Travel Buddy
        </a>
        <nav className="site-nav" aria-label="Section navigation">
          <a href="#snapshot">Snapshot</a>
          <a href="#rhythm">Rhythm</a>
          <a href="#stay">Stay</a>
          <a href="#planner">Planner</a>
          <a href="#book">Book</a>
        </nav>
      </header>

      <section id="top" className="hero section-shell">
        <Reveal className="hero-copy">
          <p className="eyebrow">Easter Escape 2026</p>
          <h1>Two nights away, three moods, one unusually clean trip shape.</h1>
          <p className="hero-copy__lede">
            Rutland handles the reset, Lincoln delivers the heritage hit, and
            Leamington Spa turns the drive back west into an easy, useful final act.
          </p>

          <div className="hero-actions">
            <a className="button button--primary" href="#planner">
              Explore the itinerary
            </a>
            <a
              className="button button--secondary"
              href="https://www.finchsarms.co.uk/"
              target="_blank"
              rel="noreferrer"
            >
              Open stay shortlist
            </a>
          </div>

          <div className="hero-badges" aria-label="Trip summary">
            {tripStats.map((stat) => (
              <div className="hero-badge glass-card" key={stat.label}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="hero-panel-wrap" delay={0.1}>
          <motion.div
            className="hero-panel glass-card"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-panel__heading">
              <p className="eyebrow">Route rhythm</p>
              <span className="route-pill">Wed 1 Apr to Mon 6 Apr 2026</span>
            </div>

            <div className="route-stack">
              {dayPlans.map((day, index) => (
                <div className="route-stop" key={day.id}>
                  <div className="route-stop__marker">
                    <span>{index + 1}</span>
                  </div>
                  <div>
                    <p>{day.shortDate}</p>
                    <h2>{day.label}</h2>
                    <span>{day.theme}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="hero-panel__footer">
              <div>
                <p className="hero-panel__meta-label">Best overall stay</p>
                <strong>The Finch&apos;s Arms, Hambleton</strong>
              </div>
              <a
                className="text-link"
                href="https://www.finchsarms.co.uk/book-a-table-1"
                target="_blank"
                rel="noreferrer"
              >
                Dinner booking note
              </a>
            </div>
          </motion.div>
        </Reveal>
      </section>

      <section id="snapshot" className="section-shell">
        <Reveal className="section-heading">
          <p className="eyebrow">Why this plan lands</p>
          <h2>The brief is low-friction driving, hidden-gem countryside, and one real heritage day.</h2>
          <p>
            This itinerary stays disciplined. Thursday opens with atmosphere not effort,
            Friday is the spendful cathedral-and-castle day, and Saturday becomes a soft
            re-entry instead of a rushed comedown.
          </p>
        </Reveal>

        <div className="feature-grid">
          {highlights.map((highlight, index) => (
            <Reveal className="glass-card feature-card" key={highlight.title} delay={index * 0.08}>
              <div className="feature-card__icon">{highlight.icon}</div>
              <h3>{highlight.title}</h3>
              <p>{highlight.copy}</p>
              <span>{highlight.proof}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="rhythm" className="section-shell split-section">
        <Reveal className="split-section__copy">
          <p className="eyebrow">Trip rhythm</p>
          <h2>Family, escape, heritage, soft return, family again.</h2>
          <p>
            The emotional pacing is what makes this plan feel premium. Nothing competes
            with the family windows, and the only heavyweight sightseeing block gets the
            best energy slot.
          </p>
          <div className="insight-list">
            <article className="insight-item glass-card">
              <CalendarRange size={20} aria-hidden="true" />
              <div>
                <h3>Dates locked correctly</h3>
                <p>Wednesday 1 April 2026 through Monday 6 April 2026, with the couple&apos;s trip on Thursday and Friday nights.</p>
              </div>
            </article>
            <article className="insight-item glass-card">
              <ShieldCheck size={20} aria-hidden="true" />
              <div>
                <h3>Low-friction by design</h3>
                <p>The route avoids stacking heavy travel and sightseeing on the same day, which keeps decision fatigue and traffic stress down.</p>
              </div>
            </article>
            <article className="insight-item glass-card">
              <Sparkles size={20} aria-hidden="true" />
              <div>
                <h3>Moderate-to-premium feel</h3>
                <p>Michelin-signal dining, a smart countryside base, and a flexible spend range keep the trip elevated without forcing a splurge.</p>
              </div>
            </article>
          </div>
        </Reveal>

        <Reveal className="glass-card metrics-card" delay={0.12}>
          <p className="eyebrow">Route logic</p>
          <div className="metrics-card__cluster">
            <article>
              <MapPinned size={18} aria-hidden="true" />
              <h3>Hambleton / Oakham</h3>
              <p>Base for both nights, immediate countryside atmosphere, strong dining signal.</p>
            </article>
            <article>
              <Castle size={18} aria-hidden="true" />
              <h3>Lincoln</h3>
              <p>Cathedral, castle, Roman traces, and a compact historic core that carries a whole day.</p>
            </article>
            <article>
              <BedDouble size={18} aria-hidden="true" />
              <h3>Leamington Spa</h3>
              <p>Elegant shopping stop to break the westbound drive instead of turning Saturday into dead mileage.</p>
            </article>
          </div>
        </Reveal>
      </section>

      <section id="stay" className="section-shell">
        <Reveal className="section-heading">
          <p className="eyebrow">Stay and dine</p>
          <h2>The sweet spot is a countryside base that feels special without making the whole trip about the hotel.</h2>
          <p>
            The Finch&apos;s Arms is the best overall balance. Hambleton Hall is the
            indulgent upgrade. Barnsdale is the practical backup if stock, spa appeal,
            or hotel-style inventory matters more.
          </p>
        </Reveal>

        <div className="stay-grid">
          {stayOptions.map((stay, index) => (
            <Reveal className={`glass-card stay-card ${stay.featured ? "stay-card--featured" : ""}`} key={stay.name} delay={index * 0.08}>
              <div className="stay-card__topline">
                <span>{stay.tag}</span>
                {stay.featured ? <strong>Best overall</strong> : null}
              </div>
              <h3>{stay.name}</h3>
              <p>{stay.summary}</p>
              <ul className="inline-list">
                {stay.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="stay-card__footer">
                <span>{stay.cost}</span>
                <a href={stay.href} target="_blank" rel="noreferrer">
                  Visit site <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="planner" className="section-shell">
        <Reveal className="section-heading">
          <p className="eyebrow">Interactive day planner</p>
          <h2>Click through the trip and pressure-test each day before anything gets booked.</h2>
          <p>
            Thursday and Friday carry the experience. Saturday should stay useful,
            light, and flexible. The outer family days remain intentionally protected.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <DayPlanner days={dayPlans} />
        </Reveal>
      </section>

      <section id="book" className="section-shell split-section split-section--book">
        <Reveal className="split-section__copy">
          <p className="eyebrow">Book in this order</p>
          <h2>Secure the stay first, then the moments that matter most.</h2>
          <div className="booking-stack">
            {bookingSteps.map((step) => (
              <article className="booking-step glass-card" key={step.title}>
                <div className="booking-step__index">{step.index}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal className="budget-card glass-card" delay={0.12}>
          <p className="eyebrow">Budget envelope</p>
          <h2>Moderate if the inn does the heavy lifting, premium if the stay becomes the event.</h2>

          <div className="budget-bars">
            {budgetBands.map((band) => (
              <article key={band.name}>
                <div className="budget-bars__label">
                  <h3>{band.name}</h3>
                  <span>{band.range}</span>
                </div>
                <div className="budget-bar-track" aria-hidden="true">
                  <div className="budget-bar-fill" style={{ width: band.width }} />
                </div>
                <p>{band.copy}</p>
              </article>
            ))}
          </div>

          <div className="budget-card__footer">
            <p>
              Room pricing for The Finch&apos;s Arms was not directly verified in the source
              snapshot, so that portion of the budget remains an informed estimate with
              Easter uplift risk.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section-shell">
        <Reveal className="source-panel glass-card">
          <div className="source-panel__copy">
            <p className="eyebrow">Official links</p>
            <h2>Everything needed to move from “good idea” to “booked”.</h2>
            <p>
              These are grouped straight from the Trip Snapshot source so the next actions
              stay tidy: stay, dining, Lincoln tickets, optional Oakham, and Leamington planning.
            </p>
          </div>
          <div className="source-groups">
            {sourceGroups.map((group) => (
              <article className="source-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="source-links">
                  {group.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                      <ArrowRight size={14} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
