---
title: SASIMO — Sumo Robot
impact: A wireless sumo robot built around an ESP32 and high-torque DC motors, tuned for pushing power over top speed.
kind: Coursework
year: '2026'
role: Hardware & firmware
period: Mar — May 2026
status: Competed in course tournament
stack: [ESP32, C++, Arduino, BTS7960, PWM]
cover: ../../assets/projects/sumo-robot-cover.png
coverAlt: Top-down sketch of a sumo ring with a robot and its front wedge highlighted, heading toward an opponent outline.
links:
  - label: Source on GitHub
    href: https://github.com/luthfiarief-code/autonomous-sumo-robot
order: 3
---

## Summary

SASIMO is a mini sumo robot built for a university robotics course. Two robots enter a ring and the first one pushed out loses, so the design favors torque, traction and a low wedge over speed.

## Role & Context

Built in a small team for a robotics course. I was responsible for the electronics and the ESP32 firmware: motor driver integration, wireless control, and PWM tuning.

## Problem

Cheap hobby motor drivers overheat and cut out exactly when they’re needed most: in a stalled, full-power shoving match. The robot also had to stay controllable when one side lost traction.

## Approach & Technical Decisions

- **BTS7960 drivers** rated far above the motors’ stall current, so a long push doesn’t trip thermal protection.
- **JGB high-torque gear motors** in a differential drive, trading top speed for pushing force.
- **PWM ramping** on the ESP32 to avoid wheel spin when starting from a standstill.
- **Wireless control** over the ESP32’s built-in radio, so no extra receiver module was needed.

## Results

- Stable pushing performance without driver cut-outs across full matches. <!-- PLACEHOLDER: add tournament result -->
- A firmware structure the team could reuse for the autonomous version of the robot.

## Media & Links

Source code and wiring notes are on GitHub. Match video coming soon.
