import React from 'react'


const PokeItem = (props) => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 col-sm-12 col-lg-6">
            <div className="card">
                <div className="card-header">
                    <h5>{props.name}</h5>
                    <img src={props.sprite} alt={props.name} />
                </div>

                <div className="card-body">
                  <h5>Abilities</h5>
                  {props.abilities.map((ability, key) => (
                    <div key={key}>
                      <span>{ability.ability.name}</span>
                    </div>
                  ))}
                  <h5>Types</h5>
                  {props.types.map((type, key ) => (
                    <div key={key}>
                      <span>{type.type.name}</span>
                    </div>
                  ))}
                </div>
            </div>
        </div>
        <div className="col-12 mt-3 mb-4 col-sm-12 mt-sm-4 col-lg-6 mt-lg-2">
            <div className="card">
                <div className="card-body">
                  <h5>Base Stats</h5>
                  {props.stats.map((stat, key) => (
                    <div key={key}>
                      <strong>{stat.stat.name}</strong>
                      <div className="progress">
                        <div
                        className="progress-bar"
                        role="progressbar"
                        style={{width: stat.base_stat}}
                        aria-valuenow={stat.base_stat}
                        aria-valuemin='0'
                        aria-valuemax='100'
                        >
                        {stat.base_stat}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}


export default PokeItem
