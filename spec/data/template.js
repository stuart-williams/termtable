module.exports = `
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
