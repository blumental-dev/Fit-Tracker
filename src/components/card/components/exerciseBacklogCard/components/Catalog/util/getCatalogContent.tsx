import { BodyPartEnum, BodyPartType } from "../../../../../../../util/enums";
import BackCatalog from "../components/BackCatalog";

const cardDictionary = {
  [BodyPartEnum.BACK]: <BackCatalog />,
  [BodyPartEnum.CHEST]: <>x</>,
  [BodyPartEnum.ARMS]: <>y</>,
  [BodyPartEnum.SHOULDERS]: <>z</>,
  [BodyPartEnum.LEGS]: <>xs</>,
};
function getCatalogContent(bodyPart: BodyPartType): JSX.Element {
  return cardDictionary[bodyPart];
}

export { getCatalogContent };
