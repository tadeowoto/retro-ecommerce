import { AcademicCapIcon } from "@heroicons/react/24/outline";

type Props = {
  type: number;
  text: string;
  href?: string;
};

const MainBtn = ({ type, text, href }: Props) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <button
        className={`${
          type === 0 ? "bg-grayBg text-text" : "bg-blueMain text-text"
        } flex gap-2 items-center justify-center text-sm font-nunito w-32 px-4 py-2 border-2 border-border rounded-md shadow-[3px_3px_0_#333] hover:shadow-[5px_5px_0_#333] hover:transform hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all hover:cursor-pointer`}
      >
        {type === 0 ? (
          <img src="/gh.svg" alt="" />
        ) : (
          <AcademicCapIcon className="w-6 h-6" />
        )}
        {text}
      </button>
    </a>
  );
};

export default MainBtn;
