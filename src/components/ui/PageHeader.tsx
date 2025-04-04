
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const PageHeader = ({ title, subtitle, className }: PageHeaderProps) => {
  return (
    <div className={cn("mb-10 text-center", className)}>
      <h1 className="mb-3">{title}</h1>
      {subtitle && <p className="text-lg text-wikichobi-medium-gray">{subtitle}</p>}
    </div>
  );
};

export default PageHeader;
