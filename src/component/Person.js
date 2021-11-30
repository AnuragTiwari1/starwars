export const Person = (props) => {
  return <div>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
      <div style={{ flex: 1 }}>name:</div>
      <div style={{ flex: 1 }}>{props.name}</div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
      <div style={{ flex: 1 }}>height:</div>
      <div style={{ flex: 1 }}>{props.height}</div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
      <div style={{ flex: 1 }}>mass:</div>
      <div style={{ flex: 1 }}>{props.mass}</div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
      <div style={{ flex: 1 }}>hair color:</div>
      <div style={{ flex: 1 }}>{props.hair_color}</div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
      <div style={{ flex: 1 }}>skin color:</div>
      <div style={{ flex: 1 }}>{props.skin_color}</div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
      <div style={{ flex: 1 }}>eye:</div>
      <div style={{ flex: 1 }}>{props.eye}</div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
      <div style={{ flex: 1 }}>birth year:</div>
      <div style={{ flex: 1 }}>{props.birth_year}</div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
      <div style={{ flex: 1 }}>gender:</div>
      <div style={{ flex: 1 }}>{props.gender}</div>
    </div>
  </div>

}