import { BedDouble, Castle, ShoppingBag } from "lucide-react";

export type DayPlan = {
  id: string;
  shortDate: string;
  label: string;
  theme: string;
  headline: string;
  location: string;
  driveTime: string;
  summary: string;
  planShape: string;
  food: string;
  spend: string;
  steps: string[];
  whyItWorks: string;
  link?: {
    label: string;
    href: string;
  };
};

export const tripStats = [
  { label: "Base", value: "Hambleton / Oakham" },
  { label: "Main day out", value: "Lincoln heritage day" },
  { label: "Travel style", value: "Low-friction foodie escape" },
  { label: "Budget", value: "Moderate to premium" },
];

export const highlights = [
  {
    icon: <BedDouble size={20} aria-hidden="true" />,
    title: "Rutland stays under the radar",
    copy: "Fresh countryside energy, handsome stone villages, waterside scenery, and Michelin-signal dining without drifting into a too-familiar Cotswolds mood.",
    proof: "The source snapshot highlights Hambleton Hall, Hitchen’s Barn, Olive Branch & Beech House, The Six Bells, and Prévost @ Haycock Manor in the Oakham orbit.",
  },
  {
    icon: <Castle size={20} aria-hidden="true" />,
    title: "Lincoln earns the whole Friday",
    copy: "Cathedral, castle, Roman remnants, and a steep historic core give the trip one proper anchor day that feels richer than a casual wander.",
    proof: "The snapshot cites official cathedral visitor guidance and daily castle opening coverage for the core heritage plan.",
  },
  {
    icon: <ShoppingBag size={20} aria-hidden="true" />,
    title: "Leamington is a soft landing, not a detour",
    copy: "It breaks up the drive west and adds useful shopping energy without asking Saturday to behave like another sightseeing mission.",
    proof: "Official visitor and shopping references in the source position the town as both elegant and practical for a half-day stop.",
  },
];

export const stayOptions = [
  {
    name: "The Finch’s Arms",
    tag: "Countryside inn",
    summary:
      "The best balance of atmosphere, on-site food, location, and value if the trip is about the whole experience rather than only the hotel.",
    points: [
      "Rooms on site",
      "Easy arrival-evening dinner",
      "Strong base for Lincoln and the westbound return",
    ],
    cost: "Treat pricing as variable with Easter uplift risk",
    href: "https://www.finchsarms.co.uk/",
    featured: true,
  },
  {
    name: "Hambleton Hall",
    tag: "Country-house splurge",
    summary:
      "The romantic upgrade when the stay itself should feel like the headline, with Michelin-starred dining and published premium 2026 room rates.",
    points: ["Michelin-starred restaurant", "Two-night weekend pattern", "Special-occasion energy"],
    cost: "Published 2026 rates from £285 single occupancy upward",
    href: "https://www.hambletonhall.com/",
    featured: false,
  },
  {
    name: "The Barnsdale",
    tag: "Boutique backup",
    summary:
      "A more contemporary, hotel-spa leaning fallback near Rutland Water if you want broader inventory or a more conventional hotel setup.",
    points: ["Boutique hotel positioning", "Dining on site", "Practical alternative stock"],
    cost: "Check direct for current availability and packages",
    href: "https://barnsdalerutland.com/",
    featured: false,
  },
];

export const dayPlans: DayPlan[] = [
  {
    id: "wed",
    shortDate: "Wed 1 Apr",
    label: "Parents",
    theme: "Arrival day",
    headline: "Woodford to parents, with no extra layers added.",
    location: "London to Daventry area",
    driveTime: "Simple family arrival",
    summary:
      "This day exists to keep the rest of the trip calm. Drive over, settle in, and avoid turning the first step into a multi-part logistics exercise.",
    planShape: "Drive, arrive, and keep the day intentionally quiet.",
    food: "No destination dining load required.",
    spend: "Minimal spend beyond standard travel costs.",
    steps: [
      "Leave Woodford, London",
      "Arrive with parents near Daventry",
      "Stay relaxed and overnight there",
    ],
    whyItWorks:
      "Holding the family arrival in a clean single-purpose slot gives Thursday a much better launch into the trip proper.",
  },
  {
    id: "thu",
    shortDate: "Thu 2 Apr",
    label: "Rutland reset",
    theme: "Couple’s break begins",
    headline: "Parents to Hambleton, with atmosphere replacing effort.",
    location: "Parents to Hambleton / Oakham",
    driveTime: "Late morning departure recommended",
    summary:
      "The ideal opening day starts after breakfast, lands in Hambleton, and keeps the afternoon loose enough for a scenic wander, brief Oakham stop, or Rutland Water loop.",
    planShape: "Travel late morning, check in, keep afternoon light, dine locally, sleep in Hambleton.",
    food: "Keep it easy with The Finch’s Arms or go up a notch with Hitchen’s Barn.",
    spend: "Moderate unless you push dining upward.",
    steps: [
      "Leave parents after breakfast or late morning",
      "Check into The Finch’s Arms",
      "Take a short Hambleton or Rutland Water wander",
      "Optional Oakham stop if timing suits",
      "Dinner locally and overnight",
    ],
    whyItWorks:
      "The break should begin with atmosphere, not admin. Hambleton gives an immediate change of pace without asking for heavy scheduling.",
    link: {
      label: "Open Hitchen’s Barn",
      href: "https://www.hitchensbarn.co.uk/",
    },
  },
  {
    id: "fri",
    shortDate: "Fri 3 Apr",
    label: "Lincoln day",
    theme: "Main heritage anchor",
    headline: "Cathedral in the morning, castle in the afternoon, quiet countryside return at night.",
    location: "Hambleton to Lincoln",
    driveTime: "Full day out from base",
    summary:
      "Friday is the trip’s heavyweight day and should stay focused. Cathedral first, lunch in the historic quarter, castle after, then a measured return to Rutland rather than an overpacked evening.",
    planShape: "Breakfast, drive to Lincoln, heritage block, strong lunch, easy return, second overnight.",
    food: "Anchor lunch at The Bronze Pig and keep dinner calmer back near Hambleton.",
    spend: "This is the most spendful day: tickets, lunch, parking, and extras.",
    steps: [
      "Breakfast in Hambleton",
      "Drive to Lincoln and start at the cathedral",
      "Lunch in the Cathedral Quarter",
      "Visit Lincoln Castle in the afternoon",
      "Wander Steep Hill and the historic quarter",
      "Return to Hambleton for the second night",
    ],
    whyItWorks:
      "It captures the exact cathedral-and-castle brief in one compact city, giving the trip a proper centre of gravity without scrambling the rest of the schedule.",
    link: {
      label: "Book Lincoln Castle",
      href: "https://lincolncastle.digitickets.co.uk/tickets",
    },
  },
  {
    id: "sat",
    shortDate: "Sat 4 Apr",
    label: "Soft return",
    theme: "Shopping stop day",
    headline: "Check out, stop in Royal Leamington Spa, then head back toward family.",
    location: "Hambleton to Leamington Spa to parents",
    driveTime: "Westbound transition day",
    summary:
      "Saturday works best as a soft landing. Break the drive with 2 to 4 hours in Leamington, have an easy lunch, and reach your parents later without trying to manufacture another headline outing.",
    planShape: "Breakfast, checkout, drive west, shop and lunch, continue later in the day.",
    food: "Keep lunch informal. This is a shopping-stop day, not a destination-meal day.",
    spend: "Flexible and discretionary because shopping is outside the base trip budget.",
    steps: [
      "Breakfast and check out in Hambleton",
      "Drive west toward Leamington Spa",
      "Shop and pause for a low-pressure lunch",
      "Head back to your parents later in the afternoon",
    ],
    whyItWorks:
      "Using Saturday for useful enjoyment preserves Sunday fully for Easter lunch and stops the return leg from feeling like dead time.",
    link: {
      label: "Browse Leamington shopping",
      href: "https://royal-leamington-spa.co.uk/shopping/",
    },
  },
  {
    id: "sun",
    shortDate: "Sun 5 Apr",
    label: "Easter lunch",
    theme: "Protected family time",
    headline: "No competing plan. No add-on itinerary. Leave the day alone.",
    location: "Parents",
    driveTime: "Stay put",
    summary:
      "Sunday works precisely because it resists optimisation. The lunch remains the only anchor and the travel plan stops trying to extract more from the weekend.",
    planShape: "Keep the calendar clear for family.",
    food: "Easter lunch with parents is the whole point.",
    spend: "No extra planning cost required.",
    steps: ["Stay with parents", "Keep the day open", "Protect Easter lunch"],
    whyItWorks:
      "Holding a clean family day in the middle of the bank holiday weekend is what gives the entire plan its sense of order and calm.",
  },
  {
    id: "mon",
    shortDate: "Mon 6 Apr",
    label: "Drive home",
    theme: "Bank holiday return",
    headline: "Parents back to Woodford, with an early start as the sensible move.",
    location: "Daventry area to London",
    driveTime: "Early departure recommended",
    summary:
      "The source snapshot treats this as a bank holiday traffic management decision rather than a sightseeing opportunity. Leave early, keep expectations practical, and get home cleanly.",
    planShape: "Depart early, drive home, and let the trip finish without last-minute layering.",
    food: "Keep stops functional rather than turning them into another plan.",
    spend: "Standard return-travel costs only.",
    steps: ["Leave parents early", "Drive back to Woodford, London", "Arrive before traffic becomes the main story"],
    whyItWorks:
      "A straightforward final leg keeps the strong trip rhythm intact all the way to the end.",
  },
];

export const bookingSteps = [
  {
    index: "01",
    title: "Secure Thu 2 Apr and Fri 3 Apr accommodation",
    copy: "The stay choice drives the rest of the plan, especially around Easter pressure and whether Friday dinner should stay relaxed or turn into the headline meal.",
  },
  {
    index: "02",
    title: "Reserve the meal you care about most",
    copy: "That is likely Friday lunch at The Bronze Pig or Thursday dinner if you want the arrival night to feel sharper than a simple inn supper.",
  },
  {
    index: "03",
    title: "Leave Saturday flexible unless lunch matters",
    copy: "Leamington is a useful stop, not the emotional centre of the trip, so avoid pinning down too much unless a specific lunch or store matters.",
  },
  {
    index: "04",
    title: "Buy Lincoln tickets once the stay is locked",
    copy: "Cathedral and castle admissions are the cleanest bookings after accommodation because Friday is the only tightly scheduled sightseeing day.",
  },
];

export const budgetBands = [
  {
    name: "Moderate version",
    range: "£650–£1,050 for two",
    width: "62%",
    copy: "Best fit when The Finch’s Arms or a similar inn handles the stay and dining stays balanced rather than maximalist.",
  },
  {
    name: "Premium version",
    range: "£1,050–£1,600+ for two",
    width: "88%",
    copy: "Hambleton Hall or a more ambitious dining plan pulls the trip into a clearer premium bracket, especially over Easter dates.",
  },
];

export const sourceGroups = [
  {
    title: "Stay",
    links: [
      { label: "The Finch’s Arms", href: "https://www.finchsarms.co.uk/" },
      { label: "The Finch’s Arms menu", href: "https://www.finchsarms.co.uk/menu" },
      { label: "Hambleton Hall", href: "https://www.hambletonhall.com/" },
    ],
  },
  {
    title: "Dining",
    links: [
      { label: "Michelin Oakham guide", href: "https://guide.michelin.com/gb/en/rutland/oakham/restaurants" },
      { label: "Hitchen’s Barn", href: "https://www.hitchensbarn.co.uk/" },
      { label: "The Bronze Pig", href: "https://www.visitlincoln.com/listing/the-bronze-pig/95831101/" },
    ],
  },
  {
    title: "Lincoln day",
    links: [
      { label: "Lincoln Cathedral visit", href: "https://lincolncathedral.com/visit/" },
      { label: "Lincoln Cathedral tickets", href: "https://lincolncathedral.com/times-and-tickets/" },
      { label: "Lincoln Castle tickets", href: "https://lincolncastle.digitickets.co.uk/tickets" },
    ],
  },
  {
    title: "Optional stop and return",
    links: [
      { label: "Oakham Castle", href: "https://www.oakhamcastle.org/" },
      { label: "Royal Leamington Spa shopping", href: "https://royal-leamington-spa.co.uk/shopping/" },
      { label: "Leamington Shopping Park", href: "https://leamingtonshoppingpark.co.uk/store-guide/" },
    ],
  },
];
