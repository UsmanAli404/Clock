# Clock

A real-time analog and digital clock built using [p5.js](https://p5js.org/), enhanced with animated geometric patterns that evolve with time. This is more than a clock — it’s a visual experience blending function with artistic expression.

[![Run on p5.js](https://img.shields.io/badge/Try%20Live%20Demo-p5.js-blue?style=for-the-badge)](https://editor.p5js.org/Usman_Ali/full/ajLHinlO7)

## 🧠 Concept

This project represents time through three concentric dials (seconds, minutes, and hours), each with its own rotating hand. The seconds dial can also display evolving mathematical patterns that change over time — turning this simple utility into a dynamic piece of generative art.

## 📦 Files Structure

- `sketch.js`: Main entry point. Initializes canvas, dials, digital clock, and animation loop.
- `dial.js`: Defines the `Dial` class for rendering clock hands and optional evolving patterns.
- `digitalClock.js`: Implements a simple, live-updating digital clock.

## ✨ Features

- ⏱ Real-time analog clock with hour, minute, and second hands
- 🔢 Digital clock displayed beneath the dials
- 🌀 Animated generative art patterns (e.g., spiral, rose curves, Lissajous figures)
- 🖍 Customizable appearance (colors, stroke weights, text size)
- 🕳 Smooth transitions with evolving `k` values in patterns

## 🔧 Usage

1. Clone this repository or copy the code into the [p5.js Web Editor](https://editor.p5js.org/).
2. Run the sketch. The canvas will adapt to your browser window size.
3. Observe:
   - Clock hands rotating in real time
   - Geometric pattern evolving within the seconds dial
   - Pattern name displayed at the bottom

## 🧩 Pattern Types

The seconds dial cycles through different mathematical patterns using a customizable index. Some of the included types:

| Pattern Name        | Description                                                  |
|---------------------|--------------------------------------------------------------|
| Spiral              | Expanding logarithmic spiral                                 |
| Rose                | Symmetric petal shapes using polar equations                 |
| Lissajous           | Oscillating figure-eight and complex loops                   |
| Rose Variation      | Dynamic petal count with modulation                          |
| Starburst           | Radiating spikes formed from cosine transformations          |
| Nested Loops        | Interference-like circular wave patterns                     |
| Wave Ring           | Ring deformations using sinusoidal motion                    |
| Interference        | Complex overlay of wave effects (see sketch for more)        |
| Time                | Experimental time-based wave pattern                         |


## 🛠 Customization

You can tweak several visual and behavioral aspects:

### Analog Dials

```js
dial.setLine(color, thickness);
dial.setCircleColor(color);
dial.setCircleStroke(strokeColor, strokeWeight);
dial.setPoints(pointColor, pointWeight); // For pattern display
```

### 🕒 Digital Clock

```js
digitalClock.setClockColor(color);
digitalClock.setClockStroke(color, weight);
digitalClock.setSize(fontSize);
```

## 📌 Notes

- The clock uses `second()`, `minute()`, and `hour()` from p5.js to remain synced with the system clock.
- Avoid using `millis()` for time tracking here — it causes gradual divergence.
- The `k` parameter in pattern functions animates the patterns smoothly over time.
- You can switch patterns manually by updating the `patternIndex`.


## 📜 License

This project is open source and free to use for educational or personal purposes.

## 🧑‍💻 Author

**Usman Ali** — BS Software Engineering Student | Lahore, Pakistan  
_Exploring the intersection of art and code._
