# logJS

Origiinally Created in 18 - 01 - 2021

log is a simple utility that helps in logging colorful outputs to the console.
This module depends on the popular, [colors](https://www.npmjs.com/package/colors) module.

# Setup:

In your work directory:

```js
npm i @samislam/log
```

In your NodeJS app:

```js
const log = require("@samislam/log");
```

# Usage

```js
log.info("here is an information message");
log.warn("here is an warning message");
log.error("here is an error message");
log.success("here is an success message");
log.default("here is a default message");
```

![screenshot_1](https://raw.githubusercontent.com/samislam/log/main/screenshots/screenshot_1.png)


### Printing The Error Label

- You can print the label in the output directly, for example:

```js
log.error(log.label, "Could Not Connect To Database")
```

![screenshot_2](https://raw.githubusercontent.com/samislam/log/main/screenshots/screenshot_2.png)


- However, you can only use `log.label` as the first argument in any `log.something()` function.
- log.label is an array that gets evaluated to a string internally for you, therefore, printing it is useless unless you use log.something() and pass it as the first argument, (ex: `log.info(log.label, "Listening on port 3000...")`) .

### Getting The Error Name

if you need the label, use `log.something.name` to get it, for example:

```js
log.error(`There was an ${log.error.name}`);
```

You might think that this is useless, but I think this could be helpful in some scenarios, for example, you might need to know the type of the log that's being printed, such as the following example:

```js
const x = "error";
// later ...
log[x]({
    status: log[x].name
});
```

# API Reference

| Method | Description |
| --- | --- |
| log | is an object |
| log.something() | is a function, returns nothing.<br>syntax:<br>log.something(\[label\]\[,...args\])<br>for example: log.error() log.info() and so on. |
| log.something.name | is a string representing the name of the method (not the caller, nor the method, but a predefined hard-coded string), for example: log.error.name will return a string "error". |
| log.label | is an array, useless unless used as the first argument in log.something() |
