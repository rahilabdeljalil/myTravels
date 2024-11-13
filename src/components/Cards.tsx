import "./cards.css"
import loction from '../img/location.jpg'

function Cards(props: any){

 console.log()
    return (
        <section className="card-section">
          <div className="card">
            <div className="card--img">
                <img src={props.img} alt="" />
            </div>
            <div className="card--content">
                 <div className="card--map">
                    <img src={loction} alt="" />
                    <h1>{props.location}</h1>
                     <a href="">View on google map</a>
                 </div>
                 <h1 className="card--title">{props.title}</h1>
                 <h3 className="card--date">{props.date}</h3>
                 <p className="card--description">{props.description}</p>
            </div>
          </div>
        </section>
    )
}

export default Cards;