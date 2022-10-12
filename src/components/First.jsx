

export const First = ({values,change}) => {

    const cambio = ()=>{
      const grados = document.getElementById('grados');
      const nuevo = grados.value;
      change(nuevo);
    }
    
  
    return (
      <>
   
           <div className="container">
              <div className="temp">
                <select name="grados" id="grados" onChange={cambio}>
                  <option value='metric'>C º</option>
                  <option value="imperial">F º</option>
                </select> 
              </div>   
              <div className="view">
                  <img src={values.urlIcon}  />
                  <p className="grado">{values.temp} <span>º</span></p>
                  <p className="description">{values.description}</p>
                  <p className="main">{values.main}</p>
              </div>
  
              <div className="data">
                  
                  <div className='data-1'>
                    <div className="feels-like">
                        <span className="icon-thermometer-2"></span>
                        <div className='option'>
                          <p>Feels like:</p>
                          <p>{values.feelLikes}º</p>
                        </div>
                    </div>
                    <div className="humidity">
                        <span className="icon-droplet"></span>
                        <div className='option'>
                          <p>Humidity:</p>
                          <p>{values.humidity} %</p>
                        </div>
                    </div>
                  </div>
  
                  <div className='data-2'>
                    <div className="wind-speed">
                        <span className="icon-wind"></span>
                        <div className='option'>
                          <p>Wind speed:</p>  
                          <p>{values.speed} miles/h</p>
                        </div>
                    </div>
                    <div className="pressure">
                        <span className="icon-compass2"></span>
                        <div className='option'>
                          <p>Pressure:</p>
                          <p>{values.pressure} hpa</p>
                        </div>
                    </div>
                  </div>
                  
              </div>  
  
          </div>
      </>
    )
  }
  