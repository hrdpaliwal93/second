import '../Card.css'



interface card{
    title:string,
    content:string,

}


function Card(props:card){
    const date  = new Date()
    return <>
        <div id="card">
            <div id='card-header'>
            <h2>{props.title}</h2>
            <a href="">share</a>
            <a href="">delete</a>
            </div>
            

            <section>
                {props.content}
               
            </section>
            
            <div id='created-on'>
            {date.toDateString()}
            </div>
        </div>
    
    </>

}

export default Card