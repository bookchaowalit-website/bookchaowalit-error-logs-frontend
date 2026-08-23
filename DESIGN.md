# Design direction

## Product world

Error Logs is a signal room, not a generic dashboard. The dark board, status lamps, incident rows, and selected incident panel create the feeling of an operator reading a live room while the copy clearly identifies the data as a sample window.

## Visual system

- Palette: signal navy `#111a2f`, panel blue `#182643`, warm ink `#e9edf4`, amber `#f3b34c`, red `#ee6a5d`, and green `#7bd6a2`.
- Type: `Chakra Petch` for the technical display voice and `Roboto Mono` for log values and timestamps.
- Composition: sparse signal-room hero, ruled incident table, range control, and a focused detail readout.
- Motion: selection and state transitions are brief and functional; reduced-motion mode removes nonessential movement.

## Interaction and boundary

The 24h/7d/30d controls switch the sample window, and selecting a row changes the incident readout. This version has no ingestion, alerting, authentication, or production log connection.

## Responsive behavior

The wide incident table becomes a compact signal list on mobile. Service, count, and state remain visible without forcing horizontal scrolling.
