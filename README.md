# Termtable

## Usage

```js

const Termtable = require('termtable')
const Mustache = require('mustache') // Use whatever templating language you like!

const template = `
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Passed</th>
      <th>Failed</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
    {{#rows}}
    <tr>
      <td class="alignright">{{name}}</td>
      <td class="{{#passed}}passed{{/passed}}{{^passed}}dull{{/passed}}">{{passed}}</td>
      <td class="{{#failed}}failed{{/failed}}{{^failed}}dull{{/failed}}">{{failed}}</td>
      <td class="total">{{total}}</td>
    </tr>
    {{/rows}}
  </tbody>
</table>
`

const styles = {
  table: { borderColor: 'gray' },
  th: { color: 'white', fontWeight: 'bold' },
  td: { textAlign: 'center' },
  passed: { color: 'green' },
  failed: { color: 'red' },
  total: { color: 'cyan' },
  dull: { color: 'gray' },
  alignright: { textAlign: 'right' }
}

const model = {
  rows: [{
    name: 'Foo',
    passed: 2,
    failed: 1,
    total: 3
  }, {
    name: 'Bar',
    passed: 1,
    failed: 0,
    total: 1
  }, {
    name: 'Baz',
    passed: 0,
    failed: 2,
    total: 2
  }]
}

Termtable.render(Mustache.render(template, model), styles)
```

## Styles

### colour

* black
* red
* green
* yellow
* blue
* magenta
* cyan
* white
* gray

### fontStyle

* italic (not widely supported)
* underline
* strikethrough (not widely supported)

### fontWeight

* bold

### textAlign

* left
* center
* right

### verticalAlign

* top
* center
* bottom
