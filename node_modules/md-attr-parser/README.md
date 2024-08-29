md-attr-parser
===========

A node plugin to parse attributes (custom HTML attributes).


## Syntax

The syntax is common :

```markdown
{#thisIsAnId .thisIsAClass thisKey=thisValue}

{thatKey="value" thisKey='thatValue'}
```

## Usage

```js
const parseAttr = require('md-attr-parser');


parseAttr('{ width=500px editable=true }');

parseAttr('height=500px');
```

The output is an object of the form :
```js
{
  prop: {               // Keep the key-value attribute
    class: undefined,   // A list of class
    id: undefined,      // The uniq id
  },
  eaten: '',            // Every characters parsed
}
```

For example this code will output :
```js
parseAttr('{ width=500px editable=true #unicorn .dangerous .cute }');
```

```js
{
  prop: {
    class: ['dangerous', 'cute'],
    id: 'unicorn',
    width: '500px',
    editable: 'true',
  },
  eaten: '{ width=500px editable=true #unicorn .dangerous .cute }',
}
```

### Advanced usage

The parsing can start at a positive offset.

```js
parseAttr('SYNTAX{ width=500px editable=true }', len('SYNTAX'));
```

A configuration can also be specified, actualy, there is only one configuration option.
The default value of key without value.

```js
parseAttr('{ width=500px editable }', 0, {defaultValue: true});
// or
parseAttr('{ width=500px editable }', 0, {defaultValue: key => 'NO_VALUE_FOR_'+key.toUpperCase()});
```

## Licence

MIT
