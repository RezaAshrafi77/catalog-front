export default function Layout({
  wrapperClassNames,
  layoutClassNames,
  children,
}) {
  return (
    <div className={`${wrapperClassNames} w-full`}>
      <div className={`${layoutClassNames} w-full max-w-[375px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1280px] mx-auto`}>
        {children}
      </div>
    </div>
  );
}
