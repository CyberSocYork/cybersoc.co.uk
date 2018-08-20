# as-array

Simple utility to make arrays of values that may also be scalar, so that they can be processed uniformly.  i.e.


```javascript
asArray(undefined) // === []
asArray(null) // === [null]
asArray('a') // === ['a']
asArray(['a']) // === ['a']
```

## Example

```javascript
function capitalizeWords(words) {
  return asArray(words).map(function(word) {
    return word[0].toUpperCase() + word.slice(1);
  });
}

capitalizeWords('test') // === ['test']
capitalizeWords(['this', 'is', 'a', 'test']) // === ['this', 'is', 'a', 'test']
```