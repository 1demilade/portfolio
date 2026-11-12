# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React + Vite (user preference), plain CSS, client-side routing with BrowserRouter (basename `/portfolio/`); the build copies `index.html` to `404.html` so deep links survive a refresh on GitHub Pages. Deployed to GitHub Pages at `https://1demilade.github.io/portfolio/` (Vite `base: '/portfolio/'`). No backend.

## Users

Equal weight between two audiences:
- Small-business owners looking for someone to build or redesign a website, landing page or simple web app. They need to believe this developer can make a professional site for them.
- Employers and recruiters reviewing a recent Computer Engineering graduate, who should see range across web development, AI/ML, robotics and embedded systems.

## Product Purpose

Personal portfolio for David Adeyemi (David Toluwanimi Adeyemi, GitHub `1demilade`), Web Developer and Computer Engineer based in Kaduna, Nigeria. It replaces an older template-based portfolio. Success: a visitor understands who David is and what he builds within seconds, browses the four projects in depth, and gets in touch.

## Positioning

A computer engineer who builds for the web: the same person designed a full fashion-label website, trained and deployed a cocoa leaf disease classifier, and wired two Arduino robots. Early-career and honest about it.

## Operating Context

- Visitors arrive from GitHub, LinkedIn, CV links and direct shares; many on phones.
- Contact happens through the visitor's own email app (mailto with a prefilled message) and social profiles. No form service is configured.

## Capabilities and Constraints

- Sections: hero, about, skills, projects (each with a case-study page), services, contact.
- Contact form must never claim to send; it opens the visitor's email app.
- Email address is a placeholder until the user supplies one (`src/config.js`).
- Aso & Thread is live at 1demilade.github.io/aso-thread with public code at github.com/1demilade/aso-thread.
- Never modify the Aso & Thread project folder.

## Brand Commitments

- Name on the site: David Adeyemi.
- No senior-developer claims, no invented clients, testimonials, results, metrics or deployment links.

## Evidence on Hand

- Portrait: studio photograph from the old portfolio (`assets/png/david-adeyemi.jpg`).
- Aso & Thread: the full working project at `C:\Users\LC\Documents\kasa-site\kasa-site` (React 19, Vite, React Router, plain CSS; five pages; filters; colour/size selection; WhatsApp order builder; bag). Fictional brand, self-initiated concept; Unsplash photography.
- Cocoa disease classifier ("CocoaCare"): B.Eng final-year project report, Covenant University, June 2025 (public in the old portfolio repo). DenseNet121 vs ResNet50 vs EfficientNetB0 on a balanced KaraAgro AI Cocoa Dataset subset (2,584 images per class). DenseNet121: 90% test accuracy on 776 samples, 87% under 5-fold cross-validation; per-class precision/recall/F1 in Table 4.1. Deployed test: 9/10 Anthracnose, 8/10 CSSVD, 10/10 Healthy. Flask on Kaggle + ngrok, frontend HTML/CSS/JS on Vercel; 224×224 input; diagnosis history of last 10 predictions; dark/light theme. Live link (may be down): cocoa-cnn-classify-webapp.vercel.app; code: github.com/1demilade/cocoa-cnn-classify-webapp; demo: youtube.com/watch?v=FKKUPCdVE6s. Screenshot of the app home.
- Obstacle Avoidance Robot: Arduino Uno, HC-SR04 ultrasonic sensor, L298N motor driver, servo, four DC motors, Bluetooth for a manual mode; Arduino IDE, C/C++. Fritzing wiring diagram. Demo: youtube.com/shorts/8Pg4W7Nr47Q. Code: github.com/1demilade/Arduino-Projects.
- Bluetooth Controlled Robot: Arduino Uno, HC-05 Bluetooth module, L298N, four DC motors, LEDs, buzzer; controlled from a smartphone app; Arduino IDE, C/C++. Fritzing wiring diagram. No demo link.
- Links: LinkedIn linkedin.com/in/david-adeyemi-209313274, GitHub github.com/1demilade, X x.com/demi_yemi4, YouTube youtube.com/@1-demilade, Instagram instagram.com/dt.yems.
- None: no clients, testimonials, employment history or paid work. Never invent them.

## Product Principles

1. Show the work itself: real screens, real diagrams, real numbers from the report.
2. Honest scale: early-career, self-initiated and academic projects are labelled as such.
3. One person, two crafts: web building and engineering presented as one practice, not two CVs.

## Accessibility & Inclusion

WCAG 2.1 AA: keyboard navigation, visible focus, 4.5:1 text contrast on the light ground and on every colour field, reduced-motion support.
