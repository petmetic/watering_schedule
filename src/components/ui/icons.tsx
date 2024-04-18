import {
  ChevronsUp,
  Leaf,
  PlusCircle,
  CircleSlash,
  Frown,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  ChevronsDown,
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
  return <ChevronDown className="text-primary" />;
};
const ArrowRight = () => {
  return <ChevronRight className="text-primary" />;
};

const ArrowUp = () => {
  return <ChevronUp className="text-primary" />;
};

const ArrowsDown = () => {
  return <ChevronsDown className="text-primary" />;
};

const ArrowsUp = () => {
  return <ChevronsUp className="text-primary" />;
};

export {
  AddIcon,
  Logo,
  EditIcon,
  FrownIcon,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  ArrowsDown,
  ArrowsUp,
};
