import type { ReactNode } from "react";

interface CarPhotoProps {
  src: string;
  className?: string;
  fit?: "contain" | "cover";
  children?: ReactNode;
}

export const CarPhotoComponent = ({
  src,
  className = "",
  fit = "contain",
  children,
}: CarPhotoProps) => (
  <div className={`car-photo${className ? ` ${className}` : ""}`}>
    <div
      className="car-photo__blur"
      style={{ backgroundImage: `url('${src}')` }}
      aria-hidden
    />
    <div
      className={`car-photo__img${fit === "cover" ? " car-photo__img--cover" : ""}`}
      style={{ backgroundImage: `url('${src}')` }}
    />
    {children}
  </div>
);

export type { CarPhotoProps };
