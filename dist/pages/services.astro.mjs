import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CYlgg052.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BBBIQSgZ.mjs';
import { h as heroBgImage } from '../chunks/sanjay-hero-bg_CvTpBe45.mjs';
import { g as generalPediatricsImg } from '../chunks/general-pediatrics_2J2BhIC2.mjs';
import { g as growthImg } from '../chunks/growth-monitoring_CC2VYJHx.mjs';
import { p as picuImg } from '../chunks/picu_zj3Xs7Hw.mjs';
import { v as vaccinationsImg } from '../chunks/vaccinations_C_HvMvTj.mjs';
import { e as emergencyImg } from '../chunks/emergency-care_CL0PZScY.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      title: "General Pediatrics",
      description: "Routine checkups, growth monitoring, developmental screening, and treatment of common childhood illnesses from newborn to 18 years.",
      href: "/services/general-pediatrics",
      image: generalPediatricsImg.src,
      color: "#0A5EB0"
    },
    {
      title: "Growth & Development",
      description: "Comprehensive tracking of your child's physical growth and developmental milestones from infancy to adolescence.",
      href: "/services/growth-and-development",
      image: growthImg.src,
      color: "#0A97B0"
    },
    {
      title: "Pediatric Intensive Care (PICU)",
      description: "Advanced critical care with 24/7 monitoring, ECMO support, and ventilator management for critically ill children.",
      href: "/services/picu",
      image: picuImg.src,
      color: "#0A5EB0"
    },
    {
      title: "Vaccinations & Immunizations",
      description: "Complete IAP-recommended immunization schedule, catch-up vaccines, and travel vaccinations for children of all ages.",
      href: "/services/vaccinations",
      image: vaccinationsImg.src,
      color: "#0A97B0"
    },
    {
      title: "Emergency Care",
      description: "24/7 pediatric emergency services for acute illnesses, trauma, poisoning, seizures, and critical conditions.",
      href: "/services/emergency",
      image: emergencyImg.src,
      color: "#dc2626"
    }
  ];
  const stats = [
    { number: "18+", label: "Years Experience" },
    { number: "5", label: "Specialized Services" },
    { number: "24/7", label: "Emergency Care" },
    { number: "0-18", label: "Years Age Group" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Our Services - Pediatric Care | Dr. Sanjay D Swamy", "description": "Comprehensive pediatric services including General Pediatrics, NICU, PICU, Vaccinations, and 24/7 Emergency Care by Dr. Sanjay D Swamy in Bangalore.", "data-astro-cid-52q5xhqt": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="hero"${addAttribute(`background-image: linear-gradient(rgba(10, 94, 176, 0.85), rgba(10, 151, 176, 0.85)), url('${heroBgImage.src}'); background-position: center; background-size: cover;`, "style")} data-astro-cid-52q5xhqt> <div class="container" data-astro-cid-52q5xhqt> <div class="hero-content" data-astro-cid-52q5xhqt> <p class="overline" data-astro-cid-52q5xhqt>COMPREHENSIVE CHILD HEALTHCARE</p> <h1 data-astro-cid-52q5xhqt>Our <span class="highlight" data-astro-cid-52q5xhqt>Services</span></h1> <p class="hero-desc" data-astro-cid-52q5xhqt>Expert pediatric care across all specialties - from routine wellness visits to critical intensive care. Dr. Sanjay D Swamy and his team provide comprehensive healthcare for children of all ages.</p> <div class="hero-stats" data-astro-cid-52q5xhqt> ${stats.map((stat) => renderTemplate`<div class="stat" data-astro-cid-52q5xhqt> <span class="stat-num" data-astro-cid-52q5xhqt>${stat.number}</span> <span class="stat-label" data-astro-cid-52q5xhqt>${stat.label}</span> </div>`)} </div> <div class="hero-actions" data-astro-cid-52q5xhqt> <a href="/appointment" class="btn btn-primary" data-astro-cid-52q5xhqt>Book Appointment</a> <a href="tel:+919108091744" class="btn btn-outline" data-astro-cid-52q5xhqt>Call Now</a> </div> </div> </div> </section>  <section class="section services-section" data-astro-cid-52q5xhqt> <div class="container" data-astro-cid-52q5xhqt> <div class="section-header" data-astro-cid-52q5xhqt> <div class="section-title-block" data-astro-cid-52q5xhqt> <p class="section-overline" data-astro-cid-52q5xhqt>WHAT WE OFFER</p> <h2 class="section-title" data-astro-cid-52q5xhqt>Specialized Pediatric <span class="title-highlight" data-astro-cid-52q5xhqt>Services</span></h2> </div> <div class="section-subtitle-block" data-astro-cid-52q5xhqt> <p class="section-subtitle" data-astro-cid-52q5xhqt>From preventive care to critical intensive care, we offer a complete range of pediatric services to support your child's health at every stage of development.</p> </div> </div> <div class="services-grid" data-astro-cid-52q5xhqt> ${services.map((service, index) => renderTemplate`<a${addAttribute(service.href, "href")} class="service-card"${addAttribute(`--accent-color: ${service.color}`, "style")} data-astro-cid-52q5xhqt> <div class="service-image" data-astro-cid-52q5xhqt> <img${addAttribute(service.image, "src")}${addAttribute(service.title, "alt")} loading="lazy" data-astro-cid-52q5xhqt> <div class="service-overlay" data-astro-cid-52q5xhqt> <span class="view-more" data-astro-cid-52q5xhqt>View Details →</span> </div> </div> <div class="service-content" data-astro-cid-52q5xhqt> <div class="service-number" data-astro-cid-52q5xhqt>${String(index + 1).padStart(2, "0")}</div> <h3 data-astro-cid-52q5xhqt>${service.title}</h3> <p data-astro-cid-52q5xhqt>${service.description}</p> <span class="service-link" data-astro-cid-52q5xhqt>Learn More</span> </div> </a>`)} </div> </div> </section>  <section class="section why-section" data-astro-cid-52q5xhqt> <div class="container" data-astro-cid-52q5xhqt> <div class="why-grid" data-astro-cid-52q5xhqt> <div class="why-content" data-astro-cid-52q5xhqt> <p class="section-overline" data-astro-cid-52q5xhqt>WHY CHOOSE US</p> <h2 class="why-title" data-astro-cid-52q5xhqt>Expert Care for Your <span class="title-highlight" data-astro-cid-52q5xhqt>Child</span></h2> <p class="why-desc" data-astro-cid-52q5xhqt>Dr. Sanjay D Swamy brings 18+ years of pediatric expertise with international training from Birmingham Children's Hospital, UK. Our commitment is to provide compassionate, evidence-based care in a child-friendly environment.</p> <div class="why-features" data-astro-cid-52q5xhqt> <div class="feature-item" data-astro-cid-52q5xhqt> <div class="feature-icon" data-astro-cid-52q5xhqt> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-52q5xhqt><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" data-astro-cid-52q5xhqt></path><polyline points="22 4 12 14.01 9 11.01" data-astro-cid-52q5xhqt></polyline></svg> </div> <div class="feature-text" data-astro-cid-52q5xhqt> <h4 data-astro-cid-52q5xhqt>UK-Trained Specialist</h4> <p data-astro-cid-52q5xhqt>Advanced training from Birmingham Children's Hospital</p> </div> </div> <div class="feature-item" data-astro-cid-52q5xhqt> <div class="feature-icon" data-astro-cid-52q5xhqt> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-52q5xhqt><circle cx="12" cy="12" r="10" data-astro-cid-52q5xhqt></circle><polyline points="12 6 12 12 16 14" data-astro-cid-52q5xhqt></polyline></svg> </div> <div class="feature-text" data-astro-cid-52q5xhqt> <h4 data-astro-cid-52q5xhqt>24/7 Availability</h4> <p data-astro-cid-52q5xhqt>Round-the-clock emergency and intensive care</p> </div> </div> <div class="feature-item" data-astro-cid-52q5xhqt> <div class="feature-icon" data-astro-cid-52q5xhqt> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-52q5xhqt><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" data-astro-cid-52q5xhqt></path><circle cx="9" cy="7" r="4" data-astro-cid-52q5xhqt></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87" data-astro-cid-52q5xhqt></path><path d="M16 3.13a4 4 0 0 1 0 7.75" data-astro-cid-52q5xhqt></path></svg> </div> <div class="feature-text" data-astro-cid-52q5xhqt> <h4 data-astro-cid-52q5xhqt>Family-Centered Care</h4> <p data-astro-cid-52q5xhqt>Involving parents in every step of treatment</p> </div> </div> <div class="feature-item" data-astro-cid-52q5xhqt> <div class="feature-icon" data-astro-cid-52q5xhqt> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-52q5xhqt><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" data-astro-cid-52q5xhqt></path></svg> </div> <div class="feature-text" data-astro-cid-52q5xhqt> <h4 data-astro-cid-52q5xhqt>Evidence-Based Treatment</h4> <p data-astro-cid-52q5xhqt>Following latest IAP and international guidelines</p> </div> </div> </div> <a href="/about" class="btn btn-primary" data-astro-cid-52q5xhqt>Learn More About Dr. Swamy</a> </div> <div class="why-image" data-astro-cid-52q5xhqt> <img${addAttribute(generalPediatricsImg.src, "src")} alt="Dr. Sanjay D Swamy - Pediatric Specialist" data-astro-cid-52q5xhqt> </div> </div> </div> </section>  <section class="cta-section" data-astro-cid-52q5xhqt> <div class="container" data-astro-cid-52q5xhqt> <div class="cta-content" data-astro-cid-52q5xhqt> <p class="cta-overline" data-astro-cid-52q5xhqt>BOOK YOUR APPOINTMENT</p> <h2 class="cta-title" data-astro-cid-52q5xhqt>Ready to give your child the best pediatric care?</h2> <p class="cta-description" data-astro-cid-52q5xhqt>Schedule an appointment with Dr. Sanjay D Swamy for comprehensive, compassionate pediatric care. Same-day sick visits available.</p> <div class="cta-buttons" data-astro-cid-52q5xhqt> <a href="/appointment" class="btn btn-cta-primary" data-astro-cid-52q5xhqt>Book Appointment</a> <a href="tel:+919108091744" class="btn btn-cta-secondary" data-astro-cid-52q5xhqt> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-52q5xhqt><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" data-astro-cid-52q5xhqt></path></svg>
Call: +91 91080 91744
</a> </div> </div> </div> </section> ` })} `;
}, "C:/Users/GC Venture/OneDrive/Desktop/sanjay/Sanjay-Swami/src/pages/services/index.astro", void 0);

const $$file = "C:/Users/GC Venture/OneDrive/Desktop/sanjay/Sanjay-Swami/src/pages/services/index.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
