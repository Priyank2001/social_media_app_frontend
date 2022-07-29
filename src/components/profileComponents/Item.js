export default function Item (props){
    return (
        <div key={props.turtle.name + "-" + props.index}>
        <h1>{props.turtle.name} ({props.turtle.nickName})</h1>
        <p>Weapon of choice: {props.turtle.weapon}</p>
        <img src={props.turtle.imgUrl} alt={`${props.turtle.name}`} width="200"/>
        <hr/>
        </div>
                
                

            )
}