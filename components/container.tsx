"use client";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="max-w-[2520px]
        mx-auto xl:px-20 md:px-10 sm:ps-2 px-4
    "
    >
      {children}
    </div>
  );
};

export default Container;
