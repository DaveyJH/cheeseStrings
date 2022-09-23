# cheeseStrings

A couple of handy string methods, my first npm package

Installation:

`npm install cheesestrings`

Use:

`String.capitalize()` : capitalizes first character of a string:

```javascript
"my string".capitalize()
// "My string"
```

`String.toTitleCase()` : capitalizes first character of every consecutive string
of characters separated by a space:

```javascript
"my other string".toTitleCase()
// "My Other String"
```

Neither method will have any effect on any other character:

```javascript
"my stRING".capitalize()
// "My stRING"

"my otHER strinG".toTitleCase()
// "My OtHER StrinG"
```

`String.alternateCaseWord()` : alternates the case of a word. If first character
in string is uppercase A-Z, first character of result will be uppercase, else it
will start lowercase:

```javascript
"string".alternateCaseWord()
// "sTrInG"

"Another".alternateCaseWord()
// "AnOtHeR"
```

`String.reverse()` : reverses a string:

```javascript
"my other string".reverse()
// "gnirts rehto ym"
```

Method order will affect results:

```javascript
"string".capitalize().alternateCaseWord()
// "StRiNg"

"string".alternateCaseWord().capitalize()
// "STrInG"
```

## Contributions

At this time, I am working alone on this package. This section will be updated
in due course.

## Bugs / Features

Please raise bugs via [this bug issue form](https://github.com/DaveyJH/form-test/issues/new?assignees=DaveyJH&labels=bug%2Ctriage&template=bug.yml&title=Bug%3A+).

Please raise new feature requests via [this feature request form](https://github.com/DaveyJH/cheeseStrings/issues/new?assignees=DaveyJH&labels=enhancement%2Ctriage&template=feature.yml&title=Feature%3A+).

In due course, I aim to generate query forms and documentation forms, but for
now, they will need to be submitted as blank issues. Please add relevant labels!

## Acknowledgments

Big thanks to [@SuzyBee1987](https://github.com/suzybee1987/suzybee1987) for
inspiring me to create this. I realize there are other packages out there that
may do similar things, but over time I hope to build up a library of useful
String methods for all to use. Plus...it was quite good fun!
