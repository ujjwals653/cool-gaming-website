import clsx from "clsx";

function Button({ id, title, rightIcon, leftIcon, containerClass }) {
  return (
    <button
      id={id}
      className={clsx(
        // group means the child component hover, focus or active will work when we
        // hover, focus or active on parent element.
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black pointer-events-auto",
        containerClass
      )}
    >
      {leftIcon}

      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>
        {/* Second title that appears from below */}
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>

      {rightIcon}
    </button>
  );
}

export default Button;
