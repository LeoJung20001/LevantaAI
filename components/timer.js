import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

const timer = () => (
    <CountdownCircleTimer
    isPlaying
    duration={30}
    colors={["#3266a8"]}>
        {({ remaingTime }) => <Text>{remaingTime}</Text>}
    
    </CountdownCircleTimer>
)


export default timer