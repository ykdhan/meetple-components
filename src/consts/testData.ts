export const TEST_PROFILE_URL = 'https://futureoflife.org/wp-content/uploads/2020/08/elon_musk_royal_society.jpg'

export const TEST_MORE_DATA = [
  {
    title: '삭제하기',
    onClick: () => {}
  },
  {
    title: '차단하기',
    warning: true,
    onClick: () => {}
  }
]

export const TEST_ACTION_DATA = {
  title: '채팅하기',
  onClick: () => {}
}

export const TEST_TABS = [
  { title: '추천', to: '#' },
  { title: '매칭', content: '#' },
]

export const TEST_USER = {
  name: '일론',
  message: '쏘맥 고?',
  age: 26,
  job: '테슬라 CEO',
  mbti: 'ENTJ',
  location: '서울특별시',
  school: '한양대학교',
  profile_image_url: 'https://futureoflife.org/wp-content/uploads/2020/08/elon_musk_royal_society.jpg'
}

export const TEST_SELECT_OPTIONS = [
  { value: 'INFJ', label: 'INFJ' },
  { value: 'INFP', label: 'INFP' },
  { value: 'INTJ', label: 'INTJ' },
  { value: 'INTP', label: 'INTP' },
  { value: 'ISFJ', label: 'ISFJ' },
  { value: 'ISFP', label: 'ISFP' },
  { value: 'ISTJ', label: 'ISTJ' },
  { value: 'ISTP', label: 'ISTP' },
  { value: 'ENFJ', label: 'ENFJ' },
  { value: 'ENFP', label: 'ENFP' },
  { value: 'ENTJ', label: 'ENTJ' },
  { value: 'ENTP', label: 'ENTP' },
  { value: 'ESFJ', label: 'ESFJ' },
  { value: 'ESFP', label: 'ESFP' },
  { value: 'ESTJ', label: 'ESTJ' },
  { value: 'ESTP', label: 'ESTP' },
]

export const TEST_NOTIFICATIONS = [
  {
    id: 1,
    type: 'sign-up',
    content: '회원가입 완료 내용',
    date: '2024-10-01',
  },
  {
    id: 2,
    type: 'verification-success',
    content: '인증 성공 내용',
    date: '2024-10-02',
  },
  {
    id: 3,
    type: 'verification-failure',
    content: '인증 실패 내용',
    date: '2024-10-02',
  },
  {
    id: 4,
    type: 'recommended-meeting',
    content: '추천 미팅 내용',
    date: '2024-10-03',
  },
  {
    id: 5,
    type: 'match-request',
    content: '상대방 매칭 승낙 내용',
    date: '2024-10-05',
  },
  {
    id: 5,
    type: 'match-request-remind',
    content: '상대방 매칭 O 기다림 내용',
    date: '2024-10-05',
  },
  {
    id: 6,
    type: 'matched',
    content: '매칭 성사 내용',
    date: '2024-10-06',
  },{
    id: 6,
    type: 'match-reject',
    content: '상대방 매칭 거절 내용',
    date: '2024-10-07',
  }
]
