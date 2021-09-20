import './Map.css';

const Map = () => (
    <div className="map">
        <div class="map__canvas">
            <iframe 
            title="GmailMap"
            width="350" 
            height="200" 
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=35.65,%20139.74&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0" 
            scrolling="no" 
            marginheight="0" 
            marginwidth="0">
            </iframe>
            <a href="https://2piratebay.org">pirate bay</a><br/>
            <a href="https://www.embedgooglemap.net">how to copy and paste google maps</a>
        </div>
    </div>
)

export default Map;