const ConditionalRenderer = ({
  condition,
  children,
}: {
  condition: any;
  children: React.ReactNode;
}) => {
  if (condition) return children;
  return null;
};

export default ConditionalRenderer;
