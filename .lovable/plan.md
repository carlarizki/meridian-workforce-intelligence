# Responsive layout pass

## Goal
Make every Meridian screen comfortable on phones and tablets without changing its content, calculations, or visual identity.

## Changes
- Replace the fixed desktop sidebar with a compact mobile header and slide-over navigation; preserve the current sidebar on larger screens.
- Rework the page header and content spacing for narrow widths so titles, status labels, and actions wrap cleanly.
- Make dashboard grids collapse progressively from multi-column layouts to one column.
- Keep dense tables usable through contained horizontal scrolling, with clear first columns and no page-wide overflow.
- Adjust tabs, filters, cards, charts, and dialogs so controls remain reachable and text does not clip.
- Preserve the hybrid typography: Plus Jakarta Sans for headings and large figures, system sans for operational detail.

## Validation
- Check the main Workforce flow and representative dense screens at mobile, tablet, and desktop sizes.
- Confirm navigation, tabs, dialogs, and scrolling still work.
- Confirm there are no horizontal page overflows, clipped controls, runtime errors, or build errors.

## Technical details
- Keep responsive behavior in existing React components using Tailwind breakpoints and semantic design tokens.
- Use a controlled mobile navigation drawer from the main page shell rather than duplicating navigation state.
- Add bounded overflow only around genuinely wide data tables or visualizations.
