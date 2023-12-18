import styled from 'styled-components'
import SearchBox from './SearchBox'

const BannerRoot = styled.div`
  position: relative;
  margin: auto;
  width: calc(100vw - 64px);
  height: 55vw;
  max-width: 1392px;
  max-height: 784px;
  border-radius: 24px;
`

const Banner = () => {
  return (
    <BannerRoot>
      <div className='fresnel-greaterThan-mdless'>
        <video
          src='https://minio.fares.vn/mixivivu-dev/video/Mixivivumaybay.mp4'
          autoPlay
          playsInline
          loop
          muted
          className='absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full rounded-3xl'
        ></video>
        <SearchBox />
      </div>
    </BannerRoot>
  )
}

export default Banner
