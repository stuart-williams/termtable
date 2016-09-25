module.exports = `
<table>
  <thead>
    <tr>
      <th>Foo</th>
      <th>Bar</th>
      <th>Baz</th>
    </tr>
  </thead>
  <tbody>
    {{#rows}}
    <tr>
      <td class="success">{{foo}}</td>
      <td class="warning">{{bar}}</td>
      <td class="danger">{{baz}}</td>
    </tr>
    {{/rows}}
  </tbody>
</table>
`
