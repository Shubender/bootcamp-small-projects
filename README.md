# SPICED Bootcamp Exercises

A collection of small exercises and projects from the first six weeks of the SPICED Academy web-development bootcamp. It records practice in JavaScript, browser interfaces, Node.js, Express, SQL, and testing.

## Browse the collection

| Folder | Examples and topics |
|---|---|
| [week-1](week-1) | JavaScript functions, scope, arrays/objects, control flow, and an HTML/CSS lab |
| [week-2](week-2) | DOM events, Flexbox, canvas, a news ticker, and an image carousel |
| [week-3](week-3) | Browser interaction exercises, panels, error handling, and local storage |
| [week-4](week-4) | jQuery/AJAX, Spotify search, incremental search, destructuring, and Node/CLI exercises |
| [week-5](week-5) | An Express/Handlebars portfolio collecting browser projects |
| [week-6](week-6) | SQL, Jest exercises, and a Twitter API experiment |
| [fun-js](fun-js) | Additional JavaScript experiments |
| [notes](notes) | Course notes and reference/example code |

## Run an exercise

This is not a single application. Each folder has its own entry point and requirements.

For a browser exercise, open its `index.html` in a browser. Examples that use requests or browser APIs may need a local static HTTP server. From the repository root, one option with Python installed is:

```bash
python -m http.server 8000
```

Then open a path such as `http://localhost:8000/week-2/kitty-carousel/`.

For Node.js exercises, inspect the selected folder's script and `package.json` before installing dependencies. Some folders have their own package manifest; the root manifest is not a universal launcher.

For the dedicated Jest exercises:

```bash
cd week-6/jest/testing
npm ci
npm test
```

## Context and status

Educational work includes exercise solutions, starter material, and course/reference examples. It should not be interpreted as a collection of independently designed production applications. The root `npm test` is a placeholder, while individual folders may contain runnable tests.

External-service examples, including the Spotify and Twitter experiments, reflect the APIs and dependencies used at the time and may require updated access or code. Individual exercises have not all been rerun for this documentation update. Existing course material and third-party assets retain their original attribution.
