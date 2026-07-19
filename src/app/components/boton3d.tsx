import Link from "next/link";
import styles from "./Boton3d.module.css";

type BtnProps = {
  titulo: string;
  url?: string;
  className?: string;
};

/** Layered 3D CTA — one accessible name; faces are decorative. */
export default function Boton3d({ titulo, url, className }: BtnProps) {
  if (!url) return null;

  const faces = (
    <>
      <span aria-hidden="true">{titulo}</span>
      <span aria-hidden="true">{titulo}</span>
      <span aria-hidden="true">{titulo}</span>
      <span aria-hidden="true">{titulo}</span>
    </>
  );

  const classNames = `${styles.btn3d} ${className || ""}`;

  if (url.startsWith("http")) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={classNames}
        aria-label={titulo}
      >
        {faces}
      </a>
    );
  }

  return (
    <Link href={url} className={classNames} aria-label={titulo}>
      {faces}
    </Link>
  );
}
