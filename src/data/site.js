/* Global site configuration — contact details, socials, nav */

const ADDRESS = "2nd Floor, VoyageNest House, Linking Road, Bandra West, Mumbai 400050";

export const SITE = {
  name: "VoyageNest",
  tagline: "Travel More, Celebrate Life",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  email: "hello@voyagenest.com",
  whatsappNumber: "919876543210",
  whatsapp:
    "https://wa.me/919876543210?text=Hi%20VoyageNest!%20I%27d%20like%20to%20plan%20a%20trip.",
  address: ADDRESS,
  /* Google Maps' cross-platform directions URL: no origin, so it routes from
     wherever the visitor actually is, and it hands off to the native app on a
     phone instead of opening the web map. */
  directionsHref:
    "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(ADDRESS)
};

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/packages", label: "Packages" },
  { to: "/destinations", label: "Destinations" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];

export const fmtINR = (n) => "₹" + n.toLocaleString("en-IN");
