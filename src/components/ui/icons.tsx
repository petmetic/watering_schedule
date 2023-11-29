import { Leaf } from "lucide-react";
import { PlusCircle } from "lucide-react";
import { CircleSlash } from "lucide-react";

const Logo = () => {
  return <Leaf className="h-20 w-20" />;
};

const AddIcon = () => {
  return <PlusCircle />;
};

const EditIcon = () => {
  return <CircleSlash />;
};

export { AddIcon, Logo, EditIcon };
