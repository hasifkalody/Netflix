
function Iframme(props){
    return(
        <div>
           <iframe width="560" height="315" src={props.id} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}
export default Iframme