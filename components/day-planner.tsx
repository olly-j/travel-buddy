"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Clock3, PoundSterling, UtensilsCrossed } from "lucide-react";
import { useState } from "react";
import type { DayPlan } from "@/data/trip-content";

type DayPlannerProps = {
  days: DayPlan[];
};

export function DayPlanner({ days }: DayPlannerProps) {
  const [activeDayId, setActiveDayId] = useState(days[1]?.id ?? days[0]?.id);
  const activeDay = days.find((day) => day.id === activeDayId) ?? days[0];
  const reduceMotion = useReducedMotion();

  return (
    <div className="planner-shell">
      <div className="planner-rail" role="tablist" aria-label="Trip day planner">
        {days.map((day) => {
          const isActive = day.id === activeDay.id;

          return (
            <button
              key={day.id}
              type="button"
              className={`day-chip ${isActive ? "is-active" : ""}`}
              onClick={() => setActiveDayId(day.id)}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${day.id}`}
              id={`tab-${day.id}`}
            >
              <span className="day-chip__date">{day.shortDate}</span>
              <span className="day-chip__label">{day.label}</span>
              <span className="day-chip__theme">{day.theme}</span>
            </button>
          );
        })}
      </div>

      <div
        className="planner-panel glass-card"
        role="tabpanel"
        id={`panel-${activeDay.id}`}
        aria-labelledby={`tab-${activeDay.id}`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay.id}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -18 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="planner-panel__header">
              <div>
                <p className="eyebrow">Day spotlight</p>
                <h3>{activeDay.headline}</h3>
              </div>
              <div className="planner-panel__meta">
                <span>{activeDay.location}</span>
                <span>{activeDay.driveTime}</span>
              </div>
            </div>

            <p className="planner-panel__summary">{activeDay.summary}</p>

            <div className="planner-detail-grid">
              <article className="planner-detail">
                <Clock3 size={18} aria-hidden="true" />
                <div>
                  <h4>Plan shape</h4>
                  <p>{activeDay.planShape}</p>
                </div>
              </article>
              <article className="planner-detail">
                <UtensilsCrossed size={18} aria-hidden="true" />
                <div>
                  <h4>Dining move</h4>
                  <p>{activeDay.food}</p>
                </div>
              </article>
              <article className="planner-detail">
                <PoundSterling size={18} aria-hidden="true" />
                <div>
                  <h4>Spend note</h4>
                  <p>{activeDay.spend}</p>
                </div>
              </article>
            </div>

            <div className="planner-steps">
              {activeDay.steps.map((step) => (
                <div className="planner-step" key={step}>
                  <ArrowRight size={14} aria-hidden="true" />
                  <span>{step}</span>
                </div>
              ))}
            </div>

            <div className="planner-panel__footer">
              <div>
                <p className="planner-panel__footer-label">Why this day works</p>
                <p>{activeDay.whyItWorks}</p>
              </div>
              {activeDay.link ? (
                <a
                  className="text-link"
                  href={activeDay.link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {activeDay.link.label}
                </a>
              ) : null}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
