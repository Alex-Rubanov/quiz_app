export const DIFFICULTY_OPTIONS = [
  { id: 1, name: 'easy' },
  { id: 2, name: 'medium' },
  { id: 3, name: 'hard' },
] as const

export const QUANTITY_OPTIONS = [
  { id: 1, name: '8' },
  { id: 2, name: '10' },
  { id: 3, name: '12' },
] as const

export const OPTION_LABELS = ['A', 'B', 'C', 'D']

export const TIME_PER_QUESTION = {
  easy: 20,
  medium: 15,
  hard: 10,
} as const

export const QUIZ_GAME_STATUS = {
  IDLE: 'idle',
  CONFIG: 'config',
  PLAY: 'play',
} as const
