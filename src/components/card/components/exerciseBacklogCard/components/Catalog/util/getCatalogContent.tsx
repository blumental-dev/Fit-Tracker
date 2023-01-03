import { BodyPartEnum, BodyPartType } from "../../../../../../../util/enums";
import BackCatalog from "../components/BackCatalog";

const cardDictionary = {
  [BodyPartEnum.BACK]: <BackCatalog />,
  [BodyPartEnum.CHEST]: <BackCatalog />,
  [BodyPartEnum.ARMS]: <BackCatalog />,
  [BodyPartEnum.SHOULDERS]: <BackCatalog />,
  [BodyPartEnum.LEGS]: <BackCatalog />,
};
function getCatalogContent(bodyPart: BodyPartType): JSX.Element {
  return cardDictionary[bodyPart];
}

export { getCatalogContent };
