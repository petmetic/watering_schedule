import {
  ChevronDown,
  ChevronsDown,
  CircleSlash,
  Frown,
  Leaf,
  PlusCircle,
  Sprout,
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

const ImagePlaceHolder = () => {
  return <Sprout className="text-primary" />;
};

export {
  AddIcon,
  Logo,
  EditIcon,
  FrownIcon,
  ArrowDown,
  ArrowsDown,
  ImagePlaceHolder,
};
