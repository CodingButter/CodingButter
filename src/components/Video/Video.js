const Video = ({ url }) => {
      console.log()
      return <iframe
            src={url}
            height="100%"
            width="100%"
            allowfullscreen>
      </iframe>
}

export default Video;