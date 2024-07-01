# React RRule Builder

> Recurrence rules generator form built with React

[![LICENSE](https://img.shields.io/npm/l/express.svg)](LICENSE)
[![npm](https://img.shields.io/npm/dm/localeval.svg)](https://npm-stat.com/charts.html?package=rrule-builder)

### This project is no longer maintained by me. Thank you for all your past contributions. Let the forks rock it for you.

![Screenshot](https://i.imgur.com/ACb5prg.png)

## Description

This is [ReactJS](http://facebook.github.io/react/index.html) project based on [Create React Library](https://github.com/UdiliaInc/create-react-library) and using [Bootstrap](https://github.com/twbs/bootstrap) styling. It's built with the help of a great [rrule.js](https://github.com/jakubroztocil/rrule) library.

It also uses:

- [lodash](https://github.com/lodash/lodash)
- [moment](https://github.com/moment/moment)
- [react-datetime](https://github.com/YouCanBookMe/react-datetime)

## Demo

<!-- https://fafruch.github.io/react-rrule-generator -->

## Installation

`npm install --save rrule-builder@latest`

## Usage

In your CSS index file don't forget to import styles:

```css
@import '~bootstrap/dist/css/bootstrap.css';       // this lib uses boostrap (v.5.3.3)
```

Then you're good to go.  
Just use it:

```tsx
import RRuleBuilder from "rrule-builder";

// render it as it is

const SimpleRender = () => <RRuleBuilder onChange={(rrule) => console.log(rrule)} rruleString={rrule} />;
```

## API

### Props

| Name             | Type                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onChange**     | `function`             | <b>REQUIRED.</b> Callback trigger when the RRule changes. The callback receives newly generated RRule `string`.                                                                                                                                                                                                                                                                                                                                                                     |
| **rruleString**  | `string`               | You can pass your own RRule value to RRuleGenerator and use it like controlled input component.                                                                                                                                                                                                                                                                                                                                                                                     |
| **translations** | `function` or `object` | Accepts a function or an object with translations for all labels in the component. By default all labels are in English. You can pass your own translation object or function, which has the following signature: `(key: string, replacements: object) => string`. It receives key of the label in form of `'repeat.yearly.on_the'` and an object for placeholder replacements, e.g., `{ value: error.value }`. Example translation objects are placed in `/src/lib/translations/`. |

<br />

## License

MIT
