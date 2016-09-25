module.exports = `
<table>
  <thead>
    <tr>
      <th class="alignright duff">Foo</th>
      <th style="color:blue">Bar</th>
      <th>Baz</th>
    </tr>
  </thead>
  <tbody>
    {{#rows}}
    <tr>
      <td>{{foo}}</td>
      <td>{{bar}}</td>
      <td>{{baz}}</td>
    </tr>
    {{/rows}}
  </tbody>
</table>
`
