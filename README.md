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

`String.titleCase()` : capitalizes first character of every consecutive string
of characters separated by a space:

```javascript
"my other string".titleCase()

// "My Other String"
```

Neither method will have any effect on any other character:

```javascript
"my stRING".capitalize()

// "My stRING"

"my otHER strinG".titleCase()

// "My OtHER StrinG"
```
