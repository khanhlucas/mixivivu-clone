import { Button } from '@/components/ui/button'

const Header = () => {
  return (
    <header className='sticky top-0 bg-white z-20 border-b border-gray-200'>
      <div className='container flex justify-between items-center h-24'>
        <div className='flex items-center gap-[40px] h-full'>
          <div className='header--logo w-[190px] h-[50px]'>
            <img src='https://mixivivu.com/_next/image?url=%2Fblack-logo.png&w=384&q=75' alt='header logo' />
          </div>
          <div className='flex gap-[24px] h-full items-center cursor-pointer text-gray-900'>
            <div className='h-full flex items-center text-gray-900'>Tìm du thuyền</div>
            <div className='h-full flex items-center text-gray-900'>Tìm vé máy bay</div>
          </div>
        </div>
        <div className='flex gap-[16px] align-center'>
          <Button>Giới thiệu về dự án</Button>
        </div>
      </div>
    </header>
  )
}

export default Header
