import styled from 'styled-components'
import SearchForm from '@/components/SearchForm.tsx'

const SearchBoxWrapper = styled.div`
  position: absolute;
  bottom: -296px;
  transform: translateX(-50%);
  left: 50%;
  padding: 40px 24px 24px;
  width: 1216px;
  margin: auto;
  z-index: 2;
  border-radius: 32px;
  border: 1px solid #e2e8f0;
  background-color: #fff;
  box-shadow:
    0 1px 2px 0 rgba(16, 24, 40, 0.06),
    0 1px 3px 0 rgba(16, 24, 40, 0.1);
  gap: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const SearchBox = () => {
  return (
    <SearchBoxWrapper>
      <div className='flex flex-col gap-[16px] gray-900'>
        <h4 className='text-center text-4xl font-bold text-gray-900'>Mở cánh cửa khám phá cùng Mixivivu</h4>
        <p className='lg text-center text-lg'>Mixivivu - Đặt chân lên đỉnh mây với một bước nhảy</p>
      </div>
      <SearchForm />
    </SearchBoxWrapper>
  )
}

export default SearchBox
