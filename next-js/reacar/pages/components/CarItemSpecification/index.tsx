type CarItemSpecificationProps = {
  text: string;
  icon: React.ReactNode;
};

export const CarItemSpecification = ({
  text,
  icon,
}: CarItemSpecificationProps) => {
  return (
    <div className="flex items-center space-x-1">
      {icon}
      <p>{text}</p>
    </div>
  );
};
