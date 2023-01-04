export enum BodyPartEnum {
  BACK = "back",
  CHEST = "chest",
  SHOULDERS = "shoulders",
  ARMS = "arms",
  LEGS = "legs",
}

export type BodyPartType =
  | BodyPartEnum.BACK
  | BodyPartEnum.CHEST
  | BodyPartEnum.SHOULDERS
  | BodyPartEnum.ARMS
  | BodyPartEnum.LEGS;
