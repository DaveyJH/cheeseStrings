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
