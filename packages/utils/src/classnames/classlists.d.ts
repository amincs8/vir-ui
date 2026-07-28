export type ClassList =
  | string
  | null
  | undefined
  // | number
  | boolean
  | ClassList[]
  | Record<string, boolean>;