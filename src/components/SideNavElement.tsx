interface SideNavElementProps {
  isActive: boolean;
  icon: React.ReactNode;
  onClick: () => void;
}

const SideNavElement: React.FC<SideNavElementProps> = ({
  isActive,
  icon,
  onClick,
}) => {
  return (
    <li
      className={` flex items-center rounded-lg justify-center p-2 cursor-pointer ${
        isActive
          ? "bg-hilightMetal text-iconActive"
          : "hover:bg-hilightMetal text-iconDefault"
      }`}
      onClick={onClick}
    >
      {icon}
    </li>
  );
};

export default SideNavElement;
