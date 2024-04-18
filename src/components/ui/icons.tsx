import {
  ChevronDown,
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

export { AddIcon, Logo, EditIcon, FrownIcon, ArrowDown };
