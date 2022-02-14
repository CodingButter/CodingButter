import { TwitchClip } from 'react-twitch-embed';
import { VideoContainer } from "./Video.element"

const Video = ({ id, active, visible }) => {
      console.log(active, visible)
      return <VideoContainer>
            <TwitchClip muted={false} height="100%" width="100%" clip={id} />
      </VideoContainer>
}

export default Video;