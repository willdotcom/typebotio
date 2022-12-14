export type TemplateProps = {
  name: string
  emoji: string
  fileName: string
  isComingSoon?: boolean
}

export const templates: TemplateProps[] = [
  { name: 'Lead Generation', emoji: 'đ¤', fileName: 'lead-gen.json' },
  { name: 'Customer Support', emoji: 'đ', fileName: 'customer-support.json' },
  { name: 'Quiz', emoji: 'đšī¸', fileName: 'quiz.json' },
  { name: 'Lead Scoring', emoji: 'đ', fileName: 'lead-scoring.json' },
  {
    name: 'Digital Product Payment',
    emoji: 'đŧī¸',
    fileName: 'digital-product-payment.json',
  },
  {
    name: 'FAQ',
    emoji: 'đŦ',
    fileName: 'faq.json',
  },
  {
    name: 'Conversational Resume',
    emoji: 'đ¨âđŧ',
    fileName: 'customer-support.json',
    isComingSoon: true,
  },
  {
    name: 'User Onboarding',
    emoji: 'đ§âđ',
    fileName: 'customer-support.json',
    isComingSoon: true,
  },
]
