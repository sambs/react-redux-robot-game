export const NORTH = 'NORTH';
export const EAST = 'EAST';
export const SOUTH = 'SOUTH';
export const WEST = 'WEST';

export const ALL = [NORTH, EAST, SOUTH, WEST];

export const VECTORS = {
  [NORTH]: { x: 0, y: 1 },
  [EAST]: { x: 1, y: 0 },
  [SOUTH]: { x: 0, y: -1 },
  [WEST]: { x: -1, y: 0 }
}
