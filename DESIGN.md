---
name: Dheeraj Shrivastav
description: A software engineer's portfolio set as a Swiss conference poster; one claim, one grotesk, one cobalt field.
colors:
  cobalt: "#1f3bff"
  cobalt-deep: "#1730d6"
  cobalt-soft: "#dde2ff"
  paper: "#f6f6f3"
  ink: "#0d0d0d"
  ink-2: "#3d3d3a"
  ink-3: "#66665f"
  white: "#ffffff"
typography:
  display-xl:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.75rem, min(1.4rem + 4.6vw, 9.5vh), 5.25rem)"
    fontWeight: 800
    lineHeight: 0.96
    letterSpacing: "-0.04em"
  display-lg:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 1.5rem + 2.8vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.035em"
  display-md:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 1.35rem + 1.4vw, 2.5rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  index-number:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.05em"
    fontFeature: "\"tnum\" on"
  title:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "\"ss01\" on"
  label:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: "0px"
spacing:
  page-x-mobile: "20px"
  page-x: "48px"
  gutter: "24px"
  row-y: "40px"
  row-y-lg: "56px"
  section-top: "96px"
components:
  button-on-cobalt-primary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.cobalt}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "16px 24px"
  button-on-cobalt-primary-hover:
    backgroundColor: "{colors.cobalt-soft}"
    textColor: "{colors.cobalt}"
  button-on-cobalt-outline:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: "14px 24px"
  button-on-cobalt-outline-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.cobalt}"
  button-cobalt:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
  button-cobalt-hover:
    backgroundColor: "{colors.cobalt-deep}"
    textColor: "{colors.white}"
  index-row:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "20px 8px"
  index-row-hover:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.white}"
  cobalt-field:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: "56px 48px"
  header:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    height: "72px"
---

# Design System: Dheeraj Shrivastav

## Overview

**Creative North Star: "The Swiss Conference Poster"**

The site is set like a printed Swiss poster: a paper ground, black ink, and one saturated cobalt field that carries the claim. A single grotesk works at extreme size contrast, from 84px extrabold claims down to 15px meta lines, and every element sits on a 12-column grid. Hierarchy comes from size, weight and rules, never from decoration.

Density is low and deliberate. Each section has one focal element and leaves part of the grid empty; claims sit beside their evidence, indexed with stable numbers (01, 02, 03) that hold across the home page and the case studies. Motion is near absent: content is always visible, and only cobalt fills and arrow nudges transition.

The world rejects the dark-terminal developer portfolio and the centred headline over a row of rounded cards.

**Key Characteristics:**
- Paper, ink, and one cobalt field; cobalt only on the claim and on things you can act on.
- One grotesk (Schibsted Grotesk) at extreme size contrast; no second face for labels.
- 2px ink rules separate sections; 1px ink rules separate rows.
- Square corners everywhere; flat, no shadows on the page.
- Numbered index rows with stable numbers; a row inverts to cobalt on hover and focus.

## Colors

A near-monochrome print palette with a single high-chroma blue.

### Primary
- **Poster Cobalt** (cobalt): The claim field in the hero, the contact field, the case-study call-to-action band, primary buttons on paper, the hover/focus state of index rows, the active command-palette row, text selection, the caret and the focus ring.
- **Pressed Cobalt** (cobalt-deep): Hover state of cobalt buttons on paper. Never a surface of its own.
- **Cobalt Mist** (cobalt-soft): Secondary text inside the cobalt field (5.2:1 on cobalt), the hover fill of white buttons in the field, and meta text on an inverted index row.

### Neutral
- **Poster Paper** (paper): The page ground, the header, the command palette, and text on ink blocks.
- **Print Ink** (ink): Primary text, all structural rules (2px section rules, 1px row rules), the Flow diagram's root blocks, scrollbar thumb.
- **Grey Ink** (ink-2): Secondary text on paper: descriptions, intros, body paragraphs in case studies (10:1).
- **Faint Ink** (ink-3): Tertiary text: context lines, stack lists, dates, severity, figure captions, definition-list terms (5.3:1). The floor for text on paper; nothing lighter carries words.
- **White** (white): Text and outlined actions inside the cobalt field; the fill of the primary action in the field.

### Named Rules
**The One Field Rule.** Cobalt is reserved for the claim field and for things you can act on. If an element is cobalt, it is either the poster's headline field or it responds to a click.

**The Flip Rule.** Inside a cobalt field (`.on-cobalt`), selection inverts to white on cobalt and the focus ring turns white, so both stay visible.

**The Ink Tint Rule.** Faint row dividers are ink at reduced opacity (ink/20, ink/15); never introduce a new grey for lines.

## Typography

**Display Font:** Schibsted Grotesk (with Helvetica Neue, Arial, sans-serif)
**Body Font:** Schibsted Grotesk (same family)

**Character:** One grotesk carries everything. Display steps run extrabold with tight negative tracking; index numbers go to black (900); body sits at regular with the ss01 stylistic set on.

### Hierarchy
- **Display XL** (800, clamp 2.75rem to 5.25rem, 0.96): The hero claim and case-study index numbers. One per page.
- **Display LG** (800, clamp 2.25rem to 3.75rem, 1): Section titles (Work, Experience, Skills), the contact claim, case-study titles, work-row numbers (at 900).
- **Display MD** (800, clamp 1.75rem to 2.5rem, 1.05): Work item names, role titles, the case-study call-to-action headline.
- **Index Number** (900, 2.5rem, 1, -0.05em, tabular): Numbers in the hero's Selected work index.
- **Title** (700, 1.375rem, snug, -0.02em): Decisions and findings in case studies; index-row names run at 1.4rem.
- **Lead** (400, 1.125rem, 1.625): Section intros and descriptions; capped at 52 to 62ch.
- **Body** (400, 17px, 1.625): Running text, highlights and facts; capped at 65 to 70ch.
- **Label** (400 or 700, 15px): Nav, meta lines, stack lists, definition terms, footer. Sentence case, normal tracking.

### Named Rules
**The One Grotesk Rule.** Every role uses Schibsted Grotesk, including keyboard hints (`kbd` is set in the sans). Monospace appears only for literal code identifiers inside prose.

**The Contrast-By-Size Rule.** Hierarchy jumps between display and label; there are no small uppercase tracked labels above headings. Meta goes after the title in ink-3, as words.

**Tabular Numbers.** Index numbers, periods and PR numbers use tabular figures (`.tabular`).

## Layout

A 12-column grid inside a 90rem page (`max-w-page`), with 20px side padding on mobile and 48px from md up, and a 24px column gutter. The header is a thin 64px (72px md) sticky bar on the same grid: name in columns 1 to 4, nav in 5 to 10, actions in 11 to 12.

The first viewport splits 8 + 4: the cobalt field spans columns 1 to 8, the Selected work index and role/location lines take 9 to 12, and the whole thing fits the viewport height at lg. Section heads put the title in columns 1 to 4 and the intro from column 6. Content rows put the number or date in columns 1 to 3 and the body in 4 to 12 (or 4 to 11 at lg), leaving the right edge empty. Case-study sections put the heading in columns 1 to 2 and text from column 3.

Rhythm: section tops at 64px (96px md); rows at 40px (56px md) vertical padding; 24px between stacked blocks. Below md everything stacks to one column with the same rules; nothing overflows at 390px.

## Elevation & Depth

The page is flat. Depth is replaced by rules and fields: a 2px ink rule opens each section, 1px ink rules divide rows, and the cobalt field is the only colored plane. There are no shadows, glows, blurs or gradients on page surfaces.

### Named Rules
**The Rule-Not-Shadow Rule.** Separation is a drawn line or a flat field, never a shadow.

## Shapes

Square corners throughout (0px): buttons, fields, the command palette, the Flow figure, keyboard hints. Borders are ink, at 2px for structure (header base, section tops, outlined buttons, the Flow figure, the palette) and 1px for row dividers. Bullets are 10px by 2px ink dashes, not dots. Icons are one family: 1.75px strokes on a 20px grid with square caps, inline SVG in currentColor.

## Components

### Buttons
Blunt, filled, square, bold text at 17px.
- **Shape:** Square corners (0px).
- **Primary in the cobalt field:** White fill, cobalt text, 16px by 24px. Hover fills cobalt-soft.
- **Outline in the cobalt field:** 2px white border, white text, 14px by 24px so its height matches the filled button. Hover fills white with cobalt text.
- **Primary on paper:** Cobalt fill, white text, 12px by 20px, with a trailing arrow that advances 4px on hover. Hover fills cobalt-deep.
- **Hover / Focus:** Color transitions only (~150ms); focus is the global 2px cobalt outline at 3px offset (white inside the field).

### Text Links
- **On paper:** Ink text with an ink/30 underline that goes full ink on hover; external links carry the up-right arrow.
- **In the cobalt field:** White text with a white/40 to white/50 underline that goes solid on hover.
- **Underline:** 1px thick, 0.2em offset.

### Index Row (signature)
The hero's Selected work list: an ordered list where each row is a whole-row link with a tabular 900 number, a bold name, an ink-2 meta line and a right arrow, divided by 1px ink rules under a 2px-ruled heading. On hover and focus the row inverts to cobalt with white text, meta turns cobalt-soft, and the arrow moves 4px right. The numbers are stable across the home page work list and case-study headers.

### Cobalt Field
A full-bleed-within-grid cobalt block holding a display claim, cobalt-soft supporting text and the paired actions. Used for the hero claim (columns 1 to 8), the contact section and the case-study call-to-action band. Padding 40px to 56px vertical, 24px to 48px horizontal.

### Navigation
A sticky paper header with a 2px ink base rule. The name is bold 17px; nav links are 15px ink, underline on hover. The Resume link is bold with a 2px ink bottom border that turns cobalt on hover. A small square ⌘K hint (ink-3 1px border) opens the palette at lg. Mobile collapses to a two-line menu icon that opens a stacked list of bold 20px links divided by ink/20 rules.

### Command Palette
A paper panel with a 2px ink border over an ink/40 scrim, a borderless search field over a 2px ink rule, rows that fill cobalt when active, and sans keyboard hints in square 1px boxes.

### Case-Study Blocks
- **Facts:** a ruled definition list, bold terms in columns 3 to 4, values in ink-2.
- **Decision / Finding:** a 1px (decision) or 2px (finding) top rule, title at 1.375rem bold; a finding's severity follows the title as 15px ink-3 words.
- **Flow:** an architecture figure in a 2px ink frame; root nodes are ink blocks with paper text, children hang from a 2px ink spine with drawn connectors.

## Do's and Don'ts

### Do:
- **Do** keep cobalt to the claim field and actionable elements (The One Field Rule).
- **Do** open every section with a 2px ink rule and divide its rows with 1px ink rules.
- **Do** place work on the 12-column grid with the number or date in columns 1 to 3 and leave the right edge empty.
- **Do** keep index numbers stable and tabular across pages.
- **Do** put meta (status, severity, stack) after the title as ink-3 words.
- **Do** limit motion to cobalt fills and the 4px arrow nudge, and let reduced motion remove them.
- **Do** flip selection and focus to white inside `.on-cobalt` fields.

### Don't:
- **Don't** round corners; every shape is square (0px).
- **Don't** use shadows, glows, blurs or gradients on page surfaces.
- **Don't** add a second typeface; monospace is for literal code identifiers inside prose only, never labels.
- **Don't** put small uppercase tracked labels (eyebrows) above headings.
- **Don't** fade or slide content in on scroll; content is always visible.
- **Don't** set text lighter than ink-3 on paper or lighter than cobalt-soft on cobalt.
