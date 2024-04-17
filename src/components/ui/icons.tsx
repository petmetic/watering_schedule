import { Leaf } from "lucide-react";
import { PlusCircle } from "lucide-react";
import { CircleSlash } from "lucide-react";
import { Frown } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { ChevronUp } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { ChevronsDown } from "lucide-react";

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

const ArrowUpDown = () => {
  return <ChevronsDown className="text-primary" />;
};

export {
  AddIcon,
  Logo,
  EditIcon,
  FrownIcon,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  ArrowUpDown,
};
