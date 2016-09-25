module.exports = `
<table>
  <thead>
    <tr>
      <th>Suite</th>
      <th>Passed</th>
      <th>Failed</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
    {{#rows}}
    <tr>
      <td style="text-align:right">{{suite}}</td>
      <td class="{{#passed}}passed{{/passed}}">{{passed}}</td>
      <td class="{{#failed}}failed{{/failed}}">{{failed}}</td>
      <td>{{total}}</td>
    </tr>
    {{/rows}}
  </tbody>
</table>
`
