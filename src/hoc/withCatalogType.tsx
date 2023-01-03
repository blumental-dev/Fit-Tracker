import * as React from "react";
import useCatalogType from "../hooks/useCatalogType";
import { BodyPartType } from "../util/enums";
import Box from "@mui/material/Box";
import { BaseCatalogProps } from "../components/card/components/exerciseBacklogCard/components/Catalog";

type InjectedProps = {
  BodyPartType: BodyPartType;
};

const withCatalogType = <P extends InjectedProps>(
  WrappedComponent: React.FC<BaseCatalogProps>
) => {
  type Props = P;

  const WithCatalog: React.FC<Props> = ({ BodyPartType }) => {
    const catalogContent = useCatalogType(BodyPartType);
    return (
      <>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 25vw)",
            justifyItems: "center",
          }}
        >
          <WrappedComponent content={catalogContent} />
        </Box>
      </>
    );
  };

  return WithCatalog;
};

export default withCatalogType;
