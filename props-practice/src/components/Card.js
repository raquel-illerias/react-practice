import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function Card(props) {
    return (
        <main style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly"}}>
            <img src={require(`../../public/images/${props.imageUrl}`)} alt="" style={{width: "150px", height: "200px", borderRadius: "8px", margin: "1rem"}}/>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: "1.5rem"}}>
                <ul style={{display: "flex", flexDirection: "column", justifyContent: "space-evenly"}}>
                    <li><LocationOnIcon style={{color: "#F55A5A"}}/>{props.location}</li>
                    <li>{props.googleMapsUrl}</li>
                </ul>
                <h3>{props.title}</h3>
                <ul style={{display: "flex"}}>
                    <li>{props.startDate}</li>
                    <li>-</li>
                    <li>{props.endDate}</li>
                </ul>
                <p style={{textAlign: "center"}}>{props.description}</p>
            </div>
        </main>
    )
}


export default Card;