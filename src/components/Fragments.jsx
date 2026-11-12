import './Fragments.css'

/** CocoaCare's per-class scores from the report, set as a small results panel. */
export function ResultsCard({ results, compact = false }) {
  return (
    <figure className={`frag frag--results${compact ? ' frag--compact' : ''}`} data-ui>
      <table>
        <caption>DenseNet121, test set (776 images)</caption>
        <thead>
          <tr>
            <th scope="col">Class</th>
            <th scope="col">Precision</th>
            <th scope="col">Recall</th>
            <th scope="col">F1</th>
          </tr>
        </thead>
        <tbody>
          {results.perClass.map((row) => (
            <tr key={row.name}>
              <th scope="row">{row.name}</th>
              <td>{row.precision.toFixed(2)}</td>
              <td>{row.recall.toFixed(2)}</td>
              <td>{row.f1.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th scope="row">Accuracy</th>
            <td colSpan={3}>0.90</td>
          </tr>
        </tfoot>
      </table>
    </figure>
  )
}

/** A robot's bill of parts, set like a component label. */
export function PartsCard({ parts, title = 'Parts' }) {
  return (
    <figure className="frag frag--parts" data-ui>
      <figcaption>{title}</figcaption>
      <dl>
        {parts.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    </figure>
  )
}
