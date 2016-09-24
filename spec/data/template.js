module.exports = `
<table>
  <tr>
    <th class="align-right duff">Foo</th>
    <th>Bar</th>
    <th>Baz</th>
  </tr>
  {{#rows}}
  <tr>
    <td>{{foo}}</td>
    <td>{{bar}}</td>
    <td>{{baz}}</td>
  </tr>
  {{/rows}}
</table>
`
