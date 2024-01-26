interface SurveyContent {
  id: string
  title: string
  options: string[]
}

export const SURVEY_CONTENTS: SurveyContent[] = [
  {
    id: '1',
    title: '성별을 알려주세요.',
    options: ['남자', '여자'],
  },
  {
    id: '2',
    title: '끌리는 향을\n골라주세요.',
    options: [
      '🍓 프루티',
      '💧 워터 / 아쿠아 / 마린',
      '🪵 우디',
      '🍋 시트러스',
      '🌹 플로럴',
      '🧼 파우더리 / 코튼',
    ],
  },
  {
    id: '3',
    title: '선호하는 가격대를\n골라주세요.',
    options: ['5만원 대', '10만원 대', '20만원 대', '30만원 대', '40만원 대'],
  },
  {
    id: '4',
    title: '어떤 상황에서\n뿌리고 싶나요?',
    options: ['💄 데이트', '💼 출근', '🍺 술자리', '☕️ 전시회 / 카페'],
  },
  {
    id: '5',
    title: '어떤 계절에\n뿌리고 싶나요?',
    options: ['🌸 봄', '🍉 여름', '🍂 가을', '☃️ 겨울'],
  },
  {
    id: '6',
    title: '어떤 날씨에\n뿌리고 싶나요?',
    options: ['🌞 화창함', '⛅️ 흐림(비,눈)'],
  },
  {
    id: '7',
    title: '몸에 열이\n많나요?',
    options: ['체온 높음', '체온 낮음'],
  },
]
