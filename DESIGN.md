---
name: David Adeyemi
description: A light, colourful developer portfolio whose proof is the work itself.
colors:
  cool-white: "#f5f6f8"
  surface-grey: "#e9ebef"
  rule-grey: "#dde0e6"
  indigo-ink: "#141826"
  slate-muted: "#4a5163"
  uno-blue: "#0f5fa6"
  l298n-red: "#c8232c"
  motor-yellow: "#f4c20d"
  cocoa-green: "#2f7a3b"
  etu-night: "#171a2b"
  etu-paper: "#f2efe8"
  tint-blue: "#cfe3f6"
  tint-red: "#f8d3cf"
  tint-yellow: "#fbe38a"
  tint-green: "#d3ead5"
  paper-white: "#ffffff"
typography:
  display:
    fontFamily: "Red Hat Display, Segoe UI, system-ui, sans-serif"
    fontSize: "12.2vw"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Red Hat Display, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.2rem + 5vw, 5.5rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Red Hat Display, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1rem + 2.2vw, 2.75rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  lead:
    fontFamily: "Red Hat Text, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem)"
    fontWeight: 500
    lineHeight: 1.3
  body:
    fontFamily: "Red Hat Text, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Red Hat Text, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem)"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  pill-inline: "3px"
  base: "6px"
  round: "50%"
spacing:
  margin: "clamp(16px, 2.4vw, 32px)"
  section-gap: "clamp(112px, 14vw, 200px)"
  max: "1440px"
components:
  button-primary:
    backgroundColor: "{colors.indigo-ink}"
    textColor: "{colors.cool-white}"
    typography: "{typography.body}"
    rounded: "{rounded.base}"
    padding: "0 24px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.uno-blue}"
    textColor: "{colors.paper-white}"
  button-accent:
    backgroundColor: "{colors.uno-blue}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.base}"
    padding: "0 24px"
    height: "52px"
  button-accent-hover:
    backgroundColor: "{colors.indigo-ink}"
  button-light:
    backgroundColor: "{colors.cool-white}"
    textColor: "{colors.indigo-ink}"
    rounded: "{rounded.base}"
    padding: "0 24px"
    height: "52px"
  button-light-hover:
    backgroundColor: "{colors.motor-yellow}"
  tag:
    backgroundColor: "{colors.surface-grey}"
    textColor: "{colors.indigo-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.base}"
    padding: "4px 10px"
  input:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.indigo-ink}"
    rounded: "{rounded.base}"
    padding: "14px 16px"
    height: "54px"
  data-panel:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.indigo-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.base}"
    padding: "clamp(16px, 2vw, 24px)"
---

# Design System: David Adeyemi

## Overview

**Creative North Star: "The Parts Bench"**

A cool, well-lit bench with the work laid out on it. The ground is near-white and the ink is indigo-black; colour arrives only as whole flat fields borrowed from the projects themselves: the Arduino Uno's blue, the L298N driver's red, the DC motor's yellow, CocoaCare's green, and Aso & Thread's etu night. Each field is a place (a section, a project frame, the contact card, the footer), never a glow, a gradient or a decoration.

Type does the shouting. Red Hat Display at weight 900, set in tight uppercase, carries the name, section titles and the closing "Say hello" at poster scale; Red Hat Text carries everything read. Between the two there is generous air: sections are separated by large vertical gaps, and projects are shown as one oversized framed visual beside a compact text cluster, not as a card grid.

Proof is presented as interface: real screenshots inside coloured frames, wiring diagrams multiplied onto pale tints so their white paper disappears, and small white data panels holding the real report numbers and parts lists. Surfaces are flat at rest; motion is quick, eased-out, and confined to state and entrance.

**Key Characteristics:**
- Cool white ground, indigo ink, four project-derived saturated fields plus etu, used as whole areas.
- Red Hat Display 900 uppercase for display; Red Hat Text for reading.
- One radius (6px) for nearly everything; flat fills, no shadows.
- Large asymmetric 12-column compositions with oversized media.
- Work shown as real artefacts: screenshots, multiplied diagrams, white data panels.

## Colors

A light, cool neutral system punctuated by saturated, flat fields taken from the projects.

### Primary
- **Uno Blue** (`uno-blue`): the working accent. Focus rings, hover state for links, titles and dark buttons, the accent button, the strongest inline highlight, and the footer field.

### Secondary
- **L298N Red** (`l298n-red`): the contact card field. White text only.
- **Motor Yellow** (`motor-yellow`): the services field, text selection, the light-button hover, focus rings on dark fields, the footer email hover, invalid-field outline on red.
- **Cocoa Green** (`cocoa-green`): the CocoaCare frame and results band; positive totals in data panels and result bars.

### Tertiary
- **Etu Night / Etu Paper** (`etu-night`, `etu-paper`): the Aso & Thread frame and the order-panel band, with its warm paper ink.
- **Pale Tints** (`tint-blue`, `tint-red`, `tint-yellow`, `tint-green`): grounds for wiring diagrams (blue, yellow), the "Good to know" note (yellow), and inline word highlights in prose (all four).

### Neutral
- **Cool White** (`cool-white`): page ground; ink on dark buttons.
- **Surface Grey** (`surface-grey`): tags, pending-link chips, alternate rows in feature tables, empty result-bar tracks.
- **Rule Grey** (`rule-grey`): the 1px row rules inside data panels, and nowhere else.
- **Indigo Ink** (`indigo-ink`): all text on light grounds, the default button, video play chip, numbered step discs.
- **Slate Muted** (`slate-muted`): secondary text, captions, metadata labels.
- **Paper White** (`paper-white`): data panels, form fields, and text on blue, red and green.

### Named Rules
**The Whole Field Rule.** A saturated colour appears as a complete flat area that owns a section or frame, or as a small solid mark (dot, bar, button). Never as a glow, gradient, tinted shadow, or border accent.

**The Paired Ink Rule.** Every field has one fixed ink: white on blue, red and green; indigo on yellow; etu paper on etu night. Focus rings switch to motor yellow on any dark field.

**The Borrowed Palette Rule.** New fields come from a project's own hardware or interface, not from a colour wheel.

## Typography

**Display Font:** Red Hat Display, weights 700 and 900 (with Segoe UI, system-ui)
**Body Font:** Red Hat Text, weights 400, 500, 700 (with Segoe UI, system-ui)

**Character:** A heavy, compact geometric display in caps against a calm, open humanist text face from the same family; engineering clarity with a friendly finish.

### Hierarchy
- **Display** (900, 12.2vw, 0.86, -0.04em, uppercase): the name across the hero and the footer "Say hello" (12vw); fitted to the full width, never wrapped.
- **Headline** (900, step-head clamp 2.5rem to 5.5rem, 0.95, uppercase): section titles and the services list. Case-study titles and the next-project link use clamp(1.875rem, 0.9rem + 4vw, 5.5rem) at -0.04em.
- **Title** (900, step-sub clamp 1.75rem to 2.75rem, uppercase): project names, case-study section headings, contact card title.
- **Figure** (Display 900, clamp(4rem, 2rem + 6vw, 8rem), 0.9, tabular numerals): headline result numbers on case studies.
- **Lead** (Text 500, step-lead clamp 1.25rem to 1.625rem, 1.2 to 1.35): hero role line, about prose, case-study lead.
- **Body** (Text 400, step-body clamp 1.0625rem to 1.1875rem, 1.55): reading text, capped around 44 to 68ch.
- **Label** (Text 500 or 700, step-small clamp 0.8125rem to 0.875rem): navigation, tags, captions, metadata, form labels, data panels. Sentence case, no tracking.

### Named Rules
**The Two Voices Rule.** Display is 900, uppercase, tightly tracked; text is sentence case with zero tracking. Never set Red Hat Text in caps, and never letterspace small labels.

**The Tabular Proof Rule.** Every number that comes from a report, price or quantity uses tabular numerals.

## Layout

A 12-column grid inside a 1440px max width, with the page margin `clamp(16px, 2.4vw, 32px)` doubling as the column gap. Sections separate by `clamp(112px, 14vw, 200px)`. Compositions are asymmetric: headings take the left 4 to 6 columns, text or detail clusters take columns 8 to 12.

The hero is a full-viewport grid: intro and actions top-left, links top-right, the name across the middle, a four-tile project strip, then location and social in the bottom corners. Project blocks pair one oversized visual (columns 1 to 6, bleeding into the left margin, heights varying 60 to 84svh per project) with a cluster of detail shot, text and tags. Case studies place a framed hero, then sections with the heading in the left third and body in the right two-thirds.

Breakpoints: 899px (columns collapse to one, visuals go full-bleed at 5:4), 760px (hero reorders to nav, name, intro, place, strip; two-up tiles; full-width buttons), 560px (header and tables stack).

## Elevation & Depth

Flat. There are no drop shadows anywhere at rest or on hover. Depth comes from tonal layering only: white panels on coloured or grey grounds, grey surfaces on the cool-white page, screenshots set inside coloured frames. Wiring diagrams use `mix-blend-mode: multiply` so they print into their tint rather than sit on it.

### Named Rules
**The Flat Bench Rule.** Nothing floats. If an element needs separation, give it a different flat ground, not a shadow.

## Shapes

One radius, 6px, on buttons, tags, inputs, panels, video frames, screenshots, project frames and the contact card. Exceptions are deliberate: 3px on inline word highlights, 5px on thin result bars, full circles for skill dots and numbered step discs, and 0 where an image is multiplied into its tint or a visual bleeds to the viewport edge (left-bleeding project frames round only their right corners). Borders are absent except the 1px rule-grey rows inside data panels. Icons are a single set of 24px-grid stroke glyphs at stroke width 2, round caps, drawn inline at 16 to 22px.

## Components

### Buttons
Solid, compact, and quick to answer a press.
- **Shape:** gently squared (6px), min height 52px, 0 24px padding, Text 700 at body size, optional trailing arrow icon at 18px.
- **Primary:** indigo ink fill with cool-white text; hover turns Uno blue.
- **Accent:** Uno blue fill with white text; hover turns indigo. Used for the single lead action in the hero.
- **Light:** cool-white fill on a dark field; hover turns motor yellow.
- **Hover / Press:** fill swaps over 200ms; trailing arrow nudges 3px right; press scales to 0.97 over 160ms with the ease-out curve. Hover only applies on fine pointers.

### Text Links
Text 500 with a 2px underline drawn by a pseudo-element; on hover the line retracts from left to right (260ms ease-out). Nav links instead shift to Uno blue.

### Tags
Grey surface chips (6px, 4px 10px, label size, 500). Larger on case studies (8px 14px, body size). Static, never interactive.

### Inputs / Fields
- **Style:** white fill, no border, 6px, min height 54px, 14px 16px padding, body size; textarea 120px minimum.
- **Focus:** a 2px inset indigo outline fades in (160ms).
- **Error:** 3px motor-yellow outline offset 2px on the red card, with a bold white message led by a small yellow dot.
- **Select:** native arrow removed, replaced by a 9px drawn chevron in ink.

### Navigation
A plain bar: the name as a small Display 900 uppercase mark at body size on the left, label-size Text 500 links on the right with 8px vertical hit padding; hover turns them blue. Under 560px the bar stacks left-aligned.

### Data Panels (signature)
White 6px panels on coloured or grey grounds holding real data: a bold caption, then a right-aligned tabular table or definition list with 1px rule-grey row rules, muted column heads, and a green bold total row. Label-size type, 1.4 line height.

### Project Frames (signature)
Each project lives in a flat field (etu, green, tint-yellow, tint-blue). Screenshots sit inset top-left at 86% width, 6px corners, cropped by the frame's bottom; on hover they drift up-left and scale 1.015 over 900ms. Diagrams fill 90% with multiply blending and scale 1.03 on hover.

### Contact Card
A 6px red field split 44/56: pitch on the left, a slightly deeper red form panel on the right with white fields and an indigo submit button. Single column below 899px.

### Order Builder (embedded artefact)
A live Aso & Thread order panel that deliberately keeps that product's own palette (sanyan beige, etu ink, alaari red) and square inner controls so it reads as the other product. It is an exhibit, not a pattern for this system; do not borrow its colours or square controls elsewhere.

## Do's and Don'ts

### Do:
- **Do** give every saturated colour a whole area or a solid mark, with its fixed paired ink.
- **Do** keep a single 6px radius on all new containers, controls and media.
- **Do** set display type in Red Hat Display 900 uppercase with negative tracking, and reading type in Red Hat Text sentence case.
- **Do** show proof as real artefacts: screenshots in coloured frames, diagrams multiplied onto tints, numbers in white data panels with tabular numerals.
- **Do** confine hover effects to `(hover: hover) and (pointer: fine)` and give every animation a reduced-motion fallback.
- **Do** use the ease-out curve `cubic-bezier(0.23, 1, 0.32, 1)` with a 160ms press scale of 0.97.

### Don't:
- **Don't** add drop shadows, glows or gradients; separate with flat grounds.
- **Don't** arrange projects as a grid of identical cards; give each its own oversized frame.
- **Don't** put a small uppercase or letterspaced label above a heading.
- **Don't** reuse the order builder's sanyan, etu-square or alaari styling outside that embedded panel.
- **Don't** draw borders around containers; the only rules are the 1px rows inside data panels.
