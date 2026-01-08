import type { Note, Tag } from '@/types';

export const cards: Note[] = [
  {
    id: 'n-001',
    title: 'Meeting notes',
    excerpt:
      'Discuss Q1 roadmap and action items. Review budget allocation and timeline.',
    tags: [
      { name: 'work', color: '#4A90E2' },
      { name: 'planning', color: '#00D084' },
    ],
    pinned: true,
    createdAt: '2026-01-03T09:00:00Z',
    updatedAt: '2026-01-04T10:30:00Z',
    archived: true,
    categoryId: '1',
  },
  {
    id: 'n-002',
    title: 'Project deadline reminder',
    excerpt:
      'Submit design mockups by Friday. Include all variations and responsive layouts.',
    tags: [
      { name: 'design', color: '#A29BFE' },
      { name: 'urgent', color: '#FF6B6B' },
    ],
    pinned: false,
    createdAt: '2026-01-02T14:20:00Z',
    archived: false,
    categoryId: '2',
  },
  {
    id: 'n-003',
    title: 'Personal goals 2026',
    excerpt:
      'Learn TypeScript, read 12 books, workout 4 times a week, travel to 3 new countries.',
    tags: [
      { name: 'personal', color: '#F7B731' },
      { name: 'goals', color: '#FFB8A3' },
    ],
    pinned: true,
    createdAt: '2026-01-01T00:00:00Z',
    archived: false,
    categoryId: '1',
  },
  {
    id: 'n-004',
    title: 'Grocery list',
    excerpt:
      'Milk, eggs, bread, cheese, tomatoes, cucumbers, olive oil, pasta.',
    tags: [
      { name: 'shopping', color: '#F291B0' },
      { name: 'home', color: '#38D39F' },
    ],
    pinned: false,
    createdAt: '2026-01-04T08:15:00Z',
    updatedAt: '2026-01-04T11:00:00Z',
    archived: false,
    categoryId: '4',
  },
  {
    id: 'n-005',
    title: 'Code review feedback',
    excerpt:
      'Check PR #234. Refactor utils functions, improve error handling, add unit tests.',
    tags: [
      { name: 'code', color: '#7D7D7D' },
      { name: 'work', color: '#4A90E2' },
      { name: 'review', color: '#56CCF2' },
    ],
    pinned: false,
    createdAt: '2026-01-03T16:45:00Z',
    archived: false,
    categoryId: '5',
  },
  {
    id: 'n-006',
    title: 'API Documentation',
    excerpt:
      'Write endpoints documentation. Include examples, error codes, and authentication.',
    tags: [
      { name: 'documentation', color: '#FFD966' },
      { name: 'backend', color: '#4A90E2' },
    ],
    pinned: true,
    createdAt: '2026-01-02T11:30:00Z',
    archived: false,
    categoryId: '6',
  },
  {
    id: 'n-007',
    title: 'Weekend plans',
    excerpt:
      'Visit museum on Saturday morning, dinner with friends at 7pm, hike on Sunday.',
    tags: [
      { name: 'personal', color: '#F7B731' },
      { name: 'weekend', color: '#F291B0' },
    ],
    pinned: false,
    createdAt: '2026-01-04T09:00:00Z',
    archived: false,
    categoryId: '1',
  },
  {
    id: 'n-008',
    title: 'Database migration notes',
    excerpt:
      'Migrate from MongoDB to PostgreSQL. Plan downtime window, backup strategy, rollback plan.',
    tags: [
      { name: 'work', color: '#4A90E2' },
      { name: 'database', color: '#FF6B6B' },
      { name: 'critical', color: '#FF6B6B' },
    ],
    pinned: true,
    createdAt: '2026-01-01T13:20:00Z',
    updatedAt: '2026-01-03T15:00:00Z',
    archived: false,
    categoryId: '8',
  },
];

export const categoriesList: Tag[] = [
  { name: 'work', color: '#4A90E2' },
  { name: 'planning', color: '#00D084' },
  { name: 'design', color: '#A29BFE' },
  { name: 'urgent', color: '#FF6B6B' },
  { name: 'personal', color: '#F7B731' },
  { name: 'goals', color: '#FFB8A3' },
  { name: 'shopping', color: '#F291B0' },
  { name: 'home', color: '#38D39F' },
  { name: 'code', color: '#7D7D7D' },
  { name: 'review', color: '#56CCF2' },
  { name: 'documentation', color: '#FFD966' },
  { name: 'backend', color: '#4A90E2' },
  { name: 'weekend', color: '#F291B0' },
  { name: 'database', color: '#FF6B6B' },
  { name: 'critical', color: '#FF6B6B' },
];
