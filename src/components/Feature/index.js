import {FeatureContainer, FeatureBtn} from './FeatureElements'


const Feature = ( {isBooked, setIsBooked} ) => {
    return ( 
        <FeatureContainer>
            <h1>Book us for your events</h1>
            <p>Some of the most cozy environment you will find in Yaounde for any event!</p>
            <FeatureBtn onClick={() => setIsBooked(true)}>BOOK NOW</FeatureBtn>
        </FeatureContainer>    );
}
 
export default Feature;