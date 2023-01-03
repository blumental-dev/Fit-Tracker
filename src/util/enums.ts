export enum BodyPartEnum {
  BACK = "Back",
  CHEST = "Chest",
  SHOULDERS = "Shoulders",
  ARMS = "Arms",
  LEGS = "Legs",
}

export type BodyPartType =
  | BodyPartEnum.BACK
  | BodyPartEnum.CHEST
  | BodyPartEnum.SHOULDERS
  | BodyPartEnum.ARMS
  | BodyPartEnum.LEGS;
