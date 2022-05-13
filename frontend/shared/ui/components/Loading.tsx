import Image from 'next/image';

export const Loading = () => {
  return (
    <div className="preloader">
      <Image
        src="/static/img/core/preloader.gif"
        alt="Loading..."
        width={800}
        height={600}
      />
    </div>
  );
};
