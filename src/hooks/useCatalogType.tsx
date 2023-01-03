import { getCatalogContent } from "../components/card/components/exerciseBacklogCard/components/Catalog/util/getCatalogContent";
import { BodyPartType } from "../util/enums";

export default function useCatalogType(
  BodyPartType: BodyPartType
): JSX.Element {
  return getCatalogContent(BodyPartType);
}
