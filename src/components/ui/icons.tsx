import {
  ChevronDown,
  ChevronsDown,
  CircleSlash,
  Frown,
  Leaf,
  PlusCircle,
} from "lucide-react";

const Logo = () => {
  return <Leaf className="h-20 w-20" />;
};

const AddIcon = () => {
  return <PlusCircle />;
};

const EditIcon = () => {
  return <CircleSlash />;
};

const FrownIcon = () => {
  return <Frown />;
};

const ArrowDown = () => {
  return <ChevronDown />;
};

const ArrowsDown = () => {
  return <ChevronsDown className="text-primary" />;
};

export { AddIcon, Logo, EditIcon, FrownIcon, ArrowDown, ArrowsDown };
