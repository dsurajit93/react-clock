

const ListDisplay = () => {
    const tech = ['html', 'css', 'js', 'bootstrap', 'ajax']
  return (
    <div>
        <ul>
      {
        tech.map((t, i)=>(
          <li key={i}>{t}</li>
        ))
      }
      </ul>
    </div>
  )
}

export default ListDisplay
