# Guidelines for Contributing

## Reporting Issues

[GitHub Issues](https://github.com/rackerlabs/canon-jquery/issues) should be
used to report all bugs and request new features. Before opening any new issues,
please read the following guidelines:

1. **Search for existing issues.** If the issue has already been reported, a fix
is likely already in progress. Feel free to add any additional information you
have to the existing issue.
2. **Include precise steps for how to reproduce.** This will help us quickly
identify the cause of the issue. Bonus points for submitting a failing test.
3. **Include as much information as possible.** Along with steps to reproduce,
make sure to include operating system and version, browser and version,
and canon-jquery version. If possible, include a stacktrace, log messages, and
any console errors.

## Submitting Pull Requests

- All pull requests should be accompanied by tests. No exceptions.
- All changes that change the public API include corresponding documentation
changes.
- When introducing new features, make sure to include relevant examples.
- Follow the [AngularJS commit message conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit).
- Make sure to follow the style guidelines below listed below.

## Style Guidelines

This library uses the [Idiomatic.js style guide](https://github.com/rwaldron/idiomatic.js/)
unless explicitly mentioned here. We also adhere to the following rules:

- Use 2 spaces for indentation.
- Trim end-of-line whitespace.
- Always end files with a new line.
- Prefer single quotes to double quotes.
- Do NOT use inner whitespace. For example:

```
var i;

// Good
if (i = 0; i < 100; i++) {
}

// Bad
if ( i = 0; i < 100; i++ ) {
}
```

Where possible, these rules are also enforced through our use of JSHint.

## License

By contributing code, you agree to license your contribution under the terms of
the [Apache License, Version 2.0](LICENSE).
