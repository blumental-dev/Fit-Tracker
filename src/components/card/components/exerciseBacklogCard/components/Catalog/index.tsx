export type BaseCatalogProps = {
  content: React.ReactNode;
};

const BaseCatalog: React.FunctionComponent<BaseCatalogProps> = ({
  content,
}) => {
  return <>{content}</>;
};

export default BaseCatalog;
