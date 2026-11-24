# 0001. Record architecture decisions

- Status: accepted
- Date: 2026-11-23

## Context

OpenBase spans many services and technologies. Decisions are revisited months after they are
made, and without a record the reasoning is lost. Readers of this repository should be able
to see why the system looks the way it does, not only what it contains.

## Decision

Record every significant decision as a short Markdown ADR in `docs/adr/`, numbered
sequentially and based on `0000-template.md`. An accepted ADR is not edited; a changed
decision gets a new ADR that supersedes the old one.

## Alternatives considered

- **Wiki or external docs**: drift away from the code and are not reviewed with it.
- **Code comments only**: explain how, rarely why, and cannot hold rejected alternatives.

## Consequences

- The reasoning behind the architecture is versioned together with the code.
- Each significant decision costs a few minutes of writing.
